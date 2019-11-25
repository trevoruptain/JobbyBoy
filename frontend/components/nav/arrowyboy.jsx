import React from 'react';

class ArrowyBoy extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggled: false,
            text: 'Extension',
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle(toggled) {
        if (toggled === this.state.toggled) return;
        const text = toggled ? 'Download?' : 'Extension';
        this.setState({ toggled, text });
    }

    render() {
        const styles = this.state.toggled ? { cursor: 'auto', color: '#030303' } : {};
        const arrows = this.state.text === 'Download?' ? [this.props.icon, '⬅'] : ['', ''];

        return (
            <div>
                <a className={`button ${this.props.linkColor}`} onClick={() => this.toggle(true)} style={styles} > {this.state.text + ' '} <span id={this.props.id}>{arrows[0]}</span> <span id='close' onClick={() => this.toggle(false)}>{ arrows[1] }</span></a>
            </div>
        );
    }
}

export default ArrowyBoy;