import { FormHeaderWrapper } from "./styles";

interface FormHeaderProps {
    icon: string
    title: string
    description: string
}

export function FormHeader({ icon, title, description }: FormHeaderProps){
    return(
        <FormHeaderWrapper>
            <div className="headerContent">
                <img src={icon} className="icon"/>
                <div>
                    <strong className="title">{title}</strong>
                    <p className="description">{description}</p>
                </div>
            </div>
        </FormHeaderWrapper>
    )
}