import styled from "styled-components"

export const FormHeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    .headerContent {
        display: flex;
        gap: 0.25rem;
    }

    .icon {
        height: 100%;
    }

    .title {
        color: ${props=> props.theme.baseSubtitle};
        font-weight: normal;
        line-height: 130%;
    }

    .description {
        color: ${props=> props.theme.baseText};
        line-height: 130%;
        font-size: 0.875rem;
    }
`