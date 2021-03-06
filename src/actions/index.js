import axios from 'axios';

export const FETCH_SMURF_START = "FETCH_SMURF_START"
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS"
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL"
export const FETCH_SMURF_ADD = "FETCH_SMURF_ADD"
export const FETCH_SMURF_ERROR = "FETCH_SMURF_ERROR"

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURF_START });
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log("res object", res)
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCH_SMURF_FAIL, payload: err})
        })
}

export const addSmurf = newSmurf => dispatch => {
    console.log('newSmurf', newSmurf);
    dispatch({ type: FETCH_SMURF_ADD})
    axios
        .post("http://localhost:3333/smurfs", newSmurf)
        .then(res => {
            console.log(res)
            dispatch({ type: FETCH_SMURF_ADD, payload: newSmurf})
        })
        .catch( err => {
            console.log(err)
            dispatch({ type: FETCH_SMURF_FAIL})
        })
}

export const errorSmurf = error => {
    return ({type: FETCH_SMURF_ERROR, payload: error})
}


//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.