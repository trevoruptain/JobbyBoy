import React from 'react';

class Educations extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            educations: this.props.educations,
            education: ''
        }

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleEducationSubmit = this.handleEducationSubmit.bind(this);
    }

    handleUpdate(name) {
        return (e) => {
            e.preventDefault();
            this.setState({ personalInfo: { [name]: e.target.value } })
        };
    }

    handleEducationSubmit() {
        debugger;
    }

    render() {
        return (
            <section id="user-educations" className="boxy-boy">
                <h4>Education</h4>
                <form onSubmit={this.handleEducationSubmit}>
                    <input type="text" value={this.state.experience} placeholder="Add New School" onChange={() => this.handleUpdate('education')} />
                    <input type="submit" value="Submit" />
                </form>

                <div>
                    {Object.keys(this.props.educations).map(schoolName => {
                        const education = this.props.educations[schoolName];
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
        );
    }
}

import { connect } from 'react-redux';
import { createEducation,
         deleteEducation,
         updateEducation } from '../../actions/profile/education_actions';

const mapStateToProps = state => {
    return {
        educations: state.entities.profile.educations
    };
};

const mapDispatchToProps = (dispatch) => ({
    createEducation: education => dispatch(createEducation(education)),
    deleteEducation: id => dispatch(deleteEducation(id)),
    updateEducation: education => dispatch(updateEducation(education))
});

export default connect(mapStateToProps, mapDispatchToProps)(Educations);