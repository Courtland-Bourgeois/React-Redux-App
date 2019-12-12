import axios from 'axios';

export const FETCH_BEER_START = 'FETCH_BEER_START';
export const FETCH_BEER_SUCCESS = 'FETCH_BEER_SUCCESS';
export const FETCH_BEER_FAILURE = 'FETCH_BEER_FAILURE';

export const getBeer = () => dispatch => {
  dispatch({ type: FETCH_BEER_START })
  axios
    .get('https://api.openbrewerydb.org/breweries?by_state=louisiana')
    .then(res => {
      console.log(res.data)
    })
}