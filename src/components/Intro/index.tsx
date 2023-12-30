import { IntroContainer, IntroContent } from "./styles";

import introImage from '../../assets/images/introImage.png'
import cartIcon2 from '../../assets/icons/CartIcon2.svg'
import timerIcon from '../../assets/icons/timerIcon.svg'
import boxIcon from '../../assets/icons/boxIcon.svg'
import coffeIcon from '../../assets/icons/coffeIcon.svg'

export function Intro() {
    return(
        <IntroContainer>
            <div className="container flex">
                <IntroContent>
                    <h1 className="title">Encontre o café perfeito para qualquer hora do dia</h1>
                    <p className="description">Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    <div className="wrapper">
                        <div className="spanContainer">
                            <span><img src={cartIcon2} className="cartImg"/>Compra simples e segura</span>
                            <span><img src={timerIcon} className="timerImg"/>Entrega rápida e rastreada</span>
                        </div>
                        <div className="spanContainer">
                            <span><img src={boxIcon} className="boxIcon"/>Embalagem mantém o café intacto</span>
                            <span><img src={coffeIcon} className="coffeIcon"/>O café chega fresquinho até você</span>
                        </div>
                    </div>
                </IntroContent>
                <img src={introImage} className="introImage"/>
            </div>      
        </IntroContainer>
    )
}