import { CartContainer, CartFooter } from './styles'

import coffeImg from '../../../../assets/images/coffes/expresso.png'
import cartIcon from '../../../../assets/icons/CartIcon2.svg'
import moreIcon from '../../../../assets/icons/mais.svg'
import lessIcon from '../../../../assets/icons/menos.svg'

export function Card(){
    return(
        <CartContainer>
            <img className="coffeImg" src={coffeImg} />
            <span className="tag">Tradicional</span>
            <strong className="title">Expresso Tradicional</strong>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <CartFooter>
                <span className="price">R$ 9,90</span>
                <div className="wrapper">
                    <div className="counterBox">
                        <img src={lessIcon} />
                        1
                        <img src={moreIcon} />
                    </div>
                    <img className="cartIcon" src={cartIcon} />
                </div>
            </CartFooter>
        </CartContainer>
    )

}