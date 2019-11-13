import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
    render() {
        return (
            <div className="item-add-form">
                <button className="add-item-button btn btn-dark"
                        onClick={() => this.props.onAdded("Hello world")}>
                    Add Item
                </button>
            </div>
        );
    };

};
