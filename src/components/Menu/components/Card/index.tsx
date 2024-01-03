import { useState, useContext } from 'react'

import { CartContainer, CartFooter } from './styles'

import cartIcon from '../../../../assets/icons/CartIcon2.svg'

import { CoffeProps } from '../../../../@types/style'
import { Counter } from '../../../Counter'
import { CartContext } from "../../../../contexts/CartContext";
import { coffes } from '../../../../data/menuCoffe'


export function Card({ imgUrl, tag, title, description, price, id }: CoffeProps){
    const [quantityCounter, setQuantityCounter] = useState(0)

    const { addToCart } = useContext(CartContext)

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

    function handleAddToCart() {
        const currentProduct: CoffeProps | undefined = coffes.find(product => product.id === id);

        addToCart(currentProduct, quantityCounter)
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
                    <img className="cartIcon" src={cartIcon} onClick={handleAddToCart}/>
                </div>
            </CartFooter>
        </CartContainer>
    )

}