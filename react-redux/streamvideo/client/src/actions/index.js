import streams from '../apis/streams'
import { SIGN_IN, SIGN_OUT, CREAT_STREAM } from './types'


export const signIn = (id) => {
    return {
        type: SIGN_IN,
        payload: id
    }
}

export const signOut = () => {
    return {
        type:SIGN_OUT
    }
}


export const createStream = formValues =>async dispatch => {
    const response = await streams.post('/streams', formValues)
    dispatch({type:CREAT_STREAM, payload: response.data})
}