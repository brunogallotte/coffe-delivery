import moreIcon from '../../assets/icons/mais.svg'
import lessIcon from '../../assets/icons/menos.svg'
import { CounterContainer } from './styles'

interface CounterProps {
    quantityCounter: number
    handleAddQuantityCounter: () => void
    handleLessQuantityCounter: () => void
}

export function Counter({ quantityCounter, handleAddQuantityCounter, handleLessQuantityCounter }: CounterProps) {
    return(
        <CounterContainer className="counterBox">
            <img src={lessIcon} onClick={handleLessQuantityCounter} />
            {quantityCounter}
            <img src={moreIcon} onClick={handleAddQuantityCounter} />
        </CounterContainer>
    )
}