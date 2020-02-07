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
        Promise.all([this.props.fetchTechnologies(1),
                     this.props.fetchExperiences(1), 
                     this.props.fetchEducations(1),
                     this.props.fetchProjects(1)
                    ])
                .then(() => this.props.finishLoading())
                .catch(err => {
                    console.log(err);
                });
    }

    render() {
        return (
            <div id="main" className="column-1 profile">
                <PersonalInfo />
                <Technologies />
                <Educations />
                <Experiences />
                <Projects />
            </div>
        );
    }
}

import { connect } from 'react-redux';
import { finishLoading } from '../../actions/loading-actions';
import { fetchTechnologies, 
         fetchExperiences,
         fetchEducations, 
         fetchProjects} from '../../actions/profile/profile-actions';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = (dispatch) => ({
    finishLoading: () => dispatch(finishLoading()),
    fetchTechnologies: id => dispatch(fetchTechnologies(id)),
    fetchExperiences: id => dispatch(fetchExperiences(id)),
    fetchEducations: id => dispatch(fetchEducations(id)),
    fetchProjects: id => dispatch(fetchProjects(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);