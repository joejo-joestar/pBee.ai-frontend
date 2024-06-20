import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../components/ReactToastify/react-toastify.scss";

export const toastError = (message: string) => {
  toast.error(message, {
    className: "font",
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    pauseOnFocusLoss: false,
    theme: "colored",
  });
};
export const toastSuccess = (message: string) => {
  toast.success(message, {
    className: "font",
    position: "top-center",
    autoClose: 3000,
    pauseOnFocusLoss: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
export const toastInfo = (message: string) => {
  toast.info(message, {
    className: "font",
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    pauseOnFocusLoss: false,
    theme: "colored",
  });
};
