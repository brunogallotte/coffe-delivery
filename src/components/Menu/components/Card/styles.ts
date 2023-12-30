import styled from "styled-components"

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-family: 'Baloo 2', sans-serif;
    width: 256px;
    padding: 1rem;
    background: ${props=> props.theme.baseCard};
    border-radius: 6px 36px;

    .coffeImg {
        margin-top: -2rem;
    }

    .tag {
        font-family: Roboto;
        background: ${props=> props.theme.yellowLight};
        color: ${props=> props.theme.yellowDark};
        font-size: 0.625rem;
        font-weight: bold;
        line-height: 130%;
        padding: 4px 8px;
        border-radius: 100px;
        text-transform: uppercase;
    }

    .title {
        font-size: 1.25rem;
        color: ${props=> props.theme.baseSubtitle};
        line-height: 130%;
    }

    p {
        text-align: center;
        font-family: Roboto;
        color: ${props=> props.theme.baseLabel};
        font-size: 0.875rem;
        line-height: 130%;
    }
`

export const CartFooter = styled.footer`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0px 4px;;

    .price {
        font-family: Baloo 2;
        font-size: 1.5rem;
        font-weight: 800;
        color: ${props=> props.theme.baseText};
    }

    .cartIcon {
        width: 2.375rem;
        height: 2.375rem;
        padding: 0.5rem;
        background: ${props=> props.theme.purpleDark};
        border-radius: 6px;
    }

    .wrapper {
        display: flex;
        align-items: center;
        width: 118px;
        height: 38px;
        gap: 0.5rem;
    }

    .counterBox {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 72px;
        gap: 0.25rem;
        padding: 0.5rem;
        background: ${props=>props.theme.baseButton};
        border-radius: 6px;

        img {
            width: 14px;
            height: 14px;
        }
    }
`