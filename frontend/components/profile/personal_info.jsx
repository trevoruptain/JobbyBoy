import React from 'react';

class PersonalInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            personalInfo: {}
        }
    }
}

import { connect } from 'react-redux';
import { } from '../../actions/profile/personal-info-actions';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);