import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            objective: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
        this.props.finishLoading();
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    handleUpdate(name) {
        return (e) => {
            e.preventDefault();
            this.setState({ [name]: e.target.value })
        };
    }

    render() {
        return (
            <div id="main" className="column-1 profile">
                <section id="user-info" className="boxy-boy">
                    <h4>Personal Info</h4>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.name} placeholder="Name" onChange={this.handleUpdate('name')} />
                        <input type="text" value={this.state.email} placeholder="Email" onChange={this.handleUpdate('email')} />
                        <input type="text" value={this.state.phone} placeholder="Phone" onChange={this.handleUpdate('phone')} />
                        <input type="text" value={this.state.address} placeholder="Address" onChange={this.handleUpdate('address')} />
                        <textarea value={this.state.objective} placeholder="Objective" onChange={this.handleUpdate('objective')} />
                        <input type="submit" value="Submit" />
                    </form>
                </section>
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