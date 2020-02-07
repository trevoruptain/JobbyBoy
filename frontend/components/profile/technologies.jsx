import React from 'react';

class Technologies extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            technologies: this.props.technologies
        }
    }
}

export default Technologies;