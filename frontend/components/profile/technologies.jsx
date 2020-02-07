import React from 'react';

class Technologies extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            technology: ''
        }

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleTechnologiesSubmit = this.handleTechnologiesSubmit.bind(this);
        this.handleDeleteTechnology = this.handleDeleteTechnology.bind(this);
    }

    handleUpdate(name) {
        return (e) => {
            e.preventDefault();
            this.setState({ [name]: e.target.value })
        };
    }

    handleTechnologiesSubmit(e) {
        e.preventDefault();
        const newTechnologies = this.state.technologies.slice();
        newTechnologies.push(e.target.children[0].value);

        this.setState({
            technology: '',
            technologies: newTechnologies
        });
    }

    handleDeleteTechnology(e) {
        e.preventDefault();
        const technologyName = e.target.parentNode.innerText.slice(0, -4);
        const newTechnologies = this.state.technologies.filter(technology => technology !== technologyName);
        this.setState({ technologies: newTechnologies });
    }

    render() {
        return (
            <section id="user-technologies" className="boxy-boy">
                <h4>Technologies</h4>
                <form onSubmit={this.handleTechnologiesSubmit}>
                    <input type="text" value={this.state.technology} placeholder="Add Technology" onChange={this.handleUpdate('technology')} />
                    <input type="submit" value="Submit" />
                </form>

                <ul>
                    {Object.keys(this.props.technologies).map(technology => {
                        const currentTechnology = this.props.technologies[technology].name;
                        return (
                            <li key={currentTechnology}>{currentTechnology}<p className='trash' onClick={this.handleDeleteTechnology}>🗑</p></li>
                        );
                    })}
                </ul>
            </section>
        );
    }
}

import { connect } from 'react-redux';
import { createTechnology,
         deleteTechnology,
         updateTechnology } from '../../actions/profile/technology_actions';

const mapStateToProps = state => {
    return {
        technologies: state.entities.profile.technologies
    };
};

const mapDispatchToProps = (dispatch) => ({
    createTechnology: technology => dispatch(createTechnology(technology)),
    deleteTechnology: id => dispatch(deleteTechnology(id)),
    updateTechnology: technology => dispatch(updateTechnology(technology))
});

export default connect(mapStateToProps, mapDispatchToProps)(Technologies);