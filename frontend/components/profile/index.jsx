import React from 'react';

import PersonalInfo from './personal_info';
import Technologies from './technologies';
import Experiences from './experiences';
import Educations from './educations';
import Projects from './projects';

class Profile extends React.Component {
    constructor(props) {
        super(props);
         
        this.state = {
            personalInfo: {},
            technologies: {},
            experiences: {},
            projects: {},
            educations: {}
        };
    }

    componentDidMount() {
        Promise.all([this.props.fetchPersonalInfo(1),
                     this.props.fetchTechnologies(1),
                     this.props.fetchExperiences(1), 
                     this.props.fetchEducations(1),
                     this.props.fetchProjects(1)
                    ])
                .then(values => {
                    values.forEach(value => {
                        const key = Object.keys(value.payload)[0];

                        this.setState({
                            [key]: value.payload[key]
                        });
                    });

                    this.props.finishLoading();
                })
                .catch(err => {
                    console.log(err);
                });
    }

    render() {
        return (
            <div id="main" className="column-1 profile">
                <PersonalInfo personalInfo={this.state.personalInfo} />
                <Technologies technologies={this.state.technologies} />
                <Experiences experiences={this.state.experiences} />
                <Educations educations={this.state.educations} />
                <Projects projects={this.state.projects} />
            </div>
        );
    }
}

import { connect } from 'react-redux';
import { finishLoading } from '../../actions/loading-actions';
import { fetchPersonalInfo,
         fetchTechnologies, 
         fetchExperiences,
         fetchEducations, 
         fetchProjects} from '../../actions/profile-actions';

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
        personalInfo: profile.personalInfo,
        technologies: profile.technologies,
        experiences: profile.experiences,
        projects: profile.projects,
        educations: profile.educations
    };
};

const mapDispatchToProps = (dispatch) => ({
    finishLoading: () => dispatch(finishLoading()),
    fetchPersonalInfo: id => dispatch(fetchPersonalInfo(id)),
    fetchTechnologies: id => dispatch(fetchTechnologies(id)),
    fetchExperiences: id => dispatch(fetchExperiences(id)),
    fetchEducations: id => dispatch(fetchEducations(id)),
    fetchProjects: id => dispatch(fetchProjects(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);