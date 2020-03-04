import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = ({ itemId, swapiService }) => {
    const { getStarship, getStarshipImage } = swapiService;
    return(
        <ItemDetails
            itemId={itemId}
            getData={getStarship}
            imageUrl={getStarshipImage}>

            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Price" />

        </ItemDetails>
    )
}

export default withSwapiService(StarshipDetails);
