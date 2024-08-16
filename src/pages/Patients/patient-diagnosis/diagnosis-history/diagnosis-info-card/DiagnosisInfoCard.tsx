// library imports
import React from 'react'

// local imports
import { InfoCardContainer, RatingLevels } from './DiagnosisInfoCardStyled'
import { IDiagnosisInfoCard } from '../../../../../common/Interfaces'
import { ArrowDown, ArrowUp } from '../../../../../assets'

const DiagnosisInfoCard: React.FC<IDiagnosisInfoCard> = (props: IDiagnosisInfoCard) => {
    const { info } = props
    const { color, icon, title, value, rating } = info

    const degrees = new Intl.NumberFormat('en-US', {
        style: 'unit',
        unit: 'fahrenheit',
    });

    return (
        <InfoCardContainer color={color}>
            <img src={icon} alt={"icon"} />
            <div>{title}</div>
            <div className='bold'>{`${title === "Temperature" ? `${degrees.format(value)}` : `${value} bpm`}`}</div>
            <RatingLevels>
                {rating !== "Normal" &&
                    <img src={rating.includes("Higher") ? ArrowUp : ArrowDown}
                        alt={rating.includes("Higher") ? "ArrowUp" : "ArrowDown"}
                    />}
                {rating}
            </RatingLevels>
        </InfoCardContainer>
    )
}

export default DiagnosisInfoCard