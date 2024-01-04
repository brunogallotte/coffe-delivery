import { Counter } from '../../../Counter'
import { CoffeSelectedCardActions, CoffeSelectedCardContainer, RemoveButton } from './styles'

import trashIcon from '../../../../assets/icons/trash.svg'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { CoffeProps } from '../../../../@types/style'
import { parseToBrl } from '../../../../utils'

interface CoffeSelectedCardProps {
    imgUrl: string
    title: string
    quantity: number
    price: number
    id: number
}

export function CoffeSelectedCard({ imgUrl, title, price, id, quantity }: CoffeSelectedCardProps) {

    const { cart, removeToCart, incrementQuantityOnProduct, decrementQuantityOnProduct } = useContext(CartContext)

    function handleRemoveProductToCart() {
        removeToCart(id)
    }

    function handleIncrementQuantity() {
        const currentProduct: CoffeProps | undefined = cart?.find(product => {
            return product.id === id
        })

        if (currentProduct) {
            incrementQuantityOnProduct(currentProduct.id)
        }
    }

    function handleDecrementQuantity() {
        const currentProduct: CoffeProps | undefined = cart?.find(product => {
            return product.id === id
        })

        if (currentProduct) {
            decrementQuantityOnProduct(currentProduct.id)
        }
    }

    return(
        <CoffeSelectedCardContainer>
            <img src={imgUrl} className="coffeImg" />
            <CoffeSelectedCardActions>
                <span>{title}</span>
                <div className="actionsBox">
                    <Counter quantityCounter={quantity} handleAddQuantityCounter={handleIncrementQuantity} handleLessQuantityCounter={handleDecrementQuantity}/>
                    <RemoveButton onClick={handleRemoveProductToCart}><img src={trashIcon} />remover</RemoveButton>
                </div>
            </CoffeSelectedCardActions>
            <strong>{parseToBrl(price * quantity)}</strong>
        </CoffeSelectedCardContainer>
    )
}