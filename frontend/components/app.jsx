import React from 'react';
import { Provider, connect } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

import NavBar from './nav/navbar';
import Splash from './splash/splash';
import SpinnyBoy from './loading/spinny-boy';

const App = ({ loading }) => {
    const loader = loading ? <SpinnyBoy /> : null;

    return (
        <div>
            { loader }
            <NavBar />
            <Switch>
                <Route path="/" component={Splash} />
            </Switch>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loading: state.ui.loading
    }
};

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);