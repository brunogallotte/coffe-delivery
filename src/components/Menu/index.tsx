import { coffes } from "../../data/menuCoffe";
import { Card } from "./components/Card";
import { MenuContainer, MenuGrid } from "./styles";

export function Menu() {
    return(
        <MenuContainer className="container">
            <h2>Nossos cafés</h2>
            <MenuGrid>
                {coffes.map(coffe => {
                    return(
                        <Card key={coffe.id} id={coffe.id} tag={coffe.tag} title={coffe.title} description={coffe.description} price={coffe.price} quantity={coffe.quantity} />
                    )
                })}
                
            </MenuGrid>
        </MenuContainer>
    )
}