import { FormContainer, FormControl, PaymentMethodContainer } from "./styles"
import { FormMain } from "./components/FormMain"
import { FormHeader } from "./components/FormHeader"
import { ButtonSelectMethodPayment } from "./components/ButtonMethodPayment"

import iconForm from '../../assets/icons/IconForm.svg'
import iconMethodPayment from '../../assets/icons/IconMethodPayment.svg'
import creditCard from '../../assets/icons/CreditCard.svg'
import debitCard from '../../assets/icons/DebitCard.svg'
import money from '../../assets/icons/Money.svg'
import { Cart } from "../Cart"



export function FormOrder() {
    return(
        <FormControl className="container">
            <div className="wrapper">
                <FormContainer>
                    <FormHeader icon={iconForm} title="Endereço de Entrega" description="Informe o endereço onde deseja receber seu pedido" />

                    <FormMain />
                </FormContainer>
                <PaymentMethodContainer>
                    <FormHeader icon={iconMethodPayment} title="Pagamento" description="O pagamento é feito na entrega. Escolha a forma que deseja pagar" />
                    <div className="buttonsContainer">
                        <ButtonSelectMethodPayment icon={creditCard} title="cartão de crédito"/>
                        <ButtonSelectMethodPayment icon={debitCard} title="cartão de débito"/>
                        <ButtonSelectMethodPayment icon={money} title="dinheiro"/>
                    </div>
                </PaymentMethodContainer>
            </div>
            <Cart />
        </FormControl>
    )
}