import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

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

const newFormOrderValidationSchema = zod.object({
    cep: zod.string().length(8, 'Informe um CEP válido'),
    rua: zod.string().min(1, 'Informe a rua'),
    numero: zod.string().min(1, 'Informe um número'),
    complemento: zod.string().min(1, 'Informe o complemento'),
    bairro: zod.string().min(1, 'Informe o bairro'),
    cidade: zod.string().min(1, 'Informe a cidade'),
    uf: zod.string().length(2, 'Informe a União Federativa')
})

export function FormOrder() {
    const newOrderForm = useForm({
        resolver: zodResolver(newFormOrderValidationSchema),
    })

    function handleCreateNewOrder(data: any) {
        console.log(data)
    }

    console.log(newOrderForm.formState.errors)

    return(
    
        <FormControl onSubmit={newOrderForm.handleSubmit(handleCreateNewOrder)} className="container">
            <div className="wrapper">
                <FormContainer>
                    <FormHeader icon={iconForm} title="Endereço de Entrega" description="Informe o endereço onde deseja receber seu pedido" />

                    <FormProvider {...newOrderForm}>
                        <FormMain />
                    </FormProvider>
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