import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Posts/Post";


const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3> My post </h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.content}>
                {postsElements}
            </div>


        </div>
    )
}

export default MyPosts;