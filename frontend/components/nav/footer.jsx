import React from 'react';

const Footer = () => {
    return (
        <section id="footer">
            <div>
                <h4>Navigation</h4>
                <ul>
                    <li><a href="/">Resumes</a></li>
                    <li><a href="/">Profile</a></li>
                    <li><a href="/">🅰️PI</a></li>
                    <li><a href="/">Extension</a></li>
                </ul>
            </div>
            <div>
                <h4>The Boring Stuff</h4>
                <ul>
                    <li><a href="/">Report a Bug 🐞</a></li>
                    <li><a href="/">Terms of Service</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                </ul>
            </div>
            <div>
                <h4>About</h4>
                <p>This app was made for YOU 🙌. Hack it, fork it, and make it your own ❤️.</p>
            </div>
        </section>
    );
}

export default Footer;