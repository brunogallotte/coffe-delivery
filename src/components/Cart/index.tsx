import { useContext } from "react";
import { CoffeSelectedCard } from "./components/CoffeSelectedCard";
import { Footer } from "./components/Footer";
import { CartContainer } from "./styles";
import { CartContext } from "../../contexts/CartContext";
import { useFormContext } from "react-hook-form";

interface CartProps {
    selectedMethodPayment: string | undefined | null
}

export function Cart({ selectedMethodPayment }: CartProps) {
    const { cart } = useContext(CartContext)
    const { watch } = useFormContext()

    const cep = watch('cep')
    const rua = watch('rua')
    const numero = watch('numero')
    const bairro = watch('bairro')
    const uf = watch('uf')

    const buttonSubmitIsDisabled = cep && rua && numero && bairro && uf

    return(
        <CartContainer>
            {cart?.map(product => {
                return(
                    <CoffeSelectedCard 
                        key={product.id} 
                        id={product.id} 
                        imgUrl={product.imgUrl} 
                        title={product.title} 
                        quantity={product.quantity} 
                        price={product.price}
                    />
                )
            })}
            <Footer buttonSubmitIsDisabled={!buttonSubmitIsDisabled} selectedMethodPayment={selectedMethodPayment} />
        </CartContainer>
    )
}