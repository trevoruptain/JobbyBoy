import React from 'react';

class PersonalInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            phone: '',
            email: '',
            personal_site: '',
            address: '',
            objective: '',
        }

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleProfileSubmit = this.handleProfileSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchPersonalInfo(1).then(personalInfo => {
            this.setState(personalInfo.payload.personalInfo);
        })
    }

    handleUpdate(name) {
        return (e) => {
            e.preventDefault();
            this.setState({ personalInfo: {[name]: e.target.value }})
        };
    }

    handleProfileSubmit(e) {
        e.preventDefault();
        debugger;
        this.props.updatePersonalInfo(this.state.personalInfo);
    }

    render() {
        return (
            <section id="user-info" className="boxy-boy">
                <h4>Personal Info</h4>
                <form onSubmit={this.handleProfileSubmit}>
                    <input type="text" value={this.state.name} placeholder="Name" onChange={this.handleUpdate('name')} />
                    <input type="text" value={this.state.phone} placeholder="Phone" onChange={this.handleUpdate('phone')} />
                    <input type="text" value={this.state.email} placeholder="Email" onChange={this.handleUpdate('email')} />
                    <input type="text" value={this.state.personal_site} placeholder="Personal Site" onChange={this.handleUpdate('personalSite')} />
                    <input type="text" value={this.state.address} placeholder="Address" onChange={this.handleUpdate('address')} />
                    <textarea value={this.state.objective} placeholder="Objective" onChange={this.handleUpdate('objective')} />
                    <input type="submit" value="Update" />
                </form>
            </section>
        );
    }
}

import { connect } from 'react-redux';
import { fetchPersonalInfo, updatePersonalInfo } from '../../actions/profile/personal-info-actions';

const mapStateToProps = state => {
    return {
        personalInfo: state.entities.profile.personalInfo
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchPersonalInfo: id => dispatch(fetchPersonalInfo(id)),
    updatePersonalInfo: info => dispatch(updatePersonalInfo(info))
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);