import { ADD_COMMENT, REMOVE_COMMENT, THUMB_UP, THUMB_DOWN } from '../actions/comments.js';

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                text: action.text,
                id: action.id,
                votes: action.votes
            }, ...state];
        case REMOVE_COMMENT:
            return state.filter(comment => comment.id !== action.id);
        case THUMB_UP:
            return state.map(comment => {
                comment.id === action.id ? comment.votes++ : comment
                return comment
            });
        case THUMB_DOWN:
            return state.map(comment => {
                comment.id === action.id ? comment.votes-- : comment
                return comment
            });
        default:
            return state;
    }
}

export default comments
