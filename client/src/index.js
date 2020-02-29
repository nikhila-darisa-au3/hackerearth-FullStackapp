import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Details from './components/singlepage/singlepage'
import PageNotFound from './components/PageNotFound'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function Main() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/details/:id' component={Details} />
                <Route component={PageNotFound} />
            </Switch>

        </Router>
    )
}
ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
