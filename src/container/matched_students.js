import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectMatch} from '../actions/index'
import { bindActionCreators } from 'redux'

class MatchedStudentsList extends Component {
  renderList() {
    return this.props.matches.map((match) => {
      return(
        <li
          key={match.name}
          onClick={()=> this.props.selectMatch(match)}
          className="list-group-item">
          {match.name}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    matches: state.matches
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ selectMatch: selectMatch }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchedStudentsList)
