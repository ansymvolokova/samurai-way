import {postDataObject} from "../components/Profile/My posts/MyPosts";
import {dialogsDataObjectType, messageDataObjectType} from "../components/Dialogs/Dialogs";

export type stateType = {
    profilePage: {
        postsData: Array<postDataObject>
    }
    messagesPage: {
        dialogsData: Array<dialogsDataObjectType>
        messageData: Array<messageDataObjectType> //    messageDataObjectType[] / { [key: string]: any }[] / Record<string, any>[]
    }
}
let state: stateType = {
    profilePage: {
        postsData: [
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
        ],
    },
    messagesPage:{
        dialogsData: [
            {
                id: 1,
                name: 'Dima'
            },
            {
                id: 2,
                name: 'Andrey'
            }
        ],
        messageData: [
            {
                id: 1,
                message: 'Hi'
            },
            {
                id: 2,
                message: 'How is your React learning?'
            }
        ]
    }


}

export default state