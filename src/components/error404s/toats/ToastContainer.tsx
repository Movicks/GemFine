import { forwardRef, useImperativeHandle, useState } from 'react';
import { createPortal } from 'react-dom';

type ToastType = 'success' | 'error';

interface Toast {
    id: number;
    message: string;
    type: ToastType;
}

export interface ToastContainerHandle {
    addToast: (message: string, type: ToastType) => void;
}

const ToastContainer = forwardRef<ToastContainerHandle>((_, ref) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    useImperativeHandle(ref, () => ({
        addToast(message: string, type: ToastType) {
            const id = new Date().getTime();
            setToasts((currentToasts) => [...currentToasts, { id, message, type }]);

            setTimeout(() => {
                setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
            }, 3000); // Remove toast after 3 seconds
        }
    }));

    return createPortal(
        <div className="fixed top-4 right-4 z-50">
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    className={`mb-2 p-4 rounded-md shadow-md text-white ${
                        toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                    }`}
                >
                    {toast.message}
                </div>
            ))}
        </div>,
        document.body
    );
});

export default ToastContainer;
