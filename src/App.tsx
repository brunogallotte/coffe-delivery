import { ThemeProvider } from "styled-components" 
import { BrowserRouter } from "react-router-dom"

import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Router } from "./Router"
import { createContext, useReducer } from "react"
import { CoffeProps } from "./@types/style"

interface CartContextType {
  cart: CoffeProps[] | undefined
  quantity: number
  totalAmount: number
  addToCart: (product: CoffeProps | undefined, quantity: number) => void
  removeToCart: (productId: number) => void
  incrementQuantityOnProduct: (productId: number) => void
}

interface CartState {
  cart: CoffeProps[]
  quantity: number
  totalAmount: number 
}

export const CartContext = createContext({} as CartContextType)

function App() {
  const [cartState, dispatch] = useReducer((state: CartState, action: any) => {
    switch(action.type) {
      case 'ADD_PRODUCT_TO_CART': {
        
        const currentProduct: CoffeProps = action.payload.data
        currentProduct.quantity = action.payload.quantity

        const verifyProductExistInCart = state.cart.findIndex(
          (product) => product.id === currentProduct.id
        )

        if (verifyProductExistInCart !== -1) {
          // Atualiza quantidade caso o produto já esteja no carrinho
          const updatedCart = [...state.cart];
          updatedCart[verifyProductExistInCart].quantity = currentProduct.quantity;
          
          const totalAmount = updatedCart.reduce(
            (total, product) => total + product.price * product.quantity,
            0
          )

          return {
            ...state,
            cart: updatedCart,
            totalAmount: totalAmount,
          };
        } else {
          const updatedCart = [...state.cart, action.payload.data];
          const totalAmount = updatedCart.reduce((total, product) => total + (product.price * product.quantity), 0);
          
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

        const totalAmount = updatedCart.reduce((total, product) => total + (product.price * product.quantity), 0)

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
          const totalAmount = updatedCart.reduce((total, product) => total + (product.price * product.quantity), 0)

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

  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContext.Provider value={{ cart, addToCart, quantity, removeToCart, totalAmount, incrementQuantityOnProduct }}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartContext.Provider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
