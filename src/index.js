import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import AllReducers from './reducers/reducer'
import {createStore,applyMiddleware} from 'redux'
import thunk from "redux-thunk";


const store = createStore(AllReducers,applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root'));
