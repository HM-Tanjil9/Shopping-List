import { toast } from "react-toastify";
export function showSuccess(message) {
    toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: false
    })
}

export function showError(message) {
    toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: false
    })
}

export function showInfo(message) {
    toast.info(message, {
        position: "top-right",
        autoClose: 1500,
        pauseOnHover: false
    })
}