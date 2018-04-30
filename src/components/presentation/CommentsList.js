import React, { Component } from 'react';
import Comment from './Comment';
import CommentContainer from '../containers/commentContainer.js';

class CommentsList extends Component {

    handleAdduser = () => {
        this.props.addUser(this.inputUser.value);
        this.inputUser.value = ''
    }

    handleAddComment = () => {
        console.log('Click happened', this.input.value);
        this.props.addComment(this.input.value);
        this.input.value = '';
        this.handleAdduser();
    }

    render() {
        const users = this.props.users.map(user => user.name);

        return(
            <div>
                <input type="text" ref={(inputUser) => this.inputUser = inputUser} placeholder="name" />
                <textarea type="text" rows="4" cols="50" ref={(input) => this.input = input} placeholder="comment"/>
                <button onClick={() => this.handleAddComment() }> Add </button>
                {this.props.comments.map((item, index) =>
                    <CommentContainer {...item} key={item.id} user={users[index]} />)
                }

            </div>
        )
    }
}

export default CommentsList;
