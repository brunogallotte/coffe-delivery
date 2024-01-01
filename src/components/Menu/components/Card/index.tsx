import { CartContainer, CartFooter } from './styles'

import cartIcon from '../../../../assets/icons/CartIcon2.svg'

import { CoffeProps } from '../../../../@types/style'
import { Counter } from '../../../Counter'


export function Card({ imgUrl, tag, title, description, price, quantity }: CoffeProps){
    return(
        <CartContainer>
            <img className="coffeImg" src={imgUrl} />
            <div className="tagContainer">
                {tag.map(tag => {
                    return <span className="tag">{tag}</span>
                })}
            </div>
            <strong className="title">{title}</strong>
            <p>{description}</p>
            <CartFooter>
                <span className="price"><span className="reais">R$</span> {price}</span>
                <div className="wrapper">
                    <Counter counter={quantity} />
                    <img className="cartIcon" src={cartIcon} />
                </div>
            </CartFooter>
        </CartContainer>
    )

}