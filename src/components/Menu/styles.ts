import styled from "styled-components"

export const MenuContainer = styled.div`
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
`