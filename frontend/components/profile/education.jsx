import React from 'react';

class Education extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            educations: {}
        }
    }
}

import { connect } from 'react-redux';
import { } from '../../actions/profile/education-actions';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Education);