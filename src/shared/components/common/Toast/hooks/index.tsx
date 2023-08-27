import { toast } from 'react-toastify';

export interface ToastifyBodyProps {
  message?: string;
  type: 'success' | 'warning' | 'error';
  once?: boolean;
}

const useToast = () => {
  // Remove toast before
  let currentToastId: React.ReactText | null;

  const toastSingleMode = ({ once, type, message }: ToastifyBodyProps) => {
    if (currentToastId && once) {
      toast.dismiss(currentToastId);
    }
    let typeColor: string;
    switch (type) {
      case 'error':
        typeColor = '#ff0045';
        break;
      case 'warning':
        typeColor = '#ffcc00';
        break;
      default:
        typeColor = '#339900';
    }

    currentToastId = toast(message, {
      progressStyle: {
        background: typeColor,
        top: 0,
      },
    });

    return currentToastId;
  };

  return { toastSingleMode };
};

export default useToast;
