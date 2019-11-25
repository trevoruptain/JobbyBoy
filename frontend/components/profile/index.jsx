import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
         
        this.state = {
            personalInfo: {
                name: '',
                phone: '',
                email: '',
                personalSite: '',
                address: '',
                objective: ''
            },
            technology: '',
            technologies: {},
            experience: '',
            experiences: {},
            project: '',
            projects: {},
            education: '',
            educations: {}
        };
        

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleProfileSubmit = this.handleProfileSubmit.bind(this);
        this.handleTechnologiesSubmit = this.handleTechnologiesSubmit.bind(this);
        this.handleDeleteTechnology = this.handleDeleteTechnology.bind(this);
    }

    componentDidMount() {
        Promise.all([this.props.fetchPersonalInfo(1), this.props.fetchTechnologies(1),
                     this.props.fetchExperiences(1), this.props.fetchEducations(1),
                     this.props.fetchProjects(1)])
                .then(values => {
                    values.forEach(value => {
                        const key = Object.keys(value.payload)[0];
                        this.setState({
                            [key]: value.payload[key]
                        });
                    })
                    this.props.finishLoading();
                })
                .catch(err => {
                    console.log(err);
                });
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
            technologies: newTechnologies
        });
    }

    handleDeleteTechnology(e) {
        e.preventDefault();
        const technologyName = e.target.parentNode.innerText.slice(0, -4);
        const newTechnologies = this.state.technologies.filter(technology => technology !== technologyName);
        this.setState({technologies: newTechnologies});
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
            <div id="main" className="column-1 profile">
                <section id="user-info" className="boxy-boy">
                    <h4>Personal Info</h4>
                    <form onSubmit={this.handleProfileSubmit}>
                        <input type="text" value={this.state.personalInfo.name} placeholder="Name" onChange={this.handleUpdate('name')} />
                        <input type="text" value={this.state.personalInfo.phone} placeholder="Phone" onChange={this.handleUpdate('phone')} />
                        <input type="text" value={this.state.personalInfo.email} placeholder="Email" onChange={this.handleUpdate('email')} />
                        <input type="text" value={this.state.personalInfo.personalSite} placeholder="Personal Site" onChange={this.handleUpdate('personalSite')} />
                        <input type="text" value={this.state.personalInfo.address} placeholder="Address" onChange={this.handleUpdate('address')} />
                        <textarea value={this.state.personalInfo.objective} placeholder="Objective" onChange={this.handleUpdate('objective')} />
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
                        {Object.keys(this.state.technologies).map(technology => {
                            const currentTechnology = this.state.technologies[technology].name;
                            return (
                                <li key={currentTechnology}>{currentTechnology}<p className='trash' onClick={this.handleDeleteTechnology}>🗑</p></li>
                            );
                        })}
                    </ul>
                </section>
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
                                <div key={ companyName }>
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
                <section id="user-education" className="boxy-boy">
                    <h4>Education</h4>
                    <form onSubmit={this.handleEducationSubmit}>
                        <input type="text" value={this.state.experience} placeholder="Add New School" onChange={() => this.handleUpdate('education')} />
                        <input type="submit" value="Submit" />
                    </form>

                    <div>
                        {Object.keys(this.state.educations).map(schoolName => {
                            const education = this.state.educations[schoolName];
                            return (
                                <div key={schoolName}>
                                    <h3>{education.school} <p className='edit'>✏️</p> <p className='trash'>🗑</p></h3>
                                    <div>{education.year} <p className='edit'>✏️</p></div>
                                    <i>{education.concentration}</i> <p className='edit'>✏️</p>
                                </div>
                            );
                        })}
                    </div>
                </section>
                <section id="user-projects" className="boxy-boy">
                    <h4>Projects</h4>
                    <form onSubmit={this.handleProjectsSubmit}>
                        <input type="text" value={this.state.experience} placeholder="Add New Project" onChange={() => this.handleUpdate('experience')} />
                        <input type="submit" value="Submit" />
                    </form>

                    <div>
                        {Object.keys(this.state.projects).map(projectName => {
                            const project = this.state.projects[projectName];
                            return (
                                <div key={projectName}>
                                    <h3>{project.title} <p className='edit'>✏️</p> <p className='trash'>🗑</p></h3>
                                    <i>{project.description}</i> <p className='edthis.it'>✏️</p>
                                    <ul>
                                        {project.project_bullets.map(bullet => (
                                            <li key={bullet.id}>{bullet.body} <div className='delete-bullet'><p className='trash'>🗑</p><p className='edit'>✏️</p></div></li>
                                        ))}
                                        <p>➕</p>
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        );
    }
}

import { connect } from 'react-redux';
import { finishLoading } from '../../actions/loading-actions';
import { fetchPersonalInfo, fetchTechnologies, fetchExperiences,
         fetchEducations, fetchProjects } from '../../actions/profile-actions';

const mapStateToProps = state => {
    const dummyProfile = {
        personalInfo: undefined,
        technologies: undefined,
        experiences: undefined,
        projects: undefined,
        educations: undefined
    }

    const profile = state.entities.profile ? state.entities.profile : dummyProfile;

    return { 
        personalInfo: profile.personalInfo ? profile.personalInfo.objective : {},
        technologies: profile.technologies ? profile.technologies : {},
        experiences: profile.experiences ? profile.experiences : {},
        projects: profile.projects ? profile.projects : {},
        educations: profile.educations ? profile.educations : {}
    };
};

const mapDispatchToProps = (dispatch) => ({
    finishLoading: () => dispatch(finishLoading()),
    deleteTechnology: () => console.log('delete beep boop'),
    fetchPersonalInfo: id => dispatch(fetchPersonalInfo(id)),
    fetchTechnologies: id => dispatch(fetchTechnologies(id)),
    fetchExperiences: id => dispatch(fetchExperiences(id)),
    fetchEducations: id => dispatch(fetchEducations(id)),
    fetchProjects: id => dispatch(fetchProjects(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);