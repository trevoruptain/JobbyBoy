import React from 'react';

class PersonalInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            phone: '',
            email: '',
            personal_site: '',
            address: '',
            objective: ''
        }

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleProfileSubmit = this.handleProfileSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchPersonalInfo(1).then(personalInfo => {
            this.setState(personalInfo.payload);
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
        if (this.props.loading) return <div></div>

        return (
            <section id="user-info" className="boxy-boy">
                <h4>Personal Info</h4>
                <form onSubmit={this.handleProfileSubmit}>
                    <input type="text" value={this.state.personalInfo.name} placeholder="Name" onChange={this.handleUpdate('name')} />
                    <input type="text" value={this.state.personalInfo.phone} placeholder="Phone" onChange={this.handleUpdate('phone')} />
                    <input type="text" value={this.state.personalInfo.email} placeholder="Email" onChange={this.handleUpdate('email')} />
                    <input type="text" value={this.state.personalInfo.personal_site} placeholder="Personal Site" onChange={this.handleUpdate('personalSite')} />
                    <input type="text" value={this.state.personalInfo.address} placeholder="Address" onChange={this.handleUpdate('address')} />
                    <textarea value={this.state.personalInfo.objective} placeholder="Objective" onChange={this.handleUpdate('objective')} />
                    <input type="submit" value="Update" />
                </form>
            </section>
        );
    }
}

import { connect } from 'react-redux';
import { fetchPersonalInfo, updatePersonalInfo } from '../../actions/profile/personal-info-actions';
import profileSelector from '../../util/selectors/profile_selector';

const mapStateToProps = state => {
    const profile = profileSelector(state, 'personalInfo');

    if (profile.personalInfo) {
        return {
            id: profile.personalInfo.id,
            name: profile.personalInfo.name,
            phone: profile.personalInfo.phone,
            email: profile.personalInfo.email,
            personal_site: profile.personalInfo.personal_site,
            address: profile.personalInfo.address,
            objective: profile.personalInfo.objective,
            loading: false
        };
    } else {
        return {
            loading: true
        }
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchPersonalInfo: id => dispatch(fetchPersonalInfo(id)),
    updatePersonalInfo: info => dispatch(updatePersonalInfo(info))
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);