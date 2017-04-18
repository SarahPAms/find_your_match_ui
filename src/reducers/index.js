import { combineReducers } from 'redux';
import StudentMatches from './reducer_student_matches';

const rootReducer = combineReducers({
  matches: StudentMatches,
});

export default rootReducer;
