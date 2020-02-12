import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page'

import './app.css';
import ErrorIndicator from '../error-indicator';

export default class App extends Component {

    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div className="stardb-app">
                <Header />
                <RandomPlanet />
                <PeoplePage />
            </div>
        );
    };
};
