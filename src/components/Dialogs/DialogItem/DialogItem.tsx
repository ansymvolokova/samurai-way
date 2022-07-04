import React from "react";
import {PropsType} from "../Dialogs";
import styles from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";


export const DialogItem = (props: PropsType) => {
    return(
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}