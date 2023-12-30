import { Card } from "./components/Card";
import { MenuContainer } from "./styles";

export function Menu() {
    return(
        <MenuContainer className="container">
            <h2>Nossos cafés</h2>
            <Card />
        </MenuContainer>
    )
}