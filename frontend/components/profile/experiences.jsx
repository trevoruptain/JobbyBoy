import React from 'react';

class Experiences extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            experiences: {}
        }
    }
}

import { connect } from 'react-redux';
import { } from '../../actions/profile/experiences-actions';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Experiences);