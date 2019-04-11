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
                error: null,
                fetching: true
            }
        case SUCCESS:
            return {
                ...state,
                error: null,
                fetching: false,
                friends: []
            }
    }
}

export default reducer;