import { FormContainer } from "./styles";
import { FormMain } from "./components/FormMain";
import { FormHeader } from "./components/FormHeader";



export function FormOrder() {
    return(
        <div className="container">
            <FormContainer>
                <FormHeader />

                <FormMain />
            </FormContainer>
        </div>
    )
}