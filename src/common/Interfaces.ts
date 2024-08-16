export interface PatientsData {
    name: string
    gender: string
    age: number
    profile_picture: string
    date_of_birth: string
    phone_number: string
    emergency_contact: string
    insurance_type: string
    diagnosis_history: DiagnosisHistory[]
    diagnostic_list: DiagnosticList[]
    lab_results: string[]
}

export interface DiagnosisHistory {
    month: string
    year: number
    blood_pressure: BloodPressure
    heart_rate: HeartRate
    respiratory_rate: RespiratoryRate
    temperature: Temperature
}

export interface BloodPressure {
    systolic: Systolic
    diastolic: Diastolic
}

export interface Systolic {
    value: number
    levels: string
}

export interface Diastolic {
    value: number
    levels: string
}

export interface HeartRate {
    value: number
    levels: string
}

export interface RespiratoryRate {
    value: number
    levels: string
}

export interface Temperature {
    value: number
    levels: string
}

export interface DiagnosticList {
    name: string
    description: string
    status: string
}

export interface HealthData {
    month: string;
    year: number;
    blood_pressure: {
        systolic: {
            value: number;
        };
        diastolic: {
            value: number;
        };
    };
}

export interface ChartDataType {
    months: string[];
    systolic: number[];
    diastolic: number[];
}

export interface BloodPressureChartProps {
    data: HealthData[];
}

export interface InfoCardData {
    color: string;
    icon: string;
    title: string;
    value: number;
    rating: string;
}

export interface IDiagnosisInfoCard {
    info: InfoCardData
}

export interface ApiCredentials {
    username: string;
    password: string
}