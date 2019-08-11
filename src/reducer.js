const initialState = {password: 0};

const reducer = (state = initialState, action) => {
    const newState = {...state};
    if(action.type === 'ADD_EMP'){
        newState.name = action.payload.name;
        newState.number = action.payload.number;
        newState.email = action.payload.email;
    }
    if(action.type === 'ADD_PWD'){
        newState.password = action.payload.password;
    }
    if(action.type === 'CLEAR_STORE'){
        newState.name = '';
        newState.number = '';
        newState.email = '';
        newState.password = 0;
    }
    return newState;
}

export default reducer;