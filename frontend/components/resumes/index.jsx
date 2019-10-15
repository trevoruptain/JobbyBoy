import React from 'react';
import { connect } from 'react-redux';

import Up from '../nav/up';

import { finishLoading } from '../../actions/loading-actions';
import { fetchResumes } from '../../actions/resume-actions';

class Resumes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jobTitle: '',
            jobURL: '',
            jobDescription: '',
            primaryColor: '',
            secondaryColor: '',
            font: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
        this.props.fetchResumes().then(() => {
            this.props.finishLoading();
        })
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    handleUpdate(name) {
        return (e) => {
            e.preventDefault();
            this.setState({ [name]: e.target.value })
        }
    }

    render() {
        const resumes = this.props.resumes.map(resume => {
            return (
                <div key={resume.id} className='resume'>
                    <div className='resume-left'>
                        <div>
                            <div className='color' style={{ backgroundColor: resume.primary_color }}></div>
                            <div className='color' style={{ backgroundColor: resume.secondary_color }}></div>
                        </div>
                        <h2 style={{ fontFamily: resume.font }}>{resume.title}</h2>
                        <p>{resume.description.slice(0, 150).concat('...')}</p>
                    </div>
                    <div className='resume-right'>
                        <a href={resume.url} target='blank'>🔗</a>
                        <div>⬇️</div>
                    </div>
                </div>
            );
        })

        return (
            <div id="main" className='column-2'>
                <section id="resume-create">
                    <form onSubmit={this.handleSubmit}>
                        <h4>Generate New Resume</h4>
                        <input type="text" value={this.state.name} placeholder="Job Title" onChange={this.handleUpdate('title')} />
                        <input type="text" value={this.state.jobURL} placeholder="Job URL" onChange={this.handleUpdate('jobURL')} />
                        <textarea value={this.state.jobDescription} placeholder="Job Description" onChange={this.handleUpdate('jobDescription')} />
                        <input type="text" value={this.state.primaryColor} placeholder="Primary Color" onChange={this.handleUpdate('primaryColor')} />
                        <input type="text" value={this.state.secondaryColor} placeholder="Secondary Color" onChange={this.handleUpdate('secondaryColor')} />
                        <input type="text" value={this.state.font} placeholder="Font" onChange={this.handleUpdate('font')} />
                        <input type="submit" value="Submit" />
                    </form>
                </section>
                <section id="resume-index">
                    {resumes}
                </section>
                <Up bottom={'30px'} left={'50px'} />
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
    fetchResumes: () => dispatch(fetchResumes()),
    finishLoading: () => dispatch(finishLoading())
});

export default connect(mapStateToProps, mapDispatchToProps)(Resumes);