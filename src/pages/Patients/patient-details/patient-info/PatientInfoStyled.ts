import styled from 'styled-components';
import { ACTIVE_STATE_COLOR } from '../../../../common/Constants';

export const PatientInfoContainer = styled.div`
background: #FFFFFF;
border-radius: 1rem;
padding: 2rem;
`

export const ImageHeader = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
img {
    width: 12.5rem;
    height: 12.5rem;
}
`

export const InfoCard = styled.div`
display: flex;
justify-content: start;
align-items: center;
margin-top: 1.5rem;
.details {
    margin-left: 1rem;
    flex-direction: column;
    .bold {
        margin-top: 0.25rem;
        font-weight: bold;
    }
}
`

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 3rem;
.button {
    padding: 0.75rem 2.25rem;
    border-radius: 2.625rem;
    background-color: ${ACTIVE_STATE_COLOR};
    font-weight: bold;
    border: none;
}
`