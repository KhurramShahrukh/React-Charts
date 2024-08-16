// library imports
import axios from "axios"

export const getPatientsData = () => {
    try {
        return axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
            headers: {
                Authorization: `Basic ${btoa("coalition:skills-test")}`
            }
        })
    } catch (error) {
        throw error
    }
}