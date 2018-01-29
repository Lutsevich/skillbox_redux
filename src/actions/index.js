export const deleteComment = (id) => {
    return {
        type: 'DELETE_COMMENT',
        id
    }
}


//let nextCommentId = 4;

export const addComment = (author, text, nextID) => {
    return {
        type: 'ADD_COMMENT',
        id: nextID,
        author,
        text,
    }
}