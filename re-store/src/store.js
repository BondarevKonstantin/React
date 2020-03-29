import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers';

const stringMiddleware = () => (next) => (action) => {

    if (typeof action === 'string') {
        return next({
            type: action
        });
    }

    return dispatch(action);
};

const store = createStore(reducer, applyMiddleware(stringMiddleware));

export default store;
