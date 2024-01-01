import styled from "styled-components"

export const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 1rem;
    flex: 1 0 0;
    border: none;
    border-radius: 6px;
    background: ${props=> props.theme.baseButton};
    text-transform: uppercase;
    font-size: 0.75rem;
    gap: 0.75rem;
`