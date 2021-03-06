import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAIL, FETCH_SMURF_ADD, FETCH_SMURF_ERROR } from '../actions'

export const initialState = {
  smurfs: [],
  isLoading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case FETCH_SMURF_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case FETCH_SMURF_ADD:
      return {
        ...state,
        isLoading: false,
        smurfs: [
          ...state.smurfs,
          {
            name: action.payload.name,
            nickname: action.payload.nickname,
            position: action.payload.position,
            summary: action.payload.summary,
            id: Date.now(),
          },
        ],
      };
    case FETCH_SMURF_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
        return state;
  }
};

export default reducer;

//Task List:
//1. Add in the initialState needed to hold:
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as parameters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary
