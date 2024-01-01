import { CoffeSelectedCard } from "./components/CoffeSelectedCard";
import { Footer } from "./components/Footer";
import { CartContainer } from "./styles";

export function Cart() {
    return(
        <CartContainer>
            <CoffeSelectedCard />
            <CoffeSelectedCard />
            <Footer />
        </CartContainer>
    )
}