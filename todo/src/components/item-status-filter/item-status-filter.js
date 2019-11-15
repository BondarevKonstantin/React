import React, {Component} from 'react';

export default class ItemStatusFilter extends Component {

    onChosen = (e) => {
        const btns = document.querySelectorAll('.btn-group button');
        btns.forEach(element => {
            if (e.target === element) {
                element.classList.remove('btn-outline-secondary');
                element.classList.add('btn-info');
            } else {
                element.classList.add('btn-outline-secondary');
                element.classList.remove('btn-info');
            }
        });
        this.props.onFiltered(e.target);
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
                        value="active"
                        className="btn btn-outline-secondary"
                        onClick={ this.onChosen }>Active</button>
                <button type="button"
                        value="done"
                        className="btn btn-outline-secondary"
                        onClick={ this.onChosen }>Done</button>
            </div>
        );
    };
}
