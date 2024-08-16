// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './Store';

const initialState = {
    data: [],
    selectedPatientData: {
        name: "",
        gender: "",
        age: 0,
        profile_picture: "",
        date_of_birth: "",
        phone_number: "",
        emergency_contact: "",
        insurance_type: "",
        diagnosis_history: [],
        diagnostic_list: [],
        lab_results: []
    }
};

const PatientsSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {
        setPatientsData: (state, action) => {
            state.data = action.payload;
            state.selectedPatientData = action.payload[3];
        },
        setSelectedPatientData: (state, action) => {
            state.selectedPatientData = action.payload;
        }
    },
});

export const { setPatientsData, setSelectedPatientData } = PatientsSlice.actions;

export const selectPatientsData = (state: RootState) => state.patients.data;
export const selectSinglePatientsData = (state: RootState) => state.patients.selectedPatientData;

export default PatientsSlice.reducer;
