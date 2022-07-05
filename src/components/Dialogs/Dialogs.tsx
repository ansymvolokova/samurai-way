import React from "react";
import styles from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {postDataObject} from "../Profile/My posts/MyPosts";

export type PropsType = {
    name: string
    id: number
}

export type MessagePropsType = {
    message: string
}

export type dialogsDataObjectType = {
    id: number
    name: string
}

export type messageDataObjectType = {
    id: number
    message: string
}

type DialogsPropsType = {
    state: {
        dialogsData: Array<dialogsDataObjectType>
        messageData: Array<messageDataObjectType> //    messageDataObjectType[] / { [key: string]: any }[] / Record<string, any>[]
    }
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogsData.map( (dialog) => <DialogItem name={dialog.name} id={dialog.id} /> )
    let messagesElements = props.state.messageData.map( (message) =>   <Message message={message.message}/>)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    )
}