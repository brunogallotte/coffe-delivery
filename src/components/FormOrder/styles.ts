import styled from "styled-components"

export const FormControl = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }
`

export const FormContainer = styled.div`
    width: 640px;
    background: ${props=> props.theme.baseCard};
    padding: 2.5rem;
    gap: 2rem;
    border-radius: 6px;
`

export const PaymentMethodContainer = styled(FormContainer)`
    .buttonsContainer {
        display: flex;
        gap: 0.75rem;
    }
`

