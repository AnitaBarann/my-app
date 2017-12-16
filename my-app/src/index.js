import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AppFirebase from "./AppFirebase";

ReactDOM.render(
    <div>
        <AppFirebase />
        <hr />
        <App />
    </div>, document.getElementById('root'));

registerServiceWorker();
