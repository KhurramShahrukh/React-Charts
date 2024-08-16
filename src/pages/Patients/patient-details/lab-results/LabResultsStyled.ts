import styled from "styled-components";

export const LabResultsContainer = styled.div`
background: #FFFFFF;
border-radius: 1rem;
padding: 2rem;
margin-top: 2rem;
.result-cards {
  max-height: 21rem;
  overflow-y: auto;
  /* Scrollbar width for Firefox */
  scrollbar-width: thin;
  scrollbar-color: #072635 #E3E4E6; /* Thumb color and track color */

  /* Scrollbar for WebKit browsers */
  ::-webkit-scrollbar {
    width: .75rem;
  }

  ::-webkit-scrollbar-button {
    display: none; /* Hide the up and down arrows */
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: .625rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888; 
    border-radius: .625rem;
    border: .1875rem solid #f1f1f1;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
}
`

export const ResultCard = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 2.6rem;
img {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 1rem;
}
`