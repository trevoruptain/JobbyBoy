import React from 'react';

class Download extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggled: false,
            text: 'Extension',
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        const toggled = this.state.toggled;
        const text = toggled ? 'Extension' : 'Download ⬇';

        this.setState({ toggled: !toggled, text });
    }

    render() {
        const styles = this.state.toggled ? { backgroundColor: 'transparent' } : {};

        return (
            <a className={`button ${this.props.linkColor}`} onClick={this.toggle} style={styles} >{ this.state.text }</a>
        );
    }
}

export default Download;