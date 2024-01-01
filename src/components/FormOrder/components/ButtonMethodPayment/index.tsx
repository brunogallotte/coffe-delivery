import { Button } from "./styles";

interface ButtonSelectMethodPaymentProps {
    icon: string
    title: string
}

export function ButtonSelectMethodPayment({ icon, title }: ButtonSelectMethodPaymentProps) {
    return(
        <Button type="button">
            <img src={icon} />
            <span>{title}</span>
        </Button>
    )
} 