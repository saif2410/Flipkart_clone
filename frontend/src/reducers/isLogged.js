const initialState = {
    status: false,
    token : ''
}
const loggedReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return {status: true, token: action.payload};
        case 'SIGN_OUT':
            return initialState;
        default :
            return state;
    }
};

export default loggedReducer;