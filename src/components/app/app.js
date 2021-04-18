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
        this.newId = 4;
        this.getId = this.getId.apply(this);
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
            id: this.getId 
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            console.log(newArr);
            return {
                data: newArr
            }
        })
    }
    getId() {
            const arr = [
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
            ];
            let id = '';
            
            for(let i = ''; i < 7; i++) {
                id += arr[getRandomSymbol()];
            }
            
            function getRandomSymbol() {
                return Math.floor(Math.random() * arr.length);
            }
            return id;
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