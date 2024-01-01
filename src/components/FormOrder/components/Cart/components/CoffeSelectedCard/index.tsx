import { Counter } from '../../../../../Counter'
import { CoffeSelectedCardActions, CoffeSelectedCardContainer, RemoveButton } from './styles'

import coffeImg from '../../../../../../assets/images/coffes/expresso.png'
import trashIcon from '../../../../../../assets/icons/trash.svg'

export function CoffeSelectedCard() {
    return(
        <CoffeSelectedCardContainer>
            <img src={coffeImg} className="coffeImg" />
            <CoffeSelectedCardActions>
                <span>Expresso Tradicional</span>
                <div className="actionsBox">
                    <Counter counter={1}/>
                    <RemoveButton><img src={trashIcon} />remover</RemoveButton>
                </div>
            </CoffeSelectedCardActions>
            <strong>R$ 9,90</strong>
        </CoffeSelectedCardContainer>
    )
}