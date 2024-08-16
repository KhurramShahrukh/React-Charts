// library imports
import React from 'react'
import { useSelector } from 'react-redux'

// local imports
import { ImageHeader, PatientInfoContainer, InfoCard, ButtonContainer } from './PatientInfoStyled'
import { BirthIcon, FemaleIcon, PhoneIcon, InsuranceIcon } from '../../../../assets'
import { selectSinglePatientsData } from '../../../../redux-toolkit/PatientsSlice'
import { PatientsData } from '../../../../common/Interfaces'

const PatientInfo: React.FC = () => {

    const selectedSinglePatientsData: PatientsData = useSelector(selectSinglePatientsData)
    const { name, profile_picture, date_of_birth, gender, phone_number, emergency_contact, insurance_type } = selectedSinglePatientsData
    const formattedDateOfBirth = new Date(date_of_birth).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    const dataToDisplay = [
        {
            icon: BirthIcon,
            details: {
                title: "Date Of Birth",
                info: formattedDateOfBirth
            }
        },
        {
            icon: FemaleIcon,
            details: {
                title: "Gender",
                info: gender
            }
        },
        {
            icon: PhoneIcon,
            details: {
                title: "Contact Info.",
                info: phone_number
            }
        },
        {
            icon: PhoneIcon,
            details: {
                title: "Emergency Contacts",
                info: emergency_contact
            }
        },
        {
            icon: InsuranceIcon,
            details: {
                title: "Insurance Provider",
                info: insurance_type
            }
        },
    ]

    return (
        <PatientInfoContainer>
            <ImageHeader>
                <img src={profile_picture} alt={"profile_picture"} />
                <h2>{name}</h2>
            </ImageHeader>
            {dataToDisplay.map((item, index) => (
                <InfoCard key={index}>
                    <img src={item.icon} alt={'icon'} />
                    <div className='details'>
                        <div>{item.details.title}</div>
                        <div className='bold'>{item.details.info}</div>
                    </div>
                </InfoCard>
            ))}
            <ButtonContainer>
                <button className='button'>Show All Information</button>
            </ButtonContainer>
        </PatientInfoContainer>
    )
}

export default PatientInfo