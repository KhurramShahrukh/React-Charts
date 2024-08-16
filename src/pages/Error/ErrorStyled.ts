import styled from 'styled-components';
import { ACTIVE_STATE_COLOR } from '../../common/Constants';

export const ErrorContaier = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 3rem;
.styled-button {
    padding: 0.75rem 2.25rem;
    border-radius: 2.625rem;
    background-color: ${ACTIVE_STATE_COLOR};
    font-weight: bold;
    border: none;
    cursor: pointer;
}
`