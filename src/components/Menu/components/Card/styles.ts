import styled from "styled-components"

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-family: 'Baloo 2', sans-serif;
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
        padding: 0.25rem 0.5rem;
        border-radius: 100px;
        text-transform: uppercase;
    }

    .tagContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
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
    padding: 0px 0.25rem;

    .price {
        font-family: Baloo 2, 'sans-serif';
        font-size: 1.5rem;
        font-weight: 800;
        color: ${props=> props.theme.baseText};
    }

    .reais {
        font-family: Roboto, 'sans-serif';
        font-weight: normal;
        font-size: 0.875rem;
    }

    .cartIcon {
        width: 2.375rem;
        height: 2.375rem;
        padding: 0.5rem;
        background: ${props=> props.theme.purpleDark};
        border-radius: 6px;
        cursor: pointer;
    }

    .wrapper {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .counterBox {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 4.5rem;
        gap: 0.25rem;
        padding: 0.5rem;
        background: ${props=>props.theme.baseButton};
        border-radius: 6px;

        img {
            width: 0.875rem;
            height: 0.875rem;
            cursor: pointer;
        }
    }
`