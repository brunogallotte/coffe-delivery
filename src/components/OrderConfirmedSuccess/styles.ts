import styled from "styled-components"

export const OrderConfirmedContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: end;
    padding-top: 5rem;
    gap: 6.375rem;
`

export const OrderConfirmedContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    .title {
        font-family: 'Baloo 2', sans-serif;
        font-size: 2rem;
        font-weight: 800;
        color: ${props=> props.theme.yellowDark};
    }
`

export const BoxInfoOrder = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    gap: 2rem;
    color: ${props=> props.theme.baseText};
    border: 1px solid ${props=> props.theme.yellowNormal};
    border-radius: 6px 36px;
`

export const ItemBoxInfoOrder = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`