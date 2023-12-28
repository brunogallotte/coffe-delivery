import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 10rem;

    .wrapper {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
`

export const BoxInfo = styled.span`
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border-radius: 6px;
    color: ${props => props.theme.purpleDark};
    background: ${props => props.theme.purpleLight};
`

export const CartInfo = styled(BoxInfo)`
    background: ${props => props.theme.yellowLight};
`