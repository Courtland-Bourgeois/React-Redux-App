import { FETCH_BEER_START, FETCH_BEER_SUCCESS, FETCH_BEER_FAILURE } from '../actions';

const initialState = {
  state: {},
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
    default:
      return state
  }
}

export default reducer