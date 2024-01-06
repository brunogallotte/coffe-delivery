import { CoffeProps } from "../@types/style"
import { getTotalPrice, notify, notifySuccess } from "../utils"
import { ActionTypes } from "./actions"

interface CartState {
    cart: CoffeProps[]
    quantity: number
    totalAmount: number 
}

interface Action {
    type: ActionTypes
    payload: any
}

export function CartReducer(state: CartState, action: Action) {
    switch(action.type) {
      case ActionTypes.ADD_PRODUCT_TO_CART: {
        
        const currentProduct: CoffeProps = action.payload.data
        currentProduct.quantity = action.payload.quantity

        const verifyIndexProductExistInCart = state.cart.findIndex(
          (product) => product.id === currentProduct.id
        )

        if (verifyIndexProductExistInCart !== -1) {
          // Atualiza quantidade caso o produto já esteja no carrinho
          const updatedCart = [...state.cart];
          updatedCart[verifyIndexProductExistInCart].quantity = currentProduct.quantity > 0 ? currentProduct.quantity : state.cart[verifyIndexProductExistInCart].quantity;
          
          const totalAmount = getTotalPrice(updatedCart)

          return {
            ...state,
            cart: updatedCart,
            totalAmount: totalAmount,
          }
        } else if (currentProduct.quantity < 1) {
          notify('Quantidade inválida')
          
          return {
            ...state
          }
        } else {
          const updatedCart = [...state.cart, action.payload.data];
          const totalAmount = getTotalPrice(updatedCart)

          notifySuccess('Adicionado ao carrinho')
          
          return {
            ...state,
            cart: updatedCart,
            totalAmount: totalAmount
          }
        }
      }

      case ActionTypes.DELETE_PRODUCT_TO_CART: {
        const currentCart = [...state.cart]
        const updatedCart = currentCart.filter(product => {
          return product.id != action.payload.productId
        })

        const totalAmount = getTotalPrice(updatedCart)

        return {
          ...state,
          cart: updatedCart,
          totalAmount: totalAmount
        }
        
      }

      case ActionTypes.INCREMENT_QUANTITY: {
        const productIdToIncrementQuantity = action.payload.productId
        const productIndexToIncrementQuantity = state.cart.findIndex(product => product.id === productIdToIncrementQuantity)

        if (productIndexToIncrementQuantity !== -1) {
          const updatedCart = [...state.cart]

          const updatedProduct = { ...updatedCart[productIndexToIncrementQuantity] }
          updatedProduct.quantity += 1

          updatedCart[productIndexToIncrementQuantity] = updatedProduct

          const totalAmount = getTotalPrice(updatedCart)

          return {
            ...state,
            cart: updatedCart,
            totalAmount: totalAmount
          }
        }
        

        return state
      }

      case ActionTypes.DECREMENT_QUANTITY: {
        const productIdToDecrementQuantity = action.payload.productId
        const productIndexToDecrementQuantity = state.cart.findIndex(product => product.id === productIdToDecrementQuantity)
        const productToDecrement = state.cart.find(product => product.id === productIdToDecrementQuantity)

        if (productIndexToDecrementQuantity !== -1 && productToDecrement && productToDecrement.quantity > 1) {
          const updatedCart = [...state.cart]

          const updatedProduct = { ...updatedCart[productIndexToDecrementQuantity] }
          updatedProduct.quantity -= 1

          updatedCart[productIndexToDecrementQuantity] = updatedProduct
          const totalAmount = getTotalPrice(updatedCart)

          return {
            ...state,
            cart: updatedCart,
            totalAmount: totalAmount
          }
        }
        
        return state
      }
    }
}