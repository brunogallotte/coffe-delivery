import { ReactNode, createContext, useReducer, useState } from "react";
import { CoffeProps } from "../@types/style";
import { CartReducer } from "../reducers/reducer";
import { addToCartAction, decrementQuantityOnProductAction, incrementQuantityOnProductAction, removeToCartAction } from "../reducers/actions"
import { FieldValues } from "react-hook-form";

interface OrderStateType {
  cep: string
  rua: string
  cidade: string
  numero: string
  complemento: string
  bairro: string
  uf: string
}

interface CartContextType {
    cart: CoffeProps[] | undefined
    quantity: number
    totalAmount: number
    orderState: OrderStateType
    selectedMethodPayment: string | null | undefined
    addToCart: (product: CoffeProps | undefined, quantity: number) => void
    removeToCart: (productId: number) => void
    incrementQuantityOnProduct: (productId: number) => void
    decrementQuantityOnProduct: (productId: number) => void
    changeOrderState: (order: OrderStateType | FieldValues) => void
    changeSelectedMethodPayment: (method: string) => void
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
    const [orderState, setOrderState] = useState<OrderStateType>({
      cep: '',
      rua: '',
      cidade: '',
      numero: '',
      complemento: '',
      bairro: '',
      uf: ''
    })

    const [selectedMethodPayment, setSelectedMethodPayment] = useState<string | null>()

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

      function changeOrderState(order: OrderStateType | FieldValues) {
        setOrderState(order as OrderStateType)
      }

      function changeSelectedMethodPayment(method: string) {
        setSelectedMethodPayment(method)
      }
    
    return(
        <CartContext.Provider value={{ cart, addToCart, quantity, removeToCart, totalAmount, incrementQuantityOnProduct, decrementQuantityOnProduct, changeOrderState, orderState, changeSelectedMethodPayment, selectedMethodPayment }}>
            {children}
        </CartContext.Provider>
    )
}