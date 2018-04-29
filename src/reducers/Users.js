import { ADD_USER, REMOVE_USER } from '../actions/users.js';

function users(state = [], action) {
    switch (action.type) {
        case ADD_USER:
            return [{
                name: action.name,
                id: action.id
            }, ...state];
        case REMOVE_USER:
            return state.filter(user => user.id !== action.id);
        default:
            return state;
    }
}
