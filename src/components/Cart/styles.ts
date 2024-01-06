import styled from 'styled-components'
import { breakpoints } from '../../styles/global'

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: ${props=> props.theme.baseCard};
    padding: 2.5rem;
    gap: 2rem;
    border-radius: 6px 44px;

    @media (max-width: ${breakpoints.desktop}) {
        margin-bottom: 2rem;
    }
`

export const EmptyCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    strong {
        color: ${props => props.theme.baseText};
    }

    a {
        color: ${props => props.theme.baseSubtitle};
        text-decoration: none;
    }  
`

