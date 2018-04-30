import { connect } from 'react-redux';
import { addComment, removeComment, thumbUp, thumbDown } from '../../actions/comments.js';
import { addUser, removeUser} from '../../actions/users.js';
import Comment from '../presentation/Comment.js';

const mapPropsToState = dispatch => ({
    addComment: (text) => dispatch(addComment(text)),
    removeComment: (id) => dispatch(removeComment(id)),
    addUser: (name) => dispatch(addUser(name)),
    removeUser: (id) => dispatch(removeUser(id)),
    thumbUp: (id) => dispatch(thumbUp(id)),
    thumbDown: (id) => dispatch(thumbDown(id))
});

export default connect(null, mapPropsToState)(Comment);
