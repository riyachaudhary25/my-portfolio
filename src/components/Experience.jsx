import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "../data/portfolioData";

const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex items-start gap-6 mb-10 last:mb-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline Line (Desktop) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 -translate-x-1/2" />

      {/* Content */}
      <div className={`flex-1 ${isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
        <div
          className={`p-5 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:shadow-lg hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1 ${
            item.type === "work"
              ? "border-l-4 border-l-indigo-500"
              : "border-l-4 border-l-emerald-500"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            {item.type === "work" ? (
              <Briefcase className="w-4 h-4 text-indigo-500" />
            ) : (
              <GraduationCap className="w-4 h-4 text-emerald-500" />
            )}
            <span className="text-xs font-medium text-indigo-500 dark:text-indigo-400">
              {item.period}
            </span>
          </div>
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">
            {item.title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-3">
            {item.company}
          </p>
          <ul className="space-y-1.5">
            {item.description.map((desc, i) => (
              <li
                key={i}
                className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed"
              >
                • {desc}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Timeline Dot (Desktop) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border-2 border-indigo-500 z-10 mt-6">
        <div className="w-2 h-2 m-auto rounded-full bg-indigo-500" />
      </div>

      {/* Spacer for the other side */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/50"
      aria-label="My experience"
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
            My Professional Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {experience.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;