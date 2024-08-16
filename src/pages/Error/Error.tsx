// library imports 
import React from 'react';
import { useHistory } from 'react-router-dom';

// local imports
import { ErrorContaier } from './ErrorStyled';

const Error: React.FC = () => {
    const history = useHistory();

    const goToPatients = () => {
        history?.push('/patients');
    };

    return (
        <ErrorContaier>
            <h2>Something went wrong! Please try again.</h2>
            <button className='styled-button' onClick={goToPatients}>Go to Patients</button>
        </ErrorContaier>
    );
}

export default Error;
