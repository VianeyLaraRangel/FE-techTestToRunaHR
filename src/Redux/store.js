import { createStore, combineReducers } from 'redux';

import spells from './reducers/spells';

const reducer = combineReducers({
    //Here middleware if its necessary
    spells
});

const store = createStore(reducer);

export default store;