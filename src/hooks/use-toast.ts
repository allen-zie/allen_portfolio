
import React, { useState, useCallback } from "react";

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
}

let toastCount = 0;
const toastCallbacks: Array<(toast: Toast) => void> = [];

export const toast = ({ title, description, variant = "default" }: Omit<Toast, "id">) => {
  const id = (++toastCount).toString();
  const newToast: Toast = {
    id,
    title,
    description,
    variant,
  };
  
  toastCallbacks.forEach(callback => callback(newToast));
  
  // Auto-remove toast after 5 seconds
  setTimeout(() => {
    toastCallbacks.forEach(callback => callback({ ...newToast, id: `remove-${id}` }));
  }, 5000);
};

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Toast) => {
    if (toast.id.startsWith('remove-')) {
      const idToRemove = toast.id.replace('remove-', '');
      setToasts(prev => prev.filter(t => t.id !== idToRemove));
    } else {
      setToasts(prev => [...prev, toast]);
    }
  }, []);

  // Register callback when component mounts
  React.useEffect(() => {
    toastCallbacks.push(addToast);
    return () => {
      const index = toastCallbacks.indexOf(addToast);
      if (index > -1) {
        toastCallbacks.splice(index, 1);
      }
    };
  }, [addToast]);

  const dismiss = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return {
    toasts,
    toast,
    dismiss,
  };
};
