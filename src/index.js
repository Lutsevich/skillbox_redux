import React from "react";
import ReactDOM from "react-dom";

import CommentsApp from "./containers/app";
import { createStore } from 'redux';

import comments from './reducers';

let initialState = null;

if (localStorage.comments) {
    initialState = JSON.parse(localStorage.comments);
} else {
    initialState = [
        {id: 0, author: 'Valery', dateTime: 1516648073108, text : 'initial test comments'},
        {id: 1, author: 'Sergey', dateTime: 1516648075308, text : 'initial test comment2'},
        {id: 2, author: 'Alex', dateTime: 1516648079708, text : 'initial test comment3'}
    ];
}

const store = createStore(comments, initialState);

ReactDOM.render(
    <CommentsApp store={store}/>,
    document.querySelector('#app')
);