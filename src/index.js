import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from 'store/store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
