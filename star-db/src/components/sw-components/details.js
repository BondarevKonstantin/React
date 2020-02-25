import React from 'react';

import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage,
} = swapiService;

const PersonDetails = ({ itemId }) => {

    return(
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            imageUrl={getPersonImage}>

            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />

        </ItemDetails>
    );

};

const StarshipDetails = ({ itemId }) => {

    return(
        <ItemDetails
            itemId={itemId}
            getData={getStarship}
            imageUrl={getStarshipImage}>

            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Price" />

        </ItemDetails>
    );

};

const PlanetDetails = ({ itemId }) => {

    return(
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            imageUrl={getPlanetImage}>

            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />

        </ItemDetails>
    );

};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
};
