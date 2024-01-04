import { Button } from "./styles";

interface ButtonSelectMethodPaymentProps {
    icon: string
    title: string
    onSelect: () => void
    isSelected: boolean
}

export function ButtonSelectMethodPayment({ icon, title, onSelect, isSelected }: ButtonSelectMethodPaymentProps) {
    return(
        <Button onClick={onSelect} isSelected={isSelected}>
            <img src={icon} />
            <span>{title}</span>
        </Button>
    )
} 