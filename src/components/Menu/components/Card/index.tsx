import { CartContainer, CartFooter } from './styles'

import coffeImg from '../../../../assets/images/coffes/expresso.png'
import cartIcon from '../../../../assets/icons/CartIcon2.svg'
import moreIcon from '../../../../assets/icons/mais.svg'
import lessIcon from '../../../../assets/icons/menos.svg'
import { CoffeProps } from '../../../../data/menuCoffe'

export function Card({ tag, title, description, price, quantity }: CoffeProps){
    return(
        <CartContainer>
            <img className="coffeImg" src={coffeImg} />
            <span className="tag">Tradicional</span>
            <strong className="title">{title}</strong>
            <p>{description}</p>
            <CartFooter>
                <span className="price">R$ {price}</span>
                <div className="wrapper">
                    <div className="counterBox">
                        <img src={lessIcon} />
                        {quantity}
                        <img src={moreIcon} />
                    </div>
                    <img className="cartIcon" src={cartIcon} />
                </div>
            </CartFooter>
        </CartContainer>
    )

}