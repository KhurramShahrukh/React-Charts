import styled from 'styled-components';
import { ACTIVE_STATE_SECONDARY_COLOR } from '../../../common/Constants';

export const PatientSearchContainer = styled.div`
background: #FFFFFF;
border-radius: 1rem;
padding: 2rem 0.25rem 2rem 0;
.heading {
    padding: 0 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.patient-list {
    max-height: 70rem;
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

export const PatientCard = styled.div`
margin: 0.5rem 0.25rem 0 0;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
padding: 1.25rem;
&.active-state {
  background: ${ACTIVE_STATE_SECONDARY_COLOR};
}
.flex {
    display: flex;
    justify-content: start;
    align-items: center;
}
.profile-picture {
    width: 3rem;
    height: 3rem;
}
.flex-column {
    margin-left: 0.75rem;
    flex-direction: column;
    .text-bold{
        font-weight: bold;
    }
    .text-color{
      margin-top: 0.25rem;
        color: #707070;
    }
}
.more-horizontal {
    margin-right: 0.25rem;
}
`