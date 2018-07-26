const initialState= {
    all: ['English','Hindi', 'Bengali', 'Tamil', 'Telugu'],
    active: 'Hindi',
    modal: false,
    modalData: {
        name: null,
        language: null,
        imdb: null,
    }
}

const reducer = (state = initialState, action) => {
    if( action.type === 'CHANGEACTIVE') {
        console.log('index', action.ind);
        return {
            ...state,
            active: action.language
        }
    }
    if (action.type === 'MODALDATA') {
        console.log('index', action.data);
        return {
            ...state,
            modal: true,
            modalData: action.data
        }
    }
    if (action.type === 'CLOSEMODAL') {
        console.log('Close modal');
        return {
            ...state,
            modal: false,
        }
    }
    return state;
}

export default reducer;