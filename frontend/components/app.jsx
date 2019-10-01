import React from 'react';
import { Provider, connect } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';

import SpinnyBoy from './loading/spinny-boy';
import NavBar from './nav/navbar';
import Splash from './splash';
import Resumes from './resumes';

const App = ({ loading }) => {
    const loader = loading ? <SpinnyBoy /> : null;

    return (
        <div>
            { loader }
            <NavBar />
            <Switch>
                <Route exact path="/" component={ Splash } />
                <Route path="/resumes" component={ Resumes } />
            </Switch>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loading: state.ui.loading
    }
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);