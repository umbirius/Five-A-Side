import axios from 'axios'

const url = 'http://localhost:5000/fields'

export const fetchFields = () => axios.get(url)