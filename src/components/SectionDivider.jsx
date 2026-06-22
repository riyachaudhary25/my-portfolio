const SectionDivider = () => {
  return (
    <div className="relative h-16 sm:h-20 overflow-hidden bg-white dark:bg-slate-900">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 justify-center">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-300/50 dark:via-indigo-600/30 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 dark:from-indigo-500 dark:to-cyan-500 animate-pulse" />
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 dark:from-cyan-500 dark:to-indigo-500 animate-pulse" style={{ animationDelay: '0.6s' }} />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-300/50 dark:via-purple-600/30 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;