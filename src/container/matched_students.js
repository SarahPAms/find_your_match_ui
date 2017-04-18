import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectMatch} from '../actions/index'
import { bindActionCreators } from 'redux'

const today = 18;

class MatchedStudentsList extends Component {
  renderList() {
    return this.props.matches.map((match) => {
      if (match.date > today){
      return null
    }
      return(
        <li
          key={match.name}
          onClick={()=> this.props.selectMatch(match)}
          className="list-group-item">
          {match.name} ({match.date})</li>
      );
    });
  }

  render() {
    return (
      <div className="col-md-4 happy">
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
      </div>
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
