import * as api from "../api/fields"

export const getFields = () => async (dispatch) => {
    try {
        console.log('fetching fields')
        const { data } = await api.fetchFields() 
       
        dispatch({ type: 'FETCH_ALL', payload: data})

    } catch (error) {
        console.log(error.message)
        console.log("go fix it")
    }

}