import moreIcon from '../../assets/icons/mais.svg'
import lessIcon from '../../assets/icons/menos.svg'
import { CounterContainer } from './styles'

interface CounterProps {
    counter: number
}

export function Counter({ counter }: CounterProps) {
    return(
        <CounterContainer className="counterBox">
            <img src={lessIcon} />
            {counter}
            <img src={moreIcon} />
        </CounterContainer>
    )
}