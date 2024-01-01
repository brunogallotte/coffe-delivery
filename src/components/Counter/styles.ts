import styled from 'styled-components'

export const CounterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 4.5rem;
    gap: 0.25rem;
    padding: 0.5rem;
    background: ${props=>props.theme.baseButton};
    border-radius: 6px;

    img {
        width: 0.875rem;
        height: 0.875rem;
        cursor: pointer;
    }
`
