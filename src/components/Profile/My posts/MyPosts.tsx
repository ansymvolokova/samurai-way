import React from 'react'
import {Post} from "./My post/Post";
import style from './MyPosts.module.css'

export const MyPosts = () => {
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea ></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        <div>
            <Post message={'Hi! How are you?'} likesCount={10}/>
            <Post message={'I learn React'} likesCount={15}/>
        </div>
        </div>
    )
}