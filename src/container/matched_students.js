import React, { Component } from 'react';
import { connect } from 'react-redux';

class MatchedStudentsList extends Component {
  renderList() {
    return this.props.matches.map((match) => {
      return(
        <li key={match.name} className="list-group-item">{match.name}</li>
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

export default connect(mapStateToProps)(MatchedStudentsList)
