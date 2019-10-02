import React from 'react';

import rotate from '../../util/loading_util';

class SpinnyBoy extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const div = document.getElementById('boy-container');
        rotate(new Date(), div);
    }

    render() {
        return (
            <div id="spinner"><div id='boy-container'>🧔🏻</div></div>
        )
    }
}

export default SpinnyBoy;