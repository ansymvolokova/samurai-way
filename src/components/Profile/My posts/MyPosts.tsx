import React from 'react'
import {Post} from "./My post/Post";
import style from './MyPosts.module.css'


export type postDataObject = {
    id: number
    message: string
    likesCount: number
}

type MyPostsPropsType = {
    postsData: Array<postDataObject>
}

export const MyPosts = (props:MyPostsPropsType) => {

    let postsElements = props.postsData.map( (el) =>  <Post message={el.message} likesCount={el.likesCount}/> )
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
            {postsElements}
        </div>
        </div>
    )
}