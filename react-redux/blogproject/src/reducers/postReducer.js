export default (state = [], action) => {
    // if(action.type === 'FETCH_POST'){
    //     return action.payload
    // }
    // return state;
// Please use the switch statement rather than use if statement
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default: 
            return state;
        
    }
};