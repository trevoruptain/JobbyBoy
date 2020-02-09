import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { finishLoading } from '../../actions/loading-actions';

import jobDescriptions from '../../data/job-description-samples';
import topTenSkills from '../../util/sort_util';

class Splash extends React.Component {
    constructor(props) {
        super(props);

        const amazonJobDescription = jobDescriptions['amazon'];
        const parsedDesc = ReactDOMServer.renderToStaticMarkup(amazonJobDescription);

        this.state = {
            current: amazonJobDescription,
            skills: topTenSkills(parsedDesc),
            color: 'goldenrod'
        }

        this.updateCurrent = this.updateCurrent.bind(this);
        this.updateColor = this.updateColor.bind(this);
    }


    componentDidMount() {
        this.props.finishLoading();
    }

    updateCurrent(e) {
        const prevDesc = document.getElementsByClassName('selected')[0];
        const nextDesc = document.getElementById(e.target.id);

        prevDesc.classList.remove('selected');
        nextDesc.classList.add('selected');

        const nextJobDescription = jobDescriptions[e.target.id];
        const parsedDesc = ReactDOMServer.renderToStaticMarkup(nextJobDescription);

        this.setState({
            current: nextJobDescription,
            skills: topTenSkills(parsedDesc)
        });

        const description = document.getElementsByClassName('description')[0];
        description.scrollTop = 0;
    }

    updateColor(e) {
        this.setState({color: e.target.id})
    }

    render() {
        return (
            <div id="main">
                <section id="splash">
                    <h1>Building a custom resume is tedious</h1>
                    <h2>JobbyBoy makes it hella 🔥 easy 👏</h2>
                </section>
                <section id="making-a-point">
                    <div className="point"><img src={window.icon1} /><p>Design a modular resume with your skills, experience, and education 🎓.</p></div>
                    <div className="point"><img src={window.icon2} /><p>Customize resumes with your choice of colors 🌈, fonts, and templates.</p></div>
                    <div className="point"><img src={window.icon3} /><p>Generate a unique resume for each job 💼 featuring your most relevant experience.</p></div>
                </section>
                <section id="example">
                    <h3>It's free real estate!</h3>
                    <h4>Choose a sample job description to get a taste 👅 of JobbyBoy</h4>
                    <div id="resume">
                        <div className='top-bar'>
                            <h5 style={{ color: this.state.color }}>Luke Skywalker</h5>
                            <h6>Jedi Knight</h6>
                            <ul>
                                <li>123.456.7890</li>
                                <li>lukeyboy@skywalker.com</li>
                                <li>123 Wookie St, Sabertown, Tatooine, 99999</li>
                            </ul>
                        </div>
                        <div className='container'>
                            <div className='left'>
                                <h6 style={{color: this.state.color}}>Skills</h6>
                                <ul>
                                    {this.state.skills.map(skill => {
                                        return <li key={skill}>{skill}</li>;
                                    })}
                                </ul>

                                <h6 className='objective-header' style={{ textShadow: `0 0 5px ${this.state.color}` }}>Objective</h6>
                                <p className='objective'>I am a motivated, experienced, and driven sales and software engineer seeking to expand his career. My objective is to work for a growing company with no opportunity for advancement.</p>
                            </div>
                            <div className='right'>
                                <h6 style={{textShadow: `0 0 5px ${this.state.color}`}}>Professional Experience</h6>
                                <p><b>Job Title</b></p>
                                <p>Company Name</p>
                                <p><i>July 1991 - Present</i></p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</li>
                                    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                                </ul>

                                <p><b>Job Title</b></p>
                                <p>Company Name</p>
                                <p><i>August 1965 - July 1991</i></p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</li>
                                    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='boxen'>
                        <div id='amazon' className='option selected' onClick={this.updateCurrent}>Amazon</div>
                        <div id='google' className='option' onClick={this.updateCurrent}>Google</div>
                        <div id='microsoft' className='option' onClick={this.updateCurrent}>Microsoft</div>
                        {this.state.current}
                    </div>

                    <div id="color-wheel">
                        <div id='goldenrod' onClick={this.updateColor}></div>
                        <div id='cadetblue' onClick={this.updateColor}></div>
                        <div id='indianred' onClick={this.updateColor}></div>
                    </div>

                    <div className='clear'></div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch) => ({
    finishLoading: () => dispatch(finishLoading())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Splash));