import React, {Component} from 'react';

export default class SearchPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
        this.onChangeValue = this.onChangeValue.bind(this);
    }
    onChangeValue(e) {
        const keyword = e.target.value;
        this.props.onUpdateSearch(keyword);
    }
    render() {
        return (
            <input 
                className="form-control search-input"
                type="text"
                placeholder="Search by..."
                onChange={this.onChangeValue}
            />
        )
    }

}