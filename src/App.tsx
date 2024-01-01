import { ThemeProvider } from "styled-components" 
import { BrowserRouter } from "react-router-dom"

import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Router } from "./Router"
import { useState, createContext } from "react"
import { CoffeProps } from "./@types/style"

interface CartContextType {
  cart: CoffeProps[] | undefined
}

export const CartContext = createContext({} as CartContextType)

function App() {
  const [cart, setCart] = useState<CoffeProps[]>([])

  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContext.Provider value={{ cart }}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartContext.Provider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
