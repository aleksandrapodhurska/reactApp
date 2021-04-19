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
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
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

    render() {
        const {data} = this.state;
        const allPosts = data.length;
        const liked = data.filter(item => item.like).length;
        return (
            <div className="app">
                <AppHeader
                allPosts={allPosts}
                liked={liked}/>
                <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter/>
                </div>
                <PostList
                    posts={this.state.data}
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
