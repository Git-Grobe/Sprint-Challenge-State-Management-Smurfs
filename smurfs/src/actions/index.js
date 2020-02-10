import axios from 'axios'; 

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

export const EDIT_START = "EDIT_START";
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const EDIT_FAILURE = "EDIT_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({type: FETCH_START});
  axios
    .get('http://localhost:3333/smurfs')
    .then( res => { console.log(res); dispatch({type: FETCH_SUCCESS, payload: res.data}) })
    .catch( err => { console.log(err); dispatch({type: FETCH_FAILURE, payload: err}) })
}

export const postSmurf = smurf => dispatch => {
  dispatch({type: POST_START});
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then( res => { console.log(res); dispatch({type: POST_SUCCESS, payload: res.data}) })
    .catch( err => { console.log(err); dispatch({type: POST_FAILURE, payload: err}) })
}

export const deleteSmurf = id => dispatch => {
  dispatch({type: DELETE_START});
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => { console.log(res); dispatch({type: DELETE_SUCCESS, payload: res.data}) })
    .catch(err => { dispatch({type: DELETE_FAILURE, payload: err}) })
}

export const editSmurf = (editedSmurf) => dispatch => {
  dispatch({type: EDIT_START});
  axios
    .put(`http://localhost:3333/smurfs/${editedSmurf.id}`, editedSmurf)
    .then(res => { console.log(res); dispatch({type: EDIT_SUCCESS, payload: res.data}) })
    .catch(err => { dispatch({type: EDIT_FAILURE, payload: err}) })
}