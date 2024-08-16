// library imports
import React from 'react'
import { useSelector } from 'react-redux'

// local imports
import { LabResultsContainer, ResultCard } from './LabResultsStyled'
import { download } from '../../../../assets'
import { PatientsData } from '../../../../common/Interfaces'
import { selectSinglePatientsData } from '../../../../redux-toolkit/PatientsSlice'

const LabResults: React.FC = () => {
    const selectedSinglePatientsData: PatientsData = useSelector(selectSinglePatientsData)
    const { lab_results } = selectedSinglePatientsData

    return (
        <LabResultsContainer>
            <h2>Lab Results</h2>
            <div className='result-cards'>
                {lab_results.map((item, index) => (
                    <ResultCard key={index}>
                        <div>{item}</div>
                        <img src={download} alt={'download'} />
                    </ResultCard>
                ))}
            </div>
        </LabResultsContainer>
    )
}

export default LabResults