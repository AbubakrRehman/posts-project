import React from 'react';
import Post from './Post';
import classes from "../components/PostList.module.css";


function PostList() {
    return (
        <ul className={classes.posts}>
            <Post author="Abu" text="Hello this is Abu!!" />
            <Post author="Abdul" text="Hello this is Abdul!!" />
        </ul>
    )
}

export default PostList