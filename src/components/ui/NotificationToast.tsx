"use client";

import { useEffect, useState } from "react";
import { useNotificationStore } from "@/lib/store/useNotificationStore";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, XCircle, Info, X } from "lucide-react";

export const NotificationToast = () => {
  const [mounted, setMounted] = useState(false);
  const { notifications, removeNotification } = useNotificationStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-3 w-full max-w-sm px-4">
      <AnimatePresence>
        {notifications.map((n) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="bg-brand-dark text-white p-4 rounded-3xl shadow-2xl flex items-center gap-4 border border-white/10 backdrop-blur-md"
          >
            <div className="bg-brand-primary p-2 rounded-2xl">
              {n.type === 'success' && <CheckCircle className="w-5 h-5 text-white" />}
              {n.type === 'error' && <XCircle className="w-5 h-5 text-white" />}
              {n.type === 'info' && <Info className="w-5 h-5 text-white" />}
            </div>
            
            <p className="flex-1 font-bold text-sm">{n.message}</p>
            
            <button 
              onClick={() => removeNotification(n.id)}
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
