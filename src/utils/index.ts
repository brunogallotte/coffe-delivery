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