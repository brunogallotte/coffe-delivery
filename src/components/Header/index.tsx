import { HeaderContainer, BoxInfo, CartInfo } from "./styles";

import logoCoffe from '../../assets/images/LogoCoffe.svg'
import iconMap from '../../assets/icons/IconMap.svg'
import iconCart from '../../assets/icons/CartIcon.svg'
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
import { notify } from "../../utils";

export function Header() {
    const { cart } = useContext(CartContext)
    const navigate = useNavigate()

    function checkLengthCart() {
        if (cart && cart?.length > 0) {
            navigate('/checkout')
        } else {
            notify('Carrinho vazio')
        }
    }

    return(
        <HeaderContainer className="container">
            <Link to="/">
                <img src={logoCoffe} />
            </Link>
            <div className="wrapper">
                <BoxInfo><img src={iconMap} />Porto Alegre, RS</BoxInfo>
                <CartInfo>
                    <img onClick={checkLengthCart} src={iconCart} />
                    <span>{cart?.length}</span>
                </CartInfo>
            </div>
        </HeaderContainer>
    )
}