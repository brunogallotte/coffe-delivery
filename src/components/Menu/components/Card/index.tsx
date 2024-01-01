import { useState } from 'react'

import { CartContainer, CartFooter } from './styles'

import cartIcon from '../../../../assets/icons/CartIcon2.svg'

import { CoffeProps } from '../../../../@types/style'
import { Counter } from '../../../Counter'


export function Card({ imgUrl, tag, title, description, price }: CoffeProps){
    const [quantityCounter, setQuantityCounter] = useState(0)

    function handleAddQuantityCounter() {
        const currentQuantity = quantityCounter
        const updatedQuantity = currentQuantity + 1

        setQuantityCounter(updatedQuantity)
    }

    function handleLessQuantityCounter() {
        if (quantityCounter > 0) {
            const currentQuantity = quantityCounter
            const updatedQuantity = currentQuantity -1

            setQuantityCounter(updatedQuantity)
        }
    }
    
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
                    <Counter quantityCounter={quantityCounter} handleAddQuantityCounter={handleAddQuantityCounter} handleLessQuantityCounter={handleLessQuantityCounter}/>
                    <img className="cartIcon" src={cartIcon} />
                </div>
            </CartFooter>
        </CartContainer>
    )

}