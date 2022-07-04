import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {postDataObject} from "./components/Profile/My posts/MyPosts";
import {dialogsDataObjectType, messageDataObjectType} from "./components/Dialogs/Dialogs";

let postsData: Array<postDataObject> = [
    {
        id: 1,
        message: 'Hi! How are you?',
        likesCount: 10
    },
    {
        id: 2,
        message: 'I learn React',
        likesCount: 15

    }
    ]

let dialogsData: Array<dialogsDataObjectType> = [
    {
        id: 1,
        name: 'Dima'
    },
    {
        id: 2,
        name: 'Andrey'
    }
]
let messageData: Array<messageDataObjectType> = [
    {
        id: 1,
        message: 'Hi'
    },
    {
        id: 2,
        message: 'How is your React learning?'
    }
]

ReactDOM.render(

    <App postsData={postsData} dialogsData={dialogsData} messageData={messageData}/>,
  document.getElementById('root')
);