import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.props.finishLoading();
    }

    render() {
        return (
            <div id="main" className="column-1">

            </div>
        );
    }
}

import { connect } from 'react-redux';
import { finishLoading } from '../../actions/loading-actions';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = (dispatch) => ({
    finishLoading: () => dispatch(finishLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);