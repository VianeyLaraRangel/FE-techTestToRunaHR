import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './App';
import store from './Redux/store';

const container = document.getElementById('root');

const appConnectToProviderRedux = (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(appConnectToProviderRedux, container);

// import * as serviceWorker from './serviceWorker';
// serviceWorker.unregister();
