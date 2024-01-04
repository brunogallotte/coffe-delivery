import { Input } from "../Input"
import { FormContent } from "./styles"

export function FormMain() {

    return(
        <FormContent>
            <Input
                placeholder="CEP"
                fieldName="cep"
            />
            <Input 
                placeholder="Rua"
                fieldName="rua"
            />
            <div className="inputContainer">
                <Input   
                    width="200px" 
                    placeholder="Número"
                    fieldName="numero"
                />
                <Input 
                    width="348px" 
                    placeholder="Complemento" 
                    fieldName="complemento"
                />
            </div>
            <div className="inputContainer">
                <Input 
                    width="200px" 
                    placeholder="Bairro"
                    fieldName="bairro"
                />
                <Input 
                    width="276px" 
                    placeholder="Cidade"
                    fieldName="cidade"
                />
                <Input 
                    width="60px" 
                    placeholder="UF"
                    fieldName="uf"
                />
            </div>
        </FormContent>
    )
}