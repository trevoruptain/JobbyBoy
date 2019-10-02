import React from 'react';
import { Provider, connect } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import SpinnyBoy from './loading/spinny-boy';
import NavBar from './nav/navbar';
import Splash from './splash';
import Resumes from './resumes';

import { startLoading, finishLoading } from '../actions/loading-actions';

import sleep from '../util/sleep_util';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        sleep(2000).then(() => {
            this.props.finishLoading();
        })
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.location.pathname !== nextProps.location.pathname) {
            this.props.startLoading();
        }

        return true;
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location) {
            this.props.finishLoading();
        }
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
                </Switch>
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
    finishLoading: () => dispatch(finishLoading())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));