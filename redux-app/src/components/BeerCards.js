import React from 'react';
import Loader from 'react-loader-spinner';
import BeerCard from './BeerCard';

// redux stuff
import { connect } from 'react-redux';
import { getBeer } from '../actions';

const BeerCards = props => {
  // console.log(props)
  return (
    <div>
      <h1>Louisiana Breweries</h1>
      {!props.state && !props.isFetching && <p>Go ahead! Fetch a brew!</p>}
      {props.isFetching && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />
      )}
      {props.state.map(item => (
        <BeerCard key={item.id} name={item.name} />
      ))}
      <button onClick={props.getBeer}>List of Breweries!</button>
    </div>
  )
}

const mapStateToProps = state => {
  // console.log(state)
  return{
    state: state.state,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getBeer })(BeerCards);