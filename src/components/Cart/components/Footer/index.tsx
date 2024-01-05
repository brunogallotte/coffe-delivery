import { useContext } from "react";
import { ButtonConfirmOrder, FooterContainer, FooterValues } from "./styles";
import { CartContext } from "../../../../contexts/CartContext";
import { parseToBrl } from "../../../../utils";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface FooterProps {
    buttonSubmitIsDisabled: boolean
    selectedMethodPayment: string | undefined | null
}

const notify = () => toast.error('Selecione o método de pagamento', {
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
    const { totalAmount } = useContext(CartContext)

    const totalValueWithTaxa = totalAmount + 3.50

    function validateSelectedMethodPayment() {
        if(!selectedMethodPayment) {
            notify()
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
            <ButtonConfirmOrder onClick={validateSelectedMethodPayment} disabled={buttonSubmitIsDisabled} type="submit">Confirmar Pedido</ButtonConfirmOrder>
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