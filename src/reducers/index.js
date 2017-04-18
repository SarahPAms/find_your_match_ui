import { combineReducers } from 'redux';
import StudentMatches from './reducer_student_matches';
import SelectedMatch from './reducer_selected_match'

const rootReducer = combineReducers({
  matches: StudentMatches,
  selectedMatch: SelectedMatch
});

export default rootReducer;
