import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store.js'
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Layout} from './navComponents/Layout'


ReactDOM.render(
    <Provider store={ store }>
        <React.Fragment>
            <Layout>
                <Router>
                    <App />
                </Router>
            </Layout>
        </React.Fragment>
    </Provider>, 
    document.getElementById('root')
    );

serviceWorker.unregister();
