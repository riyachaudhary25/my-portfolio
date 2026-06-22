const SectionDivider = () => {
  return (
    <div className="relative h-16 sm:h-20 overflow-hidden bg-white dark:bg-slate-900">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 justify-center">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-300/50 dark:via-indigo-600/30 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-indigo-400/50 dark:bg-indigo-500/30" />
          <div className="w-3 h-3 rounded-full bg-indigo-500/70 dark:bg-indigo-400/50" />
          <div className="w-2 h-2 rounded-full bg-indigo-400/50 dark:bg-indigo-500/30" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-300/50 dark:via-indigo-600/30 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;