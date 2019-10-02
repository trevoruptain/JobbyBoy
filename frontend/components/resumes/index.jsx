import React from 'react';
import { connect } from 'react-redux';

import { fetchResumes } from '../../actions/resume-actions';

class Resumes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            jobURI: '',
            jobDescription: '',
            primaryColor: '',
            secondaryColor: '',
            font: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
        this.props.fetchResumes();
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    handleUpdate(name) {
        return (e) => {
            e.preventDefault();
            this.setState({[name]: e.target.value})
        }
    }

    render() {
        const resumes = this.props.resumes.map(resume => {
            return (
                <div className='resume'>
                    <h2>{resume.title}</h2>
                    <p>Primary Color: { resume.primaryColor }</p>
                    <p>Secondary Color: { resume.secondaryColor }</p>
                </div>
            );
        })

        return (
            <div id="main">
                <section id="resume-create">
                    <form onSubmit={ this.handleSubmit }>
                        <h4>Generate New Resume</h4>
                        <input type="text" value={this.state.name} placeholder="Your Name" onChange={this.handleUpdate('name')}/>
                        <input type="text" value={this.state.jobURI} placeholder="Job URL" onChange={this.handleUpdate('jobURI')}/>
                        <textarea value={this.state.jobDescription} placeholder="Job Description" onChange={this.handleUpdate('jobDescription')}/>
                        <input type="text" value={this.state.primaryColor} placeholder="Primary Color" onChange={this.handleUpdate('primaryColor')}/>
                        <input type="text" value={this.state.secondaryColor} placeholder="Secondary Color" onChange={this.handleUpdate('secondaryColor')}/>
                        <input type="text" value={this.state.font} placeholder="Font" onChange={this.handleUpdate('font')}/>
                        <input type="submit" value="Submit"/>
                    </form>
                </section>
                <section id="resume-index">
                    { resumes }
                </section>
            </div>
        );  
    }
}

const mapStateToProps = state => {
    return {
        resumes: Object.values(state.entities.resumes)
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchResumes: () => dispatch(fetchResumes())
});

export default connect(mapStateToProps, mapDispatchToProps)(Resumes);