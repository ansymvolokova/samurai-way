import React from 'react'
import {Post} from "./My post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea ></textarea>
                <button>Add post</button>
            </div>
        <div>
            <Post message={'Hi! How are you?'} likesCount={10}/>
            <Post message={'I learn React'} likesCount={15}/>
        </div>
        </div>
    )
}