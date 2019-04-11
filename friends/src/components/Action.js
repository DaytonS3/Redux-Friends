export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export function friends() {
    return dispatch => {
        dispatch({type: FETCHING});
        axios.get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }
} 