const initialState= {
    all: ['English','Hindi', 'Bengali', 'Tamil', 'Telugu'],
    active: 'Hindi'
}

const reducer = (state = initialState, action) => {
    if( action.type === 'CHANGEACTIVE') {
        console.log('index', action.ind);
        return {
            ...state,
            active: action.language
        }
    }
    return state;
}

export default reducer;