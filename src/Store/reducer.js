const initialState= {
    all: ['English','Hindi', 'Bengali', 'Tamil', 'Telugu'],
    active: {
        current: 'Hindi',
        last: null},
    modal: false,
    modalData: {
        name: null,
        language: null,
        imdb: null,
    },
    movieslist: []
}

const reducer = (state = initialState, action) => {
    if( action.type === 'CHANGEACTIVE') {
        console.log('index', state);
        return {
            ...state,
            active: {
                last: state.active.current,
                current: action.language
            }
        }   
    }
    if (action.type === 'MODALDATA') {
        return {
            ...state,
            modal: true,
            modalData: action.data
        }
    }
    if (action.type === 'CLOSEMODAL') {
        return {
            ...state,
            modal: false,
        }
    }
    if (action.type === 'MOVIELISTUPDATE') {
        return {
            ...state,
            movieslist: [...action.movieslist]
        }
    }
    return state;
}

export default reducer;