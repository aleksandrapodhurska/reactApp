import React from 'react';
import PostListItem from '../post-list-item';

const PostList = ({posts, onDelete}) => {

    const elements = posts.map( (item) => {
        if (typeof item === 'object' && item !== null && item.label && item.label !== '') {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem
                    onDelete={() => onDelete(id)}
                    {...itemProps}/>
            </li>
        )
        } return false
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;