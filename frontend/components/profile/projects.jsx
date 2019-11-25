import React from 'react';

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: {}
        }
    }
}

import { connect } from 'react-redux';
import {} from '../../actions/profile/project-actions';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = (dispatch) => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);