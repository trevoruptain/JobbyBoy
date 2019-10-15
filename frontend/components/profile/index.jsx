import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            objective: '',
            technology: '',
            technologies: ['React', 'Redux', 'JavaScript', 'Ruby', 'Rails', 'GraphQL', 'SQL', 'Responsive Design']
        };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleProfileSubmit = this.handleProfileSubmit.bind(this);
        this.handleTechnologiesSubmit = this.handleTechnologiesSubmit.bind(this);
    }

    componentDidMount() {
        this.props.finishLoading();
    }

    handleUpdate(name) {
        return (e) => {
            e.preventDefault();
            this.setState({ [name]: e.target.value })
        };
    }

    handleProfileSubmit(e) {
        e.preventDefault();
    }

    handleTechnologiesSubmit(e) {
        e.preventDefault();
        const newTechnologies = this.state.technologies.slice();
        newTechnologies.push(e.target.children[0].value);
    
        this.setState({
            technology: '',
            technologies: newTechnologies,
        });
    }

    render() {
        return (
            <div id="main" className="column-1 profile">
                <section id="user-info" className="boxy-boy">
                    <h4>Personal Info</h4>
                    <form onSubmit={this.handleProfileSubmit}>
                        <input type="text" value={this.state.name} placeholder="Name" onChange={this.handleUpdate('name')} />
                        <input type="text" value={this.state.email} placeholder="Email" onChange={this.handleUpdate('email')} />
                        <input type="text" value={this.state.phone} placeholder="Phone" onChange={this.handleUpdate('phone')} />
                        <input type="text" value={this.state.address} placeholder="Address" onChange={this.handleUpdate('address')} />
                        <textarea value={this.state.objective} placeholder="Objective" onChange={this.handleUpdate('objective')} />
                        <input type="submit" value="Submit" />
                    </form>
                </section>
                <section id="user-technologies" className="boxy-boy">
                    <h4>Technologies</h4>
                    <form onSubmit={this.handleTechnologiesSubmit}>
                        <input type="text" value={this.state.technology} placeholder="Add Technology" onChange={this.handleUpdate('technology')} />
                        <input type="submit" value="Submit" />
                    </form>

                    <ul>
                        {this.state.technologies.map(technology => {
                            return (
                                <li key={technology}>{ technology }</li>
                            );
                        })}
                    </ul>
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
    deleteTechnology: () => console.log('delete beep boop'),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);