import React from "react";
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
    name: string
    id: string
}

type MessagePropsType = {
    message: string
}

const DialogItem = (props: PropsType) => {
    return(
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {
    return(
        <div className={styles.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name={"Dima"} id={"1"}/>
                <DialogItem name={"Andrey"} id={"2"}/>
            </div>
            <div className={styles.messages}>
                <Message message={"Hi"}/>
                <Message message={"How is your React learning?"}/>

            </div>
        </div>
    )

}