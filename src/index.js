import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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