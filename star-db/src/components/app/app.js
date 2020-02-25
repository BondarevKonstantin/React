import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

import './app.css';
import SwapiService from '../../services/swapi-service';

import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
} from '../sw-components';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {

        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header />

                    <PersonDetails itemId={11} />

                    <PlanetDetails itemId={5} />

                    <StarshipDetails itemId={9} />

                    <PersonList>
                        { ({ name }) => <span> { name }</span>}
                    </PersonList>

                    <StarshipList>
                        { ({ name }) => <span> { name }</span>}
                    </StarshipList>

                    <PlanetList>
                        { ({ name }) => <span> { name }</span>}
                    </PlanetList>

                </div>
            </ErrorBoundry>
        );
    };
};
