import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';

export function Friends(login) {
    console.log(login)
    return dispatch => {
        dispatch({type: FETCHING});
        return axios
        .post('http://localhost:5000/api/login', login)
        .then(res => {
            localStorage.setItem('Token', res.data.payload)
            dispatch({
                type: SUCCESS,
                payload: res.data.payload
            })
        })
        
        .catch(err => {
            console.log(err);
        })
        
    }
} 