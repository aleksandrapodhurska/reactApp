import React from 'react';
import PostListItem from '../post-list-item';

const PostList = ({posts}) => {

    const elements = posts.map( (item) => {
        if (typeof item === 'object' && IsEmpty(item) && item !== null && !Array.isArray(item)) {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem {...itemProps}/>
            </li>
        )
    } else return null
    })

    function IsEmpty(obj) {
        for(let key in obj) {
            if(key === 'label' && obj['label'] !== "") {
                return true;
            }
        return false;
        }
    }

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;