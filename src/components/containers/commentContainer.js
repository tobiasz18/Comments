import { connect } from 'react-redux';
import { addComment, removeComment, thumbUp, thumbDown } from '../../actions/comments.js';
import { addUser, removeUser} from '../../actions/users.js';
import Comment from '../presentation/Comment.js';

const mapPropsToState = dispatch => ({
    addComment: (text) => dispatch(addComment(text))
});

export default connect(null, mapPropsToState)(Comment);
