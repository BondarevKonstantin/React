import React, {Component} from 'react';

export default class ItemStatusFilter extends Component {

    onChosen = (e) => {
        const value = e.target.value;
        this.props.onFiltered(value);
    }

    render() {
        return (
            <div className="btn-group">
                <button type="button"
                        value="all"
                        className="btn btn-info"
                        onClick={ this.onChosen }>

                    All
                </button>
                <button type="button"
                        className="btn btn-outline-secondary"
                        value="active"
                        onClick={ this.onChosen }>Active</button>
                <button type="button"
                        value="done"
                        className="btn btn-outline-secondary"
                        onClick={ this.onChosen }>Done</button>
            </div>
        );
    };
}
