import styled from "styled-components"
import { breakpoints } from "../../styles/global"

export const FormControl = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    @media (max-width: ${breakpoints.desktop}) {
        display: flex;
        flex-direction: column;
        padding-top: 2em;
        max-width: 90%;
        margin: 0 auto;
    }
`

export const FormContainer = styled.div`
    width: 640px;
    background: ${props=> props.theme.baseCard};
    padding: 2.5rem;
    gap: 2rem;
    border-radius: 6px;

    @media (max-width: ${breakpoints.desktop}) {
        width: 100%;
    }
`

export const PaymentMethodContainer = styled(FormContainer)`
    .buttonsContainer {
        display: flex;
        gap: 0.75rem;
    }

    @media (max-width: ${breakpoints.desktop}) {
        .buttonsContainer {
            flex-direction: column;
        }
    }
`

