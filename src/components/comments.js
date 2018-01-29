import React from 'react';

function normalTime (date) {
    let now = new Date(date);

    let timeObject = Object.create(null);

    timeObject.dd = now.getDate();
    timeObject.mm = now.getMonth()+1;
    timeObject.yyyy = now.getFullYear();
    timeObject.h = now.getHours();
    timeObject.m = now.getMinutes();
    timeObject.s = now.getSeconds();

    Number.prototype.withZero = function() {
        var value = this.valueOf();
        if (value < 10) {
            value = "0" + value;
        }
        return value;
    };

    for ( let key in timeObject) {
        timeObject[key] = timeObject[key].withZero();
    }

    return timeObject.dd + '.' + timeObject.mm  + '.' + timeObject.yyyy + ' ' +
           timeObject.h + ':' + timeObject.m + ':' + timeObject.s;
}

const Comments = ({ comments, deleteComment }) => {

    return (
        <ul>
            {   
                comments.map((comment) =>  {

                    return (
                        <li key={comment.id} className="comment">
                            <div className="comment__author">{comment.author}</div>
                            <div className="comment__date-time">{normalTime(comment.dateTime)}</div>
                            <div className="comment__text">{comment.text}</div>
                            <button
                                onClick={ev => deleteComment(comment.id)}
                            >
                                X
                            </button>
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default Comments;