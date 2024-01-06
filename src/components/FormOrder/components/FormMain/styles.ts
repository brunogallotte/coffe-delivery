import styled from "styled-components"
import { breakpoints } from "../../../../styles/global"

export const FormContent = styled.main`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .inputContainer {
        display: flex;
        gap: 0.75rem;
    }

    @media (max-width: ${breakpoints.desktop}) {

        .inputContainer {
            flex-direction: column;
        }
    }
`