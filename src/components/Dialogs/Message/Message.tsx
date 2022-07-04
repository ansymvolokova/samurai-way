import React from "react";
import styles from '../Dialogs.module.css'
import {MessagePropsType} from "../Dialogs";

export const Message = (props: MessagePropsType) => {
    return(
        <div className={styles.message}>{props.message}</div>
    )
}