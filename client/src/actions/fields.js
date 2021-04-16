import * as api from "../api"

export const getFields = () => async (dispatch) => {
    try {

        const { data } = await api.fetchFields() 
        dispatch({ type: FETCH_ALL, payload: data})

    } catch (error) {
        console.log(error)
    }

}