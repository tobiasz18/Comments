import { connect } from 'react-redux';
import CommentList from '../presentation/commentList'


const mapStateToProps = (state) => {
    comments: state.comments
}

export default connect(mapStateToProps)(CommentList)
