import { useContext } from "react";
import { ButtonConfirmOrder, FooterContainer, FooterValues } from "./styles";
import { CartContext } from "../../../../contexts/CartContext";
import { parseToBrl } from "../../../../utils";


export function Footer() {
    const { totalAmount } = useContext(CartContext)

    const totalValueWithTaxa = totalAmount + 3.50

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
            <ButtonConfirmOrder>Confirmar Pedido</ButtonConfirmOrder>
        </FooterContainer>
    )
}