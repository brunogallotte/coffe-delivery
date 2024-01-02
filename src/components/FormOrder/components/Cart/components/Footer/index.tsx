import { useContext } from "react";
import { ButtonConfirmOrder, FooterContainer, FooterValues } from "./styles";
import { CartContext } from "../../../../../../App";


export function Footer() {
    const { totalAmount } = useContext(CartContext)

    return(
        <FooterContainer>
            <FooterValues>
                <span>Total de itens</span>
                <strong>R$ {totalAmount}</strong>
            </FooterValues>
            <FooterValues>
                <span>Entrega</span>
                <strong>R$ 3,50</strong>
            </FooterValues>
            <FooterValues>
                <span className="totalValue">Total</span>
                <strong className="totalValue">R$ {totalAmount + 3.50}</strong>
            </FooterValues>
            <ButtonConfirmOrder>Confirmar Pedido</ButtonConfirmOrder>
        </FooterContainer>
    )
}