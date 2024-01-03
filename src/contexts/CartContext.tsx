import { ReactNode, createContext, useReducer } from "react";
import { CoffeProps } from "../@types/style";
import { CartReducer } from "../reducers/reducer";
import { ActionTypes, addToCartAction, decrementQuantityOnProductAction, incrementQuantityOnProductAction, removeToCartAction } from "../reducers/actions"

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
    const [cartState, dispatch] = useReducer(CartReducer, {
        cart: [],
        totalAmount: 0,
        quantity: 0
      } as CartState)
    
      const { cart, quantity, totalAmount } = cartState
    
      function addToCart(product: CoffeProps | undefined, quantity: number) {
        if(product) {
          dispatch(addToCartAction(product, quantity))
        }
      }
    
      function removeToCart(productId: number) {
        dispatch(removeToCartAction(productId))
      }
    
      function incrementQuantityOnProduct(productId: number) {
        dispatch(incrementQuantityOnProductAction(productId))
      }
    
      function decrementQuantityOnProduct(productId: number) {
        dispatch(decrementQuantityOnProductAction(productId))
      }
    
    return(
        <CartContext.Provider value={{ cart, addToCart, quantity, removeToCart, totalAmount, incrementQuantityOnProduct, decrementQuantityOnProduct }}>
            {children}
        </CartContext.Provider>
    )
}