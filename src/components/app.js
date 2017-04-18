import React, { Component } from 'react';
import MatchedStudentsList from '../container/matched_students';
import StudentDetail from '../container/student_detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <MatchedStudentsList />
        <StudentDetail />
      </div>
    );
  }
}
