import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {

    const data = [
        {label: 'Going to learn React', important: true, id: 'qwert'},
        {label: 'Травка зеленеет, солнышко блестит', important: false, id: 'jhgfd'},
        {label: 'Keep calm and carry on', important: false, id: 'uhvcx'},
        5,
        [1, 2, 3],
        'asdfbnmbv',
        {},
        {a: 'asdf'},
        {b: 1234},
        {label: ''}
    ];


    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
            <SearchPanel />
            <PostStatusFilter/>
            </div>
            <PostList posts={data} />
            <PostAddForm/>
        </div>

    )
}

export default App;