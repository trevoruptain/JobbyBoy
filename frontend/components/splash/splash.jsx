import React from 'react';
import ReactDOMServer from 'react-dom/server';

import jobDescriptions from '../../data/job-description-samples';
import topTenSkills from '../../util/sort_util';

class Splash extends React.Component {
    constructor(props) {
        super(props);

        const amazonJobDescription = jobDescriptions['amazon'];
        const parsedDesc = ReactDOMServer.renderToStaticMarkup(amazonJobDescription);

        this.state = {
            current: amazonJobDescription,
            skills: topTenSkills(parsedDesc)
        }

        this.updateCurrent = this.updateCurrent.bind(this);
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

    render() {
        return (
            <div id="main">
                <section id="splash">
                    <h1>Building a custom resume is tedious.</h1>
                    <h2>JobbyBoy makes it hella easy.</h2>
                </section>
                <section id="making-a-point">
                    <div className="point"><img src="http://localhost:3000/resume-icon.png" /><p>Design a modular resume with your skills, experience, and education.</p></div>
                    <div className="point"><img src="http://localhost:3000/swatch-icon.png" /><p>Customize resumes with your own colors, fonts, and templates.</p></div>
                    <div className="point"><img src="http://localhost:3000/api-icon.png" /><p>Generate a unique resume for each job featuring your most relevant experience.</p></div>
                </section>
                <section id="example">
                    <h3>It's free real estate!</h3>
                    <h4>Choose a sample job description to see how JobbyBoy works.</h4>
                    <div id="resume">
                        <div className='top-bar'>
                            <h5>John Doe</h5>
                            <h6>Project Manager</h6>
                            <ul>
                                <li>123.456.7890</li>
                                <li>johndoe@johndoe.com</li>
                                <li>123 Main St, Anytown, USA, 99999</li>
                            </ul>
                        </div>
                        <div className='container'>
                            <div className='left'>
                                <h6>Skills</h6>
                                <ul>
                                    {this.state.skills.map(skill => {
                                        return <li key={skill}>{skill}</li>;
                                    })}
                                </ul>

                                <h6 className='objective-header'>Objective</h6>
                                <p className='objective'>I am a motivated, experienced, and driven sales and software engineer seeking to expand his career. My objective is to work for a growing company with no opportunity for advancement.</p>
                            </div>
                            <div className='right'>
                                <h6>Professional Experience</h6>
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

                    <div className='clear'></div>
                </section>
                <section id='footer'>

                </section>
            </div>
        )
    }
}

export default Splash;