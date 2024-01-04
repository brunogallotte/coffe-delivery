import styled from "styled-components";

export const CoffeSelectedCardContainer = styled.div`
    display: flex;
    align-items: flex-start;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${props=> props.theme.baseButton};
    gap: 20px;

    strong {
        margin-left: auto;
        color: ${props=> props.theme.baseText};
    }

    .coffeImg {
        width: 4rem;
        height: 4rem;
    }
`

export const RemoveButton = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0 8px;
    line-height: 160%;
    text-transform: uppercase;
    font-size: 0.75rem;
    border: none;
    border-radius: 6px;
    color: ${props=> props.theme.baseText};
    background: ${props=> props.theme.baseButton};
    transition: .2s background;
    cursor: pointer;

    &:hover {
        background: ${props => props.theme.baseHover};
    }
`

export const CoffeSelectedCardActions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
        color: ${props=> props.theme.baseSubtitle};
    }

    .actionsBox {
        display: flex;
        gap: 0.5rem;
    }
`