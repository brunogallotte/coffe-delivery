import { Input } from "../Input"
import { FormContent } from "./styles"

export function FormMain() {
    return(
        <FormContent>
            <Input placeholder="CEP"/>
            <Input placeholder="Rua"/>
            <div className="inputContainer">
                <Input width="200px" placeholder="Número"/>
                <Input width="348px" placeholder="Complemento" />
            </div>
            <div className="inputContainer">
                <Input width="200px" placeholder="Bairro"/>
                <Input width="276px" placeholder="Cidade"/>
                <Input width="60px" placeholder="UF"/>
            </div>
        </FormContent>
    )
}