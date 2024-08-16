// library imports
import React from 'react'
import { useSelector } from 'react-redux'

// local imports
import { DiagnosisListContainer, Table, TableCell, TableContainer, TableHeader, TableHeaderCell, TableRow } from './DiagnosisListStyled'
import { PatientsData } from '../../../../common/Interfaces'
import { selectSinglePatientsData } from '../../../../redux-toolkit/PatientsSlice'

const DiagnosisList: React.FC = () => {
    const selectedSinglePatientsData: PatientsData = useSelector(selectSinglePatientsData)
    const { diagnostic_list } = selectedSinglePatientsData
    return (
        <DiagnosisListContainer>
            <h2>Diagnostic List</h2>
            <TableContainer>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderCell className='first'>{"Problem/Diagnosis"}</TableHeaderCell>
                            <TableHeaderCell >{"Description"}</TableHeaderCell>
                            <TableHeaderCell className='last'>{"Status"}</TableHeaderCell>
                        </TableRow>
                    </TableHeader>
                    <tbody >
                        {diagnostic_list.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className='narrow'>{item.name}</TableCell>
                                <TableCell className='wide'>{item.description}</TableCell>
                                <TableCell className='narrow'>{item.status}</TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>
        </DiagnosisListContainer>
    )
}

export default DiagnosisList