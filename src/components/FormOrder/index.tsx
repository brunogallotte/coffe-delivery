import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'

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
import { useState } from "react"

const newFormOrderValidationSchema = zod.object({
    cep: zod.string().length(9, 'Informe um CEP válido'),
    rua: zod.string().min(1, 'Informe a rua'),
    numero: zod.string().min(1, 'Informe um número'),
    complemento: zod.string().min(1, 'Informe o complemento'),
    bairro: zod.string().min(1, 'Informe o bairro'),
    cidade: zod.string().min(1, 'Informe a cidade'),
    uf: zod.string().length(2, 'Informe a União Federativa')
})

type newFormOrderData = zod.infer<typeof newFormOrderValidationSchema>

export function FormOrder() {
    const [selectedMethodPayment, setselectedMethodPayment] = useState<string | null>()
    const navigate = useNavigate()

    const newOrderForm = useForm<newFormOrderData>({
        resolver: zodResolver(newFormOrderValidationSchema),
    })

    function handleMethodPayment(buttonTitle: string) {
        setselectedMethodPayment(buttonTitle)
    }

    function handleCreateNewOrder(data: object) {
        console.log(data)
        navigate('/success')
    }

    console.log(selectedMethodPayment)

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
                        <ButtonSelectMethodPayment 
                            icon={creditCard} 
                            title="cartão de crédito"
                            onSelect={() => handleMethodPayment('cartão de crédito')}
                            isSelected={selectedMethodPayment === "cartão de crédito"}
                        />
                        <ButtonSelectMethodPayment 
                            icon={debitCard} 
                            title="cartão de débito"
                            onSelect={() => handleMethodPayment('cartão de débito')}
                            isSelected={selectedMethodPayment === "cartão de débito"}
                        />
                        <ButtonSelectMethodPayment 
                            icon={money} 
                            title="dinheiro"
                            onSelect={() => handleMethodPayment('dinheiro')}
                            isSelected={selectedMethodPayment === "dinheiro"}
                        />
                    </div>
                </PaymentMethodContainer>
            </div>
            <Cart />
        </FormControl>
        
    )
}