import styled from "styled-components";

export const InfoCardContainer = styled.div<{ color: string }>`
background: ${({ color }) => color};
border-radius: .75rem;
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
div:not(:last-child) {
    margin-top: 0.5rem;
    &.bold {
        font-weight: bold;
        font-size: 2rem;
    }
}
`

export const RatingLevels = styled.div`
margin-top: 1.5rem;
display: flex;
justify-content: start;
align-items: center;
img {
    margin-right: 0.5rem;
}
`