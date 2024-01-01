import { BoxInfoOrder, ItemBoxInfoOrder, OrderConfirmedContainer, OrderConfirmedContent } from "./styles";

import localSucces from '../../assets/icons/LocalSuccess.png'
import timerSuccess from '../../assets/icons/TimerSucces.png'
import moneySuccess from '../../assets/icons/Money Success.png'
import successImg from '../../assets/images/Confirmed.png'

export function OrderConfirmed() {
    return(
        <OrderConfirmedContainer className="container">
            <OrderConfirmedContent>
                <div>
                    <h2 className="title">Uhu! Pedido confirmado</h2>
                    <span>Agora é só aguardar que logo o café chegará até você</span>
                </div>
                <BoxInfoOrder>
                    <ItemBoxInfoOrder>
                        <img src={localSucces} />
                        <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong><br /> Farropos - Porto Alegre</span>
                    </ItemBoxInfoOrder>
                    <ItemBoxInfoOrder>
                        <img src={timerSuccess} />
                        <span>Previsão de entrega <br/> <strong>20 min - 30 min</strong></span>
                    </ItemBoxInfoOrder>
                    <ItemBoxInfoOrder>
                        <img src={moneySuccess} />
                        <span>Pagamento na entrega <br/> <strong>Cartão de Crédito</strong></span>
                    </ItemBoxInfoOrder>
                </BoxInfoOrder>
            </OrderConfirmedContent>
            <img src={successImg} />
        </OrderConfirmedContainer>
    )
}