import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            phone: '',
            email: '',
            personalSite: '',
            address: '',
            objective: '',
            technology: '',
            technologies: ['React', 'Redux', 'JavaScript', 'Ruby', 'Rails', 'GraphQL', 'SQL', 'Responsive Design'],
            experience: '',
            experiences: {
                google: {
                    name: 'Google',
                    dates: 'June 2020 - July 2022',
                    description: 'Lorem ipsum solor dit amet consectitur.', 
                    bullets: ['Quis nostrud exercitation ullamco laboris nisi ut aliquip ex', 
                            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
                            'Excepteur sint occaecat cupidatat non proident']
                }
            },
            project: '',
            projects: {
                trevornote: {
                    name: 'Trevornote',
                    description: 'A note taking app built with Ruby, Rails, and React',
                    bullets: ['Lorem ipsum dolor sit amet', 
                              'Consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                              'Quis nostrud exercitation ullamco']
                }
            },
            education: '',
            educations: {
                universityOfWashington: {
                    school: 'University of Washington',
                    year: 2016,
                    degree: 'B.S. Oceanography'
                }
            }
        };

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleProfileSubmit = this.handleProfileSubmit.bind(this);
        this.handleTechnologiesSubmit = this.handleTechnologiesSubmit.bind(this);
        this.handleDeleteTechnology = this.handleDeleteTechnology.bind(this);
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
        debugger;
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
                        <input type="text" value={this.state.name} placeholder="Name" onChange={this.handleUpdate('name')} />
                        <input type="text" value={this.state.phone} placeholder="Phone" onChange={this.handleUpdate('phone')} />
                        <input type="text" value={this.state.email} placeholder="Email" onChange={this.handleUpdate('email')} />
                        <input type="text" value={this.state.personalSite} placeholder="Personal Site" onChange={this.handleUpdate('personalSite')} />
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
                                <li key={technology}>{technology}<p className='trash' onClick={this.handleDeleteTechnology}>🗑</p></li>
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
                                    <h3>{experience.name} <p className='edit'>✏️</p> <p className='trash'>🗑</p></h3>
                                    <div>{experience.dates} <p className='edit'>✏️</p></div>
                                    <i>{experience.description}</i> <p className='edit'>✏️</p>
                                    <ul>
                                        {experience.bullets.map(bullet => (
                                            <li key={bullet}>{bullet} <div className='delete-bullet'><p className='trash'>🗑</p><p className='edit'>✏️</p></div></li>
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
                                    <i>{education.degree}</i> <p className='edit'>✏️</p>
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
                                    <h3>{project.name} <p className='edit'>✏️</p> <p className='trash'>🗑</p></h3>
                                    <i>{project.description}</i> <p className='edit'>✏️</p>
                                    <ul>
                                        {project.bullets.map(bullet => (
                                            <li key={bullet}>{bullet} <div className='delete-bullet'><p className='trash'>🗑</p><p className='edit'>✏️</p></div></li>
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

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = (dispatch) => ({
    finishLoading: () => dispatch(finishLoading()),
    deleteTechnology: () => console.log('delete beep boop'),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);