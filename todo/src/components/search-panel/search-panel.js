import React, { Component } from 'react';

export default class SearchPanel extends Component {

    onChange = (e) => {
        const target = e.target;
        this.props.onChanged(target.value);
    };

    render() {
        return (
            <input type="text"
                    className="form-control search-input"
                    placeholder="type to search"
                    onChange={ this.onChange } />
        );
    };
};
