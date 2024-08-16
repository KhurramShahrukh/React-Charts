// library imports
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// local imports
import { ChartCell, ChartGrid, Circle, DiagnosisHistoryContainer, DiagnosisHistoryGrid, HorizontalLine, LatestInfoContainer } from './DiagnosisHistoryStyled'
import BloodPressureChart from './BloodPressureChart'
import { ArrowDown, ArrowUp, expand, HeartBPM, respiratoryRate, temperature } from '../../../../assets'
import { Diastolic, HeartRate, InfoCardData, PatientsData, RespiratoryRate, Systolic, Temperature } from '../../../../common/Interfaces'
import { selectSinglePatientsData } from '../../../../redux-toolkit/PatientsSlice'
import DiagnosisInfoCard from './diagnosis-info-card/DiagnosisInfoCard'

const DiagnosisHistory: React.FC = () => {
    const selectedSinglePatientsData: PatientsData = useSelector(selectSinglePatientsData)
    const { diagnosis_history } = selectedSinglePatientsData
    const [systolicData, setSystolicData] = useState<Systolic>({ value: 0, levels: "" })
    const [diastolicData, setDiastolicData] = useState<Diastolic>({ value: 0, levels: "" })
    const [respirationRate, setRespirationRate] = useState<RespiratoryRate>({ value: 0, levels: "" })
    const [temperatureRate, setTemperatureRate] = useState<Temperature>({ value: 0, levels: "" })
    const [heartRate, setHeartRate] = useState<HeartRate>({ value: 0, levels: "" })

    useEffect(() => {
        if (diagnosis_history.length) {
            const { blood_pressure, respiratory_rate, temperature, heart_rate } = diagnosis_history[0]
            const { systolic, diastolic } = blood_pressure
            setSystolicData(systolic)
            setDiastolicData(diastolic)
            setRespirationRate(respiratory_rate)
            setTemperatureRate(temperature)
            setHeartRate(heart_rate)
        }
    }, [diagnosis_history])

    const infoCardData: InfoCardData[] = [
        {
            color: "#E0F3FA",
            icon: respiratoryRate,
            title: "Respiratory Rate",
            value: respirationRate.value,
            rating: respirationRate.levels
        },
        {
            color: "#FFE6E9",
            icon: temperature,
            title: "Temperature",
            value: temperatureRate.value,
            rating: temperatureRate.levels
        },
        {
            color: "#FFE6F1",
            icon: HeartBPM,
            title: "Heart Rate",
            value: heartRate.value,
            rating: heartRate.levels
        }
    ]

    return (
        <DiagnosisHistoryContainer>
            <h2>Diagnsis History</h2>
            <ChartGrid>
                <ChartCell>
                    <div className='chart-cell-header'>
                        <div className='title'>Blood Pressure</div>
                        <div className='dropdown'>
                            Last 6 months
                            <img className='expand-icon' src={expand} alt={"expand"} />
                        </div>
                    </div>
                    <div className='chart'>
                        <BloodPressureChart data={diagnosis_history.slice(0, 6)} />
                    </div>
                </ChartCell>
                <LatestInfoContainer>
                    <div className='flex bold'>
                        <Circle color="#E66FD2" />
                        Systolic
                    </div>
                    <div className='bold font-size'>{systolicData.value}</div>
                    <div className='flex'>
                        {systolicData.levels !== "Normal" &&
                            <img src={systolicData.levels.includes("Higher") ? ArrowUp : ArrowDown}
                                alt={systolicData.levels.includes("Higher") ? "ArrowUp" : "ArrowDown"}
                            />}
                        {systolicData.levels}</div>
                    <HorizontalLine className='horizontal-line' />
                    <div className='flex bold'>
                        <Circle color="#8C6FE6" />
                        Diastolic
                    </div>
                    <div className='bold font-size'>{diastolicData.value}</div>
                    <div className='flex'>
                        {diastolicData.levels !== "Normal" &&
                            <img src={diastolicData.levels.includes("Higher") ? ArrowUp : ArrowDown}
                                alt={diastolicData.levels.includes("Higher") ? "ArrowUp" : "ArrowDown"}
                            />}
                        {diastolicData.levels}</div>
                </LatestInfoContainer>
            </ChartGrid>
            <DiagnosisHistoryGrid>
                {infoCardData.map((item: InfoCardData, index) => (
                    <DiagnosisInfoCard key={index} info={item} />
                ))}
            </DiagnosisHistoryGrid>
        </DiagnosisHistoryContainer>
    )
}

export default DiagnosisHistory