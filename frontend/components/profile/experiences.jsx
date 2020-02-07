import React from 'react';

class Experiences extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            experiences: this.props.experiences,
            experience: ''
        }

        this.handleUpdate = this.handleUpdate.bind(this);
        this.addExperienceBullet = this.addExperienceBullet.bind(this);
        this.removeExperienceBullet = this.removeExperienceBullet.bind(this);
    }

    handleUpdate(name) {
        return (e) => {
            e.preventDefault();
            this.setState({ personalInfo: { [name]: e.target.value } })
        };
    }

    addExperienceBullet(e) {
        e.preventDefault();
        const newExperiences = this.state.experiences.slice();
        newExperiences[e.target.id].bullets.push(e.target.innerText);

        this.setState({
            experience: '',
            experiences: newExperiences
        });
    }

    removeExperienceBullet(index, companyName) {
        e.preventDefault();
    }

    render() {
        return (
            <section id="user-experiences" className="boxy-boy">
                <h4>Experiences</h4>
                <form onSubmit={this.handleExperiencesSubmit}>
                    <input type="text" value={this.state.experience} placeholder="Add New Employer" onChange={() => this.handleUpdate('experience')} />
                    <input type="submit" value="Submit" />
                </form>

                <div>
                    {Object.keys(this.state.experiences).map(companyName => {
                        const experience = this.state.experiences[companyName];
                        return (
                            <div key={companyName}>
                                <h3>{experience.company_name} <p className='edit'>✏️</p> <p className='trash'>🗑</p></h3>
                                <div>{experience.start_date} - {experience.end_date}</div>
                                <i>{experience.description}</i> <p className='edit'>✏️</p>
                                <ul>
                                    {experience.experience_bullets.map(bullet => (
                                        <li key={bullet.id}>{bullet.body} <div className='delete-bullet'><p className='trash'>🗑</p><p className='edit'>✏️</p></div></li>
                                    ))}
                                    <p>➕</p>
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }
}

import { connect } from 'react-redux';
import { createExperience,
         createExperienceBullet,
         deleteExperience,
         deleteExperienceBullet,
         updateExperience,
         updateExperienceBullet } from '../../actions/profile/experience-actions';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = (dispatch) => ({
    createExperience: experience => dispatch(createExperience(experience)),
    createExperienceBullet: bullet => dispatch(createExperienceBullet(bullet)),
    deleteExperience: id => dispatch(deleteExperience(id)),
    deleteExperienceBullet: id => dispatch(deleteExperienceBullet(id)),
    updateExperience: experience => dispatch(updateExperience(experience)),
    updateExperienceBullet: bullet => dispatch(updateExperienceBullet(bullet))
});

export default connect(mapStateToProps, mapDispatchToProps)(Experiences);