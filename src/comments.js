import {ADD_COMMENT, REMOVE_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT, EDIT_COMMENT} from './actions';

function comments(state = [], action) {
  switch(action.type) {
    case ADD_COMMENT:
      return [
        {
          id: action.d,
          text: action.text,
          votes: 0,
        }
        , ...state
      ];
    case REMOVE_COMMENT:
      return state.filter(comment => comment.id !== action.id);
    case THUMB_UP_COMMENT:
      return state.map(comment => {
        if (comment.id === action.id) {
          return Object.assign({}. comment, {
            votes: comment.votes + 1
          })
        }
        return comment;
      });
    case THUMB_DOWN_COMMENT:
      return state.map(comment => {
        if (comment.id === action.id) {
          return Object.assign({}. comment, {
            votes: comment.votes - 1
          })
        }
        return comment;
      });
    case EDIT_COMMENT:
      return state.map(comment => {
        if (comment.id === action.id) {
          return Object.assign({}. comment, {
            text: action.text
          })
        }
        return comment;
      });
    default:
      return state;
  }
}

export default comments;
