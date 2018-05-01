import React, { Component } from 'react';
import Comment from './Comment';
import CommentContainer from '../containers/commentContainer.js';

class CommentsList extends Component {

    handleAdduser = () => {
        this.props.addUser(this.inputUser.value);
        this.inputUser.value = '';
    }

    handleAddComment = () => {
        if(this.inputUser.value !== '' && this.input.value !== '') {
            this.props.addComment(this.input.value);
            this.input.value = '';
            this.handleAdduser();
        } else {
            alert('empty field')
        }
    }

    render() {
        const users = this.props.users.map(user => user);
        console.log('usesss', users)
        return(
            <div className="App_container">
                <form>
                    <div className="comment_container">
                        <h2>Comments</h2>
                        <label>
                            <input type="text" ref={(inputUser) => this.inputUser = inputUser} placeholder="name" />
                        </label>
                        <label>
                            <textarea type="text" rows="4" cols="50" ref={(input) => this.input = input} placeholder="comment" />
                        </label>
                        <label>
                            <input type="button" onClick={() => this.handleAddComment() } value="Add comment" />
                        </label>
                    </div>
                </form>
                {this.props.comments.map((item, index) =>
                    <CommentContainer {...item} key={item.id} user={users[index]} />)}
            </div>
        )
    }
}

export default CommentsList;
