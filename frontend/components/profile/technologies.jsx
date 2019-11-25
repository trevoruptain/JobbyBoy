import React from 'react';

class Technologies extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            technologies: {}
        }
    }
}

import { connect } from 'react-redux';
import { } from '../../actions/profile/technologies-actions';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Technologies);