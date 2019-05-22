import jsonPlaceholder from '../apis/jsonPlaceholder'
import _ from 'lodash'

// This is a bad approach
// export const fetchPosts = async () => {
//     const response = await jsonPlaceholder.get('/post')
//     return {
//         type: 'FETCH_POST',
//         payload: response
//     }
// }

// export const fetchUser = (id) => async dispatch =>{
//     const response = await jsonPlaceholder.get('/users/' + id)
//     dispatch({ type: 'FETCH_USER', payload :response.data})
// } This is the original fetch user

// export const fetchUser = function(id) { 
//     return _.memoize(async function (dispatch) {
//     const response = await jsonPlaceholder.get('/users/' + id);
//     dispatch({ type: 'FETCH_USER', payload :response.data});
//     });
// }; This is also not work. Can not memoize



//--------This is the version of memoize the fetchUser------------
// export const fetchUser = (id) => async dispatch =>{
//     _fetchUser( id, dispatch)
// }
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get('/users/' + id)
//     dispatch({ type: 'FETCH_USER', payload :response.data})
// });
// ----------------------------------------------------------------

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};