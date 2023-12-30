import styled from 'styled-components'

interface InputDataProps {
    width?: string
}

export const InputData = styled.input<InputDataProps>`
    padding: 0.75rem;
    width: ${props=> props.width};
    background: ${props=> props.theme.baseInput};
    border: 1px solid ${props=> props.theme.baseButton};
    border-radius: 4px;
`