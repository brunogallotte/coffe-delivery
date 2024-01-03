import { ReactNode, createContext, useReducer } from "react";
import { CoffeProps } from "../@types/style";
import { getTotalPrice } from "../utils";

interface CartContextType {
    cart: CoffeProps[] | undefined
    quantity: number
    totalAmount: number
    addToCart: (product: CoffeProps | undefined, quantity: number) => void
    removeToCart: (productId: number) => void
    incrementQuantityOnProduct: (productId: number) => void
    decrementQuantityOnProduct: (productId: number) => void
}

interface CartState {
    cart: CoffeProps[]
    quantity: number
    totalAmount: number 
}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartState, dispatch] = useReducer((state: CartState, action: any) => {
        switch(action.type) {
          case 'ADD_PRODUCT_TO_CART': {
            
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
              };
            } else {
              const updatedCart = [...state.cart, action.payload.data];
              const totalAmount = getTotalPrice(updatedCart)
              
              return {
                ...state,
                cart: updatedCart,
                totalAmount: totalAmount
              }
            }
          }
    
          case 'DELETE_PRODUCT_TO_CART': {
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
    
          case 'INCREMENT_QUANTITY': {
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
    
          case 'DECREMENT_QUANTITY': {
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
    
        return state
      }, {
        cart: [],
        totalAmount: 0,
        quantity: 0
      })
    
      const { cart, quantity, totalAmount } = cartState
    
      function addToCart(product: CoffeProps | undefined, quantity: number) {
        if(product) {
          dispatch({
            type: 'ADD_PRODUCT_TO_CART',
            payload: {
              data: product,
              quantity
            }
          })
        }
      }
    
      function removeToCart(productId: number) {
        dispatch({
          type: 'DELETE_PRODUCT_TO_CART',
          payload: {
            productId
          }
        })
      }
    
      function incrementQuantityOnProduct(productId: number) {
        dispatch({
          type: 'INCREMENT_QUANTITY',
          payload: {
            productId
          }
        })
      }
    
      function decrementQuantityOnProduct(productId: number) {
        dispatch({
          type: 'DECREMENT_QUANTITY',
          payload: {
            productId
          }
        })
      }
    
    return(
        <CartContext.Provider value={{ cart, addToCart, quantity, removeToCart, totalAmount, incrementQuantityOnProduct, decrementQuantityOnProduct }}>
            {children}
        </CartContext.Provider>
    )
}