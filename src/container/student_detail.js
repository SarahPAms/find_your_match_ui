import React, { Component } from 'react';
import { connect } from 'react-redux';

class StudentDetail extends Component {
  render() {
    if(!this.props.match){
      return <div> Select a match to see more: </div>
    }
    return (
      <div>
        <h3> Your match: </h3>
        <div>Name: {this.props.match.name}</div>
        <div>Date Matched: {this.props.match.date}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    match: state.selectedMatch
  };
}

export default connect(mapStateToProps)(StudentDetail)
