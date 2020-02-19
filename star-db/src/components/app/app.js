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

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {

        const {getPerson, getStarship, getPersonImage, getStarshipImage} = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                imageUrl={getPersonImage}>

                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />

            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                imageUrl={getStarshipImage}>

            </ItemDetails>
        );


        return (
            <ErrorBoundry>
            <div className="stardb-app">
                <Header />
                <Row
                    left={personDetails}
                    right={starshipDetails} />
            </div>
            </ErrorBoundry>
        );
    };
};
