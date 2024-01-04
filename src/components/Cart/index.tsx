import { useContext } from "react";
import { CoffeSelectedCard } from "./components/CoffeSelectedCard";
import { Footer } from "./components/Footer";
import { CartContainer } from "./styles";
import { CartContext } from "../../contexts/CartContext";

export function Cart() {
    const { cart } = useContext(CartContext)

    return(
        <CartContainer>
            {cart?.map(product => {
                return(
                    <CoffeSelectedCard 
                        key={product.id} 
                        id={product.id} 
                        imgUrl={product.imgUrl} 
                        title={product.title} 
                        quantity={product.quantity} 
                        price={product.price}
                    />
                )
            })}
            <Footer />
        </CartContainer>
    )
}