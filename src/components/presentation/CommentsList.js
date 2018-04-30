import React, { Component } from 'react';
import Comment from './Comment';
import CommentContainer from '../containers/commentContainer.js';

class CommentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: '',
            users: ''
        }
    }

    handleAdduser = () => {
        console.log('test', this.inputUser.value)
    }

    handleAddComment = () => {
        console.log('Click happened', this.input.value);
        this.props.addComment(this.input.value);
        this.input.value = '';
        this.handleAdduser();
    }

    render() {
        return(
            <div>
                <input type="text" ref={(inputUser) => this.inputUser = inputUser}/>
                <input type="text" ref={(input) => this.input = input}/>
                <button onClick={() => this.handleAddComment() }> Add </button>
                {this.props.comments.map((item, index) =>
                    <CommentContainer {...item} key={item.id} />)}
            </div>
        )
    }
}

export default CommentsList;
