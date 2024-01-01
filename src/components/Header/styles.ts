import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0rem;

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
    position: relative;

    span {
        position: absolute;
        display: flex;
        width: 20px;
        height: 20px;
        right: -8.345px;
        top: -8px;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme.yellowDark};
        color: ${props => props.theme.yellowLight};
        border-radius: 50%;
    }
`