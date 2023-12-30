import { FormHeaderWrapper } from "./styles";

import iconForm from '../../../../assets/icons/IconForm.svg'

export function FormHeader(){
    return(
        <FormHeaderWrapper>
            <div className="headerContent">
                <img src={iconForm} className="icon"/>
                <div>
                    <strong className="title">Endereço de entrega</strong>
                    <p className="description">Informe o endereço onde deseja receber seu pedido</p>
                </div>
            </div>
        </FormHeaderWrapper>
    )
}