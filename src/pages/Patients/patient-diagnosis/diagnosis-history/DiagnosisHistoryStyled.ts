import styled from "styled-components";

export const DiagnosisHistoryContainer = styled.div`
background: #FFFFFF;
border-radius: 1rem;
padding: 2rem;
`

export const DiagnosisHistoryGrid = styled.div`
margin-top: 1rem;
display: grid;
grid-template-columns: repeat(3, 1fr) ;
gap: 1rem;
`

export const ChartGrid = styled.div`
display: grid;
grid-template-columns: 2fr 1fr;
gap: 1rem;
height: 18.75rem;
background: #F4F0FE;
border-radius: .75rem;
padding: 1.5rem 1rem;
`

export const ChartCell = styled.div`
display: flex;
flex-direction: column;
.chart-cell-header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    height: 2rem;
    .title{
        font-weight: bold;
    }
    .dropdown {
        margin-right: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .expand-icon {
            margin-left: 1rem;
        }
    }
}
.chart {
    height: 17rem;
}
`

export const LatestInfoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: start;
div:not(:first-child) {
    margin-top: 0.5rem;
    &.horizontal-line {
        margin: 1rem 0 0.5rem 0;
    }
}
.flex {
    display: flex;
    align-items: center;
    justify-content: start;
    :first-child {
        margin-right: 0.5rem;
    }
}
.bold {
    font-weight: bold;
}
.font-size {
    font-size: 2rem;
}
`

export const Circle = styled.div<{ color: string }>`
  width: 0.75rem;
  height: 0.75rem;
  background-color: ${({ color }) => color};
  border-radius: 50%;
`;

export const HorizontalLine = styled.div`
width: 100%;
height: .125rem; 
background-color: #CBC8D4;
`