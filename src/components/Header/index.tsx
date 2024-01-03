import { HeaderContainer, BoxInfo, CartInfo } from "./styles";

import logoCoffe from '../../assets/images/LogoCoffe.svg'
import iconMap from '../../assets/icons/IconMap.svg'
import iconCart from '../../assets/icons/CartIcon.svg'
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export function Header() {
    const { cart } = useContext(CartContext)

    return(
        <HeaderContainer className="container">
            <Link to="/">
                <img src={logoCoffe} />
            </Link>
            <div className="wrapper">
                <BoxInfo><img src={iconMap} />Porto Alegre, RS</BoxInfo>
                <CartInfo>
                    <Link to="/checkout">
                        <img src={iconCart} />
                    </Link> 
                    <span>{cart?.length}</span>
                </CartInfo>
            </div>
        </HeaderContainer>
    )
}