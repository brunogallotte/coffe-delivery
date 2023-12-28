import { HeaderContainer, BoxInfo, CartInfo } from "./styles";

import logoCoffe from '../../assets/images/LogoCoffe.svg'
import iconMap from '../../assets/icons/IconMap.svg'
import iconCart from '../../assets/icons/CartIcon.svg'

export function Header() {
    return(
        <HeaderContainer>
            <img src={logoCoffe} />
            <div className="wrapper">
                <BoxInfo><img src={iconMap} />Porto Alegre, RS</BoxInfo>
                <CartInfo><img src={iconCart} /></CartInfo>
            </div>
        </HeaderContainer>
    )
}