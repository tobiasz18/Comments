import { connect } from 'react-redux';
import CommentsList from '../presentation/commentsList.js'
import { addComment, removeComment, thumbUp, thumbDown } from '../../actions/comments.js';
import { addUser, removeUser} from '../../actions/users.js';
import Comment from '../presentation/Comment.js';

const mapStateToProps = state => ({
    comments: state.comments,
    users: state.users
});


const mapPropsToState = dispatch => ({
    addComment: (text) => dispatch(addComment(text)),
    addUser: (name) => dispatch(addUser(name))
});


export default connect(mapStateToProps, mapPropsToState)(CommentsList);
