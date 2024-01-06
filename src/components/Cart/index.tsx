import { useContext } from "react";
import { CoffeSelectedCard } from "./components/CoffeSelectedCard";
import { Footer } from "./components/Footer";
import { CartContainer, EmptyCart } from "./styles";
import { CartContext } from "../../contexts/CartContext";
import { useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface CartProps {
    selectedMethodPayment: string | undefined | null
}

export function Cart({ selectedMethodPayment }: CartProps) {
    const { cart } = useContext(CartContext)
    const { watch } = useFormContext()
    const [parent] = useAutoAnimate()

    const cep = watch('cep')
    const rua = watch('rua')
    const numero = watch('numero')
    const bairro = watch('bairro')
    const uf = watch('uf')

    const buttonSubmitIsDisabled = cep && rua && numero && bairro && uf

    return(
        <CartContainer ref={parent}>
            {cart && cart?.length > 0 ? (
                cart?.map(product => {
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
                })
            ) : <EmptyCart>
                    <strong>Carrinho vazio</strong>
                    <Link to="/">Clique aqui para ver os produtos</Link>
                </EmptyCart>}
            <Footer buttonSubmitIsDisabled={!buttonSubmitIsDisabled} selectedMethodPayment={selectedMethodPayment} />
        </CartContainer>
    )
}