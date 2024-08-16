// library imports
import axios from "axios"

// local imports
import { ApiCredentials } from "../common/Interfaces"

export const getPatientsData = (credentials: ApiCredentials) => {
    try {
        const { username, password } = credentials
        return axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
            headers: {
                Authorization: `Basic ${btoa(`${username}:${password}`)}`
            }
        })
    } catch (error) {
        throw error
    }
}