import React from 'react';

const Comment = ({text, votes, id, user, removeUser, removeComment, thumbUp, thumbDown}) => {
    return (
        <main>
            <section className="image">
                <img src="https://png.icons8.com/nolan/50/000000/anonymous-mask.png" />
            </section>
            <section>
                <article>
                    <span className="user">{user.name}</span>
                    <span className="minusSpan" onClick={() => thumbDown(id)}>
                        <img src="https://png.icons8.com/color/50/000000/minus.png" />
                    </span>
                    <span className="plusSpan" onClick={() => thumbUp(id)}>
                        <img src="https://png.icons8.com/color/50/000000/plus.png" />
                    </span>
                    <span  className="votes">{votes}</span>
                </article>
                <article>
                    <p>{text}</p>
                    <button onClick={() => removeComment(id)}>Remove</button>
                </article>
            </section>
        </main>
    )
}

export default Comment;
