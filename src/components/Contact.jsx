import { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const INITIAL_FORM_STATE = { name: "", email: "", message: "" };

// Simple email regex for validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = ({ showToast }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [touched, setTouched] = useState({ name: false, email: false, message: false });

  // Validation state
  const validation = useMemo(() => ({
    name: formData.name.trim().length >= 2,
    email: EMAIL_REGEX.test(formData.email),
    message: formData.message.trim().length >= 10,
  }), [formData]);

  const isFormValid = validation.name && validation.email && validation.message;

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }, []);

  const getFieldClasses = useCallback((fieldName) => {
    const base = "w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm";
    if (!touched[fieldName]) return base;
    if (validation[fieldName]) {
      return `${base} border-green-400 dark:border-green-500 focus:ring-green-500`;
    }
    return `${base} border-red-400 dark:border-red-500 focus:ring-red-500`;
  }, [touched, validation]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setSending(true);

    const { name, email, message } = formData;

    // Try Formspree first (free service)
    try {
      const response = await fetch("https://formspree.io/f/xrbekdly", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        showToast("Message sent successfully! I'll get back to you soon.", "success");
      } else {
        throw new Error("Formspree failed");
      }
    } catch {
      // Fallback to mailto
      const mailtoLink = `mailto:${personalInfo.email}?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(name)} (${encodeURIComponent(email)})`;
      window.open(mailtoLink);
      showToast("Email client opened. Please send the message from there.", "success");
    }

    setSubmitted(true);
    setFormData(INITIAL_FORM_STATE);
    setSending(false);
    setTimeout(() => setSubmitted(false), 5000);
  }, [formData, showToast]);

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-white dark:bg-slate-900"
      aria-label="Contact me"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-500 dark:text-indigo-400 font-medium mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                Let's work together
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                I'm currently looking for opportunities in Software Development,
                Cybersecurity, or Data Analytics. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-indigo-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    Email
                  </p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-indigo-500" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    Location
                  </p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={getFieldClasses("name")}
                    placeholder="John Doe"
                  />
                  {touched.name && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2">
                      {validation.name ? (
                        <CheckCircle size={16} className="text-green-500 animate-checkmark" />
                      ) : (
                        <AlertCircle size={16} className="text-red-500" />
                      )}
                    </span>
                  )}
                </div>
                {touched.name && !validation.name && (
                  <p className="text-xs text-red-500 mt-1">Name must be at least 2 characters</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Your Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={getFieldClasses("email")}
                    placeholder="john@example.com"
                  />
                  {touched.email && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2">
                      {validation.email ? (
                        <CheckCircle size={16} className="text-green-500 animate-checkmark" />
                      ) : (
                        <AlertCircle size={16} className="text-red-500" />
                      )}
                    </span>
                  )}
                </div>
                {touched.email && !validation.email && (
                  <p className="text-xs text-red-500 mt-1">Please enter a valid email address</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  Message
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-normal ml-2">
                    ({formData.message.length}/500)
                  </span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    rows={5}
                    maxLength={500}
                    className={getFieldClasses("message") + " resize-none"}
                    placeholder="Tell me about your opportunity..."
                  />
                  {touched.message && (
                    <span className="absolute right-3 top-3">
                      {validation.message ? (
                        <CheckCircle size={16} className="text-green-500 animate-checkmark" />
                      ) : (
                        <AlertCircle size={16} className="text-red-500" />
                      )}
                    </span>
                  )}
                </div>
                {touched.message && !validation.message && (
                  <p className="text-xs text-red-500 mt-1">Message must be at least 10 characters</p>
                )}
              </div>
              <button
                type="submit"
                disabled={sending || (touched.name && !isFormValid)}
                className="w-full px-6 py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                {sending ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : submitted ? (
                  <CheckCircle size={16} className="animate-checkmark" />
                ) : (
                  <Send size={16} />
                )}
                {sending ? "Sending..." : submitted ? "Sent!" : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;