import jsonPlaceholder from '../apis/jsonPlaceholder'

// This is a bad approach
// export const fetchPosts = async () => {
//     const response = await jsonPlaceholder.get('/post')
//     return {
//         type: 'FETCH_POST',
//         payload: response
//     }
// }

export const fetchPosts = () => {
    return async (dispatch, getState) => { // refactor to arrow function - you can remove getState
        const response = await jsonPlaceholder.get('/posts')
        dispatch({type: 'FETCH_POSTS', payload: response.data})
    }   
}