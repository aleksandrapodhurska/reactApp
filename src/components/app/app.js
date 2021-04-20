import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React', important: true, like: false, id: 1 },
                {label: 'Травка зеленеет, солнышко блестит', important: false, like: false, id: 2},
                {label: 'Keep calm and carry on', important: false, like: false, id: 3},
            ],
            keyword: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.filterPost = this.filterPost.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.addId = 4;
    }
    deleteItem(id) {
        this.setState(({data}) => {
            const newArr = data.filter(item => item.id !== id);
            return {
                data: newArr
            }
        })
    }
    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.addId++ 
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            console.log(newArr);
            return {
                data: newArr
            }
        })
    }
    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);

            const oldItem = data[index];
            const newItem = {...oldItem, important: !oldItem.important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }
    onToggleLike(id) {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);

            const oldItem = data[index];
            const newItem = {...oldItem, like: !oldItem.like};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }
    searchPost(posts, keyword) {
        if(keyword.length === 0)
        return posts;

        return posts.filter(post => post.label.indexOf(keyword) > -1)
    }
    filterPost(posts, filter) {
        if(filter === 'like') {
            return posts.filter(post => post.like);
        } else {
            return posts;
        }
    }
    onUpdateSearch(keyword) {
        this.setState({keyword});
    }
    onFilterSelect(filter) {
        this.setState({filter});
    }
    render() {
        const {data, keyword, filter} = this.state;
        const allPosts = data.length;
        const liked = data.filter(item => item.like).length;

        const visiblePosts = this.filterPost(this.searchPost(data, keyword), filter);

        return (
            <div className="app">
                <AppHeader
                    allPosts={allPosts}
                    liked={liked}/>
                <div className="search-panel d-flex">
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike}
                />
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
    
        )
    }
}
