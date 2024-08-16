// library imports
import React from 'react'

// local imports
import PatientInfo from './patient-info/PatientInfo'
import { PatientDetailsContainer } from './PatientDetailsStyled'
import LabResults from './lab-results/LabResults'

const PatientDetails: React.FC = () => {
    return (
        <PatientDetailsContainer>
            <PatientInfo />
            <LabResults />
        </PatientDetailsContainer>
    )
}

export default PatientDetails