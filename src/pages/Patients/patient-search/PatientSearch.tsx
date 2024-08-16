//library imports
import React from 'react';
import { useSelector } from 'react-redux';

// local imports
import { PatientCard, PatientSearchContainer } from './PatientSearchStyled';
import { more_horizontal, search } from '../../../assets';
import { selectPatientsData, selectSinglePatientsData, setSelectedPatientData } from '../../../redux-toolkit/PatientsSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux-toolkit/Store';
import { PatientsData } from '../../../common/Interfaces';

const PatientSearch: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const selectedPatientsData = useSelector(selectPatientsData)
    const selectedSinglePatientsData = useSelector(selectSinglePatientsData)

    const patientCardClickHandler = (patientData: PatientsData) => {
        dispatch(setSelectedPatientData(patientData))
    }

    return (
        <PatientSearchContainer>
            <div className='heading'>
                <h2>Patients</h2>
                <img src={search} alt={'search'} />
            </div>
            <div className='patient-list'>
                {selectedPatientsData.map((item: PatientsData, index) => (
                    <PatientCard className={selectedSinglePatientsData.name === item.name ? 'active-state' : ''} onClick={() => patientCardClickHandler(item)} key={index}>
                        <div className='flex'>
                            <img className='profile-picture' src={item.profile_picture} alt={'more_horizontal'} />
                            <div className='flex-column'>
                                <div className='text-bold'>{item.name}</div>
                                <div className='text-color'>{`${item.gender}, ${item.age}`}</div>
                            </div>
                        </div>
                        <img className='more-horizontal' src={more_horizontal} alt={'more_horizontal'} />
                    </PatientCard>
                ))}
            </div>
        </PatientSearchContainer>
    )
}

export default PatientSearch;