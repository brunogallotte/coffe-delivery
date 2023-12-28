import { styled } from 'styled-components'
import backgroundIntro from '../../assets/images/backgroundIntro.png'

export const IntroContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 544px;
    background: ${() => `url(${backgroundIntro}) no-repeat center`};
    background-size: cover;
    gap: 56px;

    &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background: linear-gradient(rgba(250, 250, 250, 1), rgba(250, 250, 250, 0), rgba(250, 250, 250, 1));
        z-index: 0;
    }

    .introImage {
        position: relative;
        width: 476px;
        height: 360px;
        flex-shrink: 0;
        z-index: 1;
    }

    .wrapper {
        display: flex;
        margin-top: 66px;
        gap: 40px;
    }

    .spanContainer {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 20px;

        span {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 0.75rem;
        }
    }

    .flex {
        display: flex;
        justify-content: space-between;
    }

    .cartImg {
        width: 2.5rem;
        height: 2.5rem;
        padding: 0.5rem;
        background: ${props => props.theme.yellowDark};
        border-radius: 50%;
    }

    .timerImg {
        width: 2.5rem;
        height: 2.5rem;
        padding: 0.5rem;
        background: ${props => props.theme.yellowNormal};
        border-radius: 50%;
    }

    .boxIcon {
        width: 2.5rem;
        height: 2.5rem;
        padding: 0.5rem;
        background: ${props => props.theme.baseText};
        border-radius: 50%;
    }

    .coffeIcon {
        width: 2.5rem;
        height: 2.5rem;
        padding: 0.5rem;
        background: ${props => props.theme.purpleNormal};
        border-radius: 50%;
    }
`

export const IntroContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 588px;
    z-index: 1;

    .title {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        line-height: 130%;
        font-size: 3rem;
    }

    .description {
        font-family: 'Roboto', sans-serif;
        line-height: 130%;
        font-size: 1.25rem;
    }
`