import { HeaderContainer, BoxInfo, CartInfo } from "./styles";

import logoCoffe from '../../assets/images/LogoCoffe.svg'
import iconMap from '../../assets/icons/IconMap.svg'
import iconCart from '../../assets/icons/CartIcon.svg'
import { useContext } from "react";
import { CartContext } from "../../App";

export function Header() {
    const { cart } = useContext(CartContext)

    return(
        <HeaderContainer className="container">
            <img src={logoCoffe} />
            <div className="wrapper">
                <BoxInfo><img src={iconMap} />Porto Alegre, RS</BoxInfo>
                <CartInfo>
                    <img src={iconCart}>
                    </img>
                    <span>{cart?.length}</span>
                </CartInfo>
            </div>
        </HeaderContainer>
    )
}