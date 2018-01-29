const comments = (state = [], action) => {
    let newState;

    switch (action.type) {
        case 'DELETE_COMMENT':
            newState = state.filter(comment => {
                if (comment.id !== action.id) {
                    return comment;
                }
            });
            localStorage.comments = JSON.stringify(newState);
            return newState;

        case 'ADD_COMMENT': 
            newState = [...state, { id: action.id, author: action.author, dateTime: (new Date()).getTime(), text: action.text }];
            localStorage.comments = JSON.stringify(newState);
            return newState;
        
        default: 
            return state;
    }
}

export default comments;