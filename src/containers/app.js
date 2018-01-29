import React from 'react';
import { connect } from 'react-redux';

import Comments from '../components/comments';
import AddComment from '../components/add-comment';
import { addComment, deleteComment } from '../actions';

let CommentsApp = ({comments, addComment, deleteComment}) => {
    let nextID = 0;
    if (comments.length > 0) {
        nextID = comments[comments.length - 1].id + 1;
    }

    return (
        <div>
            <h2>Comments</h2>
            <Comments comments={comments} deleteComment={deleteComment}/>
            <AddComment addComment={addComment} nextID={nextID}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        comments: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteComment: (id) => dispatch(deleteComment(id)),
        addComment: (author, text, nextID) => dispatch(addComment(author, text, nextID))
    }
}

CommentsApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsApp);



export default CommentsApp;