import React from 'react';
import { Provider, connect } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import SpinnyBoy from './loading/spinny-boy';
import NavBar from './nav/navbar';
import Footer from './nav/footer';
import Splash from './splash';
import Resumes from './resumes';
import Profile from './profile';
import API from './api';

import { startLoading } from '../actions/loading-actions';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.location.pathname !== nextProps.location.pathname) {
            this.props.startLoading();
        }

        return true;
    }

    render() {
        const loader = this.props.loading ? <SpinnyBoy /> : null;

        return (
            <div>
                { loader }
                <NavBar />
                <Switch>
                    <Route exact path="/" component={ Splash } />
                    <Route path="/resumes" component={ Resumes } />
                    <Route path="/profile" component={ Profile } />
                    <Route path="/api" component={ API } />
                </Switch>
                <Footer />
            </div>
        );
    } 
};

const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.ui.loading,
        url: ownProps.location
    }
};

const mapDispatchToProps = (dispatch) => ({
    startLoading: () => dispatch(startLoading()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));