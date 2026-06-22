import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.15 },
};

const statVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
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

            {/* Quick Stats */}
            <motion.div
              {...staggerContainer}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {[
                { label: "CGPA", value: "8.06", icon: BookOpen },
                { label: "Certifications", value: "4+", icon: Award },
                { label: "Projects", value: "3+", icon: GraduationCap },
                { label: "Experience", value: "Intern", icon: Award },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  {...statVariants}
                  className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors"
                >
                  <stat.icon className="w-5 h-5 text-indigo-500 mb-2" />
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
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