import React from 'react'

const Splash = () => {
    return (
        <div id="main">
            <section id="splash">
                <h1>Building a custom resume sucks</h1>
                <h2>JobbyBoy makes it hella easy</h2>
            </section>
            <section id="making-a-point">
                <div className="point"><img src="http://localhost:3000/resume-icon.png" /><p>Design a modular resume with your skills, experience, and education.</p></div>
                <div className="point"><img src="http://localhost:3000/swatch-icon.png" /><p>Customize resumes with your own colors, fonts, and templates.</p></div>
                <div className="point"><img src="http://localhost:3000/api-icon.png" /><p>Generate a unique resume for each job featuring your most relevant experience.</p></div>
            </section>
            <section id="example">
                <h3>Try it Out</h3>
                <h4>Choose a sample job description to see how JobbyBoy works</h4>
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
                        <div className='left'><h6>Skills</h6></div>
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
                    <div className='tags'></div>
                    <div className='description'></div>
                </div>

                <div className='clear'></div>
            </section>
        </div>
    )
}

export default Splash;