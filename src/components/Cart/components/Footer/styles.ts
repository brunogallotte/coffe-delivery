import styled from "styled-components"

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: auto;
`

export const FooterValues = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    span {
        font-size: 0.875rem;
        color: ${props=> props.theme.baseText};
        line-height: 130%;
    }

    strong {
        font-size: 1rem;
        color: ${props=> props.theme.baseText};
        font-weight: normal;
    }

    .totalValue {
        font-size: 20px;
        font-weight: bold;
    }
`

export const ButtonConfirmOrder = styled.button`
    padding: 0.75rem 0.5rem;
    margin-top: 0.75rem;
    color: ${props => props.theme.white};
    font-size: 0.875rem;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 6px;
    border: none;
    background: ${props => props.theme.yellowNormal};
    transition: .2s background;
    cursor: pointer;

    &:hover {
        background: ${props=> props.theme.yellowDark};
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
    &:disabled:hover {
        background: ${props => props.theme.yellowNormal};
    }
`