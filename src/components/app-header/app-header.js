import React from 'react';

const AppHeader = ({allPosts, liked}) => {
    return (
        <div className="app-header d-flex">
            <h1>What's on your mind?</h1>
            <div className="sub-header">
                <h2>{allPosts} thoughts of all time</h2>
                <h2>{liked} liked</h2>
            </div>
        </div>
    )
}

export default AppHeader;