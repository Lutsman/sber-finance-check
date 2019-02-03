import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import {sagas} from '../midlwares/sagas';
import {randomId} from "../midlwares/randomId";
import {rootReducer} from "../reducer";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const sagaMiddleware = createSagaMiddleware();
let middlewares = [sagaMiddleware, randomId];

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
}

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
);

sagas.forEach(saga => sagaMiddleware.run(saga));

export default store;
