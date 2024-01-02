import { Counter } from '../../../../../Counter'
import { CoffeSelectedCardActions, CoffeSelectedCardContainer, RemoveButton } from './styles'

import trashIcon from '../../../../../../assets/icons/trash.svg'
import { useContext } from 'react'
import { CartContext } from '../../../../../../App'
import { CoffeProps } from '../../../../../../@types/style'

interface CoffeSelectedCardProps {
    imgUrl: string
    title: string
    quantity: number
    price: number
    id: number
}

export function CoffeSelectedCard({ imgUrl, title, price, id, quantity }: CoffeSelectedCardProps) {

    const { cart, removeToCart, incrementQuantityOnProduct } = useContext(CartContext)

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

    return(
        <CoffeSelectedCardContainer>
            <img src={imgUrl} className="coffeImg" />
            <CoffeSelectedCardActions>
                <span>{title}</span>
                <div className="actionsBox">
                    <Counter quantityCounter={quantity} handleAddQuantityCounter={handleIncrementQuantity}/>
                    <RemoveButton onClick={handleRemoveProductToCart}><img src={trashIcon} />remover</RemoveButton>
                </div>
            </CoffeSelectedCardActions>
            <strong>R$ {price}0</strong>
        </CoffeSelectedCardContainer>
    )
}