import { toast } from "react-toastify";
export default function ToastMessage(message) {
  const options = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  return {
    success() {
      toast.success(message, options);
    },
    warn() {
      toast.warning(message, options);
    },
    nomal() {
      toast(message, options);
    },
    error() {
      toast.error(message, options);
    },
    info() {
      toast.info(message, options);
    },
  };
}
