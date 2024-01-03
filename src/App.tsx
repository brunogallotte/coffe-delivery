import { ThemeProvider } from "styled-components" 
import { BrowserRouter } from "react-router-dom"

import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Router } from "./Router"
import { CartContextProvider } from "./contexts/CartContext"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
