import React from 'react';
import { Redirect } from 'react-router-dom';

const SecretPage = ({ isLoggedIn }) => {

    if (isLoggedIn) {
        return (
            <div className="jumbotron text-center">
                <h2>SecretPage content</h2>
            </div>
        );
    }

    return <Redirect to="/login" />
};

export default SecretPage;
