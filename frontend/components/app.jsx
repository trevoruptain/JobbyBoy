import React from 'react';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

import NavBar from './nav/navbar';
import Splash from './splash/splash';

const App = props => (
    <div>
        <NavBar />
        <Switch>
            <Route path="/" component={Splash} />
        </Switch>  
    </div>
);

export default App;