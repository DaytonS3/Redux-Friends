import { FETCHING, SUCCESS } from "./Action";

const initialState = {
    friends: [],
    fetching: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return {
                ...state,
                fetching: true,
                friends: [],
                error: null
            }
        case SUCCESS:
            return {
                ...state,
                fetching: false,
                friends: [],
                error: null
            }
        case SUCCESS:
            return {
                ...state,
                fetching: false,
                friends: [],
                error: 'ERROR'
            }
        default:
            return state;
    }
    
}

export default reducer