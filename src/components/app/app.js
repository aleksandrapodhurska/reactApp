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
                {label: 'Going to learn React', important: true, id: `${this.getId()}` },
                {label: 'Травка зеленеет, солнышко блестит', important: false, id: `${this.getId()}`},
                {label: 'Keep calm and carry on', important: false, id: `${this.getId()}`},
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
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
            id: this.maxId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10); 
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            console.log(newArr);
            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter/>
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={this.deleteItem}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
    
        )
    }
}
