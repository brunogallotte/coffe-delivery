import styled, { css } from "styled-components"

interface ButtonProps {
    $isSelected: boolean;
}

export const Button = styled.div<ButtonProps>`
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
    transition: .2s background;
    border: 1px solid transparent;
    cursor: pointer;

    ${({ $isSelected }) =>
        $isSelected &&
        css`
            background: ${props => props.theme.purpleLight};
            border: 1px solid ${props => props.theme.brandPurple};
        `
    }

    &:hover {
        background: ${props => props.theme.baseHover};
    }
`