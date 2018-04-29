import { combineReducers } from 'redux';
import comments from './Comments';
import users from './Users';

const reducer = combineReducers({
    comments, users
});

export default reducer;
