// library imports
import { configureStore } from '@reduxjs/toolkit';

// local imports
import PatientsSlice from './PatientsSlice';

export const store = configureStore({
    reducer: {
        patients: PatientsSlice,
    },
});

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch