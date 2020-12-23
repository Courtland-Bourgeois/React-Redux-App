import { FETCH_BEER_START, FETCH_BEER_SUCCESS, FETCH_BEER_FAILURE } from '../actions';

const initialState = {
  state: [],
  isFetching: false,
  error: ""
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_BEER_START:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_BEER_SUCCESS:
      return {
        ...state, 
        state: action.payload,
        isFetching: false,
        error: ""
      }
    case FETCH_BEER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default reducer