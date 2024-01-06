import { toast } from "react-toastify"
import { CoffeProps } from "../@types/style"

export const parseToBrl = (amount = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(amount)
}

export const getTotalPrice = (items: CoffeProps[]) => {
    return items.reduce((acumulator: number, currentProduct) => {
      if (currentProduct.price && currentProduct.quantity) {
        return (acumulator += currentProduct.price * currentProduct.quantity)
      }
      return 0
    }, 0)
}

export const notify = (message: string) => toast.error(message, {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
})

export const notifySuccess = (message: string) => toast.success(message, {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
})
