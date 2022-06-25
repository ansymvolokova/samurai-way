import React from 'react'
import s from "../MyPosts.module.css";

type PostPropsType = {
    message: string
    likesCount: number
}

export const Post = (props: PostPropsType) => {
    return (
            <div className={s.item}>
                    <img src='#' alt='#'/>
                {props.message}
                <div>
                    <span>{props.likesCount} likes</span>
                </div>
            </div>
    )
}