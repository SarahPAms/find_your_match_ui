import { MATCH_SELECTED } from '../actions/index'

export default function(state = null, action) {
    switch(action.type){
      case MATCH_SELECTED:
        return action.payload;
    }

    return state;
}
