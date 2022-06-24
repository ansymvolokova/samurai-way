import React from  'react'
import s from './Profile.module.css'
import {MyPosts} from "./My posts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="#" alt=""/>
            </div>
            <div>
                <img src="#" alt=""/>
            </div>
            <div>
                ava + descr
            </div>
            <MyPosts/>
        </div>
    )
}