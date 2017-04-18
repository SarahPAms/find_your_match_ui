import React, { Component } from 'react'
import { connect } from 'react-redux';

const today = 18;

class TodaysMatch extends Component {
  pickTodaysMatch() {
    return this.props.matches.map((match) => {
      if (match.date == today){
        return(
          <li
            key={match.name}
            className="list-group-item">
            {match.name}</li>
        );
      }
    });
  }

  render() {
    return (
      <div className="col-md-4 happy">
        Your match today is:
        <ul className="list-group">
          {this.pickTodaysMatch()}
        </ul>
      </div>
    )
  }
  }


function mapStateToProps(state) {
  return {
    matches: state.matches
  }
}

export default connect(mapStateToProps)(TodaysMatch)
