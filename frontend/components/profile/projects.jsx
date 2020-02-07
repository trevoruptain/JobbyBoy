import React from 'react';

class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: this.props.projects,
            project: ''
        }

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleProjectSubmit = this.handleProjectSubmit.bind(this);
    }

    handleUpdate(name) {
        return (e) => {
            e.preventDefault();
            this.setState({ personalInfo: { [name]: e.target.value } })
        };
    }

    handleProjectSubmit() {
        debugger;
    }

    render() {
        return (
            <section id="user-projects" className="boxy-boy">
                <h4>Projects</h4>
                <form onSubmit={this.handleProjectSubmit}>
                    <input type="text" value={this.state.experience} placeholder="Add New Project" onChange={() => this.handleUpdate('experience')} />
                    <input type="submit" value="Submit" />
                </form>

                <div>
                    {Object.keys(this.props.projects).map(projectName => {
                        const project = this.props.projects[projectName];
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
        );
    }
}

import { connect } from 'react-redux';
import { createProject,
         createProjectBullet,
         deleteProject,
         deleteProjectBullet,
         updateProject,
         updateProjectBullet } from '../../actions/profile/project_actions';

const mapStateToProps = state => {
    return {
        projects: state.entities.profile.projects
    };
};

const mapDispatchToProps = (dispatch) => ({
    createProject: project => dispatch(createProject(project)),
    createProjectBullet: bullet => dispatch(createProjectBullet(bullet)),
    deleteProject: id => dispatch(deleteProject(id)),
    deleteProjectBullet: id => dispatch(deleteProjectBullet(id)),
    updateProject: project => dispatch(updateProject(project)),
    updateProjectBullet: bullet => dispatch(updateProjectBullet(bullet))
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);