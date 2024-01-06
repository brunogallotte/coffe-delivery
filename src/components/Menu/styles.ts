import styled from "styled-components"
import { breakpoints } from "../../styles/global"

export const MenuContainer = styled.div`
    padding-bottom: 157px;

    h2 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 2rem;
        color: ${props=> props.theme.baseTitle};
        line-height: 130%;
        margin-bottom: 3.375rem;
    }
`

export const MenuGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;

    @media (max-width: ${breakpoints.desktop}) {
        grid-template-columns: 1fr;
    }
`