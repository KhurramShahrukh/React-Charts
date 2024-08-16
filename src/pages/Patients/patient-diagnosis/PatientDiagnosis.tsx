// library impots
import React from 'react'

// local imports
import { PatientDiagnosisContainer } from './PatientDiagnosisStyled'
import DiagnosisList from './diagnosis-list/DiagnosisList'
import DiagnosisHistory from './diagnosis-history/DiagnosisHistory'

const PatientDiagnosis: React.FC = () => {
    return (
        <PatientDiagnosisContainer>
            <DiagnosisHistory />
            <DiagnosisList />
        </PatientDiagnosisContainer>
    )
}

export default PatientDiagnosis