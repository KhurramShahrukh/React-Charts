// library imports
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// local imports
import { GridContainer } from './PatientsStyled';
import PatientSearch from './patient-search/PatientSearch';
import PatientDiagnosis from './patient-diagnosis/PatientDiagnosis';
import PatientDetails from './patient-details/PatientDetails';
import { AppDispatch } from '../../redux-toolkit/Store';
import { getPatientsData } from '../../services/PatientServices';
import { setPatientsData } from '../../redux-toolkit/PatientsSlice';
import { ApiCredentials } from '../../common/Interfaces';
import { PASSWORD, USERNAME } from '../../common/Constants';

const Patients: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch<AppDispatch>();

    const apiCall = async () => {
        try {
            const apiPayload: ApiCredentials = { username: USERNAME, password: PASSWORD }
            const { data } = await getPatientsData(apiPayload)
            dispatch(setPatientsData(data))
        } catch (error) {
            history.push('/error');
        }
    }

    useEffect(() => {
        apiCall()
        // eslint-disable-next-line
    }, [])

    return (
        <GridContainer>
            <PatientSearch />
            <PatientDiagnosis />
            <PatientDetails />
        </GridContainer>
    )
}

export default Patients;