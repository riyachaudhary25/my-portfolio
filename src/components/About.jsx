import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Briefcase } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

// Custom hook for count-up animation
const useCountUp = (target, duration = 2000, trigger = false) => {
  const [count, setCount] = useState(0);
  const startRef = useRef(null);

  useEffect(() => {
    if (!trigger) return;
    startRef.current = null;
    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration, trigger]);

  return count;
};

const AnimatedStat = ({ label, value, icon: Icon, suffix = "" }) => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const count = useCountUp(parseInt(value) || 0, 2000, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors"
    >
      <Icon className="w-5 h-5 text-indigo-500 mb-2" />
      <p className="text-2xl font-bold text-slate-900 dark:text-white">
        {count}{suffix}
        {!inView && <span className="opacity-0">{value}</span>}
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        {label}
      </p>
    </motion.div>
  );
};

// Simple useInView polyfill (works without intersection observer dependency)
function useInView({ threshold = 0.1 } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white dark:bg-slate-900"
      aria-label="About me"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <p className="text-indigo-500 dark:text-indigo-400 font-medium mb-3">
            Get To Know Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Stats with animated counters */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <AnimatedStat label="CGPA" value="8.06" icon={BookOpen} />
              <AnimatedStat label="Certifications" value="4" icon={Award} suffix="+" />
              <AnimatedStat label="Projects" value="3" icon={Briefcase} suffix="+" />
              <AnimatedStat label="Experience" value="1" icon={Award} suffix="+ Year" />
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-500" />
                Education
              </h3>
              <div className="space-y-3">
                {personalInfo.education.map((edu, index) => (
                  <div
                    key={index}
                    className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors"
                  >
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">
                      {edu.degree}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                      {edu.institution}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-indigo-500 dark:text-indigo-400 font-medium">
                        {edu.period}
                      </span>
                      <span className="text-xs text-slate-400 dark:text-slate-500">
                        {edu.details}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-500" />
                Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                {personalInfo.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-medium rounded-lg border border-indigo-100 dark:border-indigo-800/50"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;