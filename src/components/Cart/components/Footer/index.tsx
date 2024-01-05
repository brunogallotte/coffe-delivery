import { useContext } from "react";
import { useFormContext } from "react-hook-form";

import { ButtonConfirmOrder, FooterContainer, FooterValues } from "./styles";
import { CartContext } from "../../../../contexts/CartContext";
import { parseToBrl } from "../../../../utils";
import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

interface FooterProps {
    buttonSubmitIsDisabled: boolean
    selectedMethodPayment: string | undefined | null
}

const notify = (message: string) => toast.error(message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
})

export function Footer({ buttonSubmitIsDisabled, selectedMethodPayment }: FooterProps) {
    const { totalAmount, changeOrderState } = useContext(CartContext)
    const { formState, getValues } = useFormContext()
    const navigate = useNavigate()

    const currentValues = getValues()

    const totalValueWithTaxa = totalAmount + 3.50

    function validateSelectedMethodPayment() {
        if(selectedMethodPayment && formState.isValid) {
            changeOrderState(currentValues)
            navigate('/success')
        } else if (!selectedMethodPayment && !formState.isValid) {
            notify('Formulário inválido')
        } else if (selectedMethodPayment && !formState.isValid) {
            notify('Formulário inválido')
        } else if(!selectedMethodPayment) {
            notify('Selecione a forma de pagamento')
        }
    }

    return(
        <FooterContainer>
            <FooterValues>
                <span>Total de itens</span>
                <strong>{parseToBrl(totalAmount)}</strong>
            </FooterValues>
            <FooterValues>
                <span>Entrega</span>
                <strong>R$ 3,50</strong>
            </FooterValues>
            <FooterValues>
                <span className="totalValue">Total</span>
                <strong className="totalValue">{parseToBrl(totalValueWithTaxa)}</strong>
            </FooterValues>
            <ButtonConfirmOrder onClick={validateSelectedMethodPayment} disabled={buttonSubmitIsDisabled} type="button">Confirmar Pedido</ButtonConfirmOrder>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </FooterContainer>
    )
}