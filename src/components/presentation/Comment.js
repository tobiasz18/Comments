import React from 'react';

const Comment = ({text, votes, id, user, removeUser, removeComment, thumbUp, thumbDown}) => {
    return (
        <div>
            <h1>{user} write:</h1>
            <p>{text}</p>
            <i>votes: {votes}</i>
            <button onClick={() => removeComment(id)}>remove</button>
            <button onClick={() => thumbUp(id)}>+</button>
            <button onClick={() => thumbDown(id)}>-</button>
        </div>

    )
}

export default Comment;
