import { ButtonConfirmOrder, FooterContainer, FooterValues } from "./styles";


export function Footer() {
    return(
        <FooterContainer>
            <FooterValues>
                <span>Total de itens</span>
                <strong>R$ 29,70</strong>
            </FooterValues>
            <FooterValues>
                <span>Entrega</span>
                <strong>R$ 3,50</strong>
            </FooterValues>
            <FooterValues>
                <span className="totalValue">Total</span>
                <strong className="totalValue">R$ 33,20</strong>
            </FooterValues>
            <ButtonConfirmOrder>Confirmar Pedido</ButtonConfirmOrder>
        </FooterContainer>
    )
}