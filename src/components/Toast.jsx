import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, X } from "lucide-react";

const Toast = ({ message, type = "success", isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 50, x: "-50%" }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className={`fixed bottom-6 left-1/2 z-[70] flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-2xl border ${
            type === "success"
              ? "bg-emerald-50 dark:bg-emerald-900/80 border-emerald-200 dark:border-emerald-700 text-emerald-800 dark:text-emerald-200"
              : "bg-red-50 dark:bg-red-900/80 border-red-200 dark:border-red-700 text-red-800 dark:text-red-200"
          }`}
          role="alert"
        >
          {type === "success" ? (
            <CheckCircle size={20} className="text-emerald-500" />
          ) : (
            <XCircle size={20} className="text-red-500" />
          )}
          <span className="text-sm font-medium">{message}</span>
          <button
            onClick={onClose}
            className="ml-2 p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Dismiss notification"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Custom hook for toast management
export const useToast = () => {
  const [toast, setToast] = useState({ message: "", type: "success", isVisible: false });

  const showToast = useCallback((message, type = "success") => {
    setToast({ message, type, isVisible: true });
  }, []);

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  }, []);

  return { toast, showToast, hideToast };
};

export default Toast;