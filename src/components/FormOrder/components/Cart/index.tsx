import { CoffeSelectedCard } from "./components/CoffeSelectedCard";
import { FooterContainer } from "./components/Footer/styles";
import { CartContainer } from "./styles";

export function Cart() {
    return(
        <CartContainer>
            <CoffeSelectedCard />
            <FooterContainer />
        </CartContainer>
    )
}