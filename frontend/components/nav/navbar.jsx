import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const userLinks = () => (
    <ul>
        <li><Link to="/resumes">Resumes</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/api">API</Link></li>
        <li><Link to="/extension" className="button">Extension</Link></li>
    </ul>
)

const sessionLinks = () => (
    <Link to="/auth/google_oauth2"><div id="login"></div></Link>
)

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const links = this.props.currentUser ? userLinks() : sessionLinks();

        return (
            <nav>
                <img src="http://localhost:3000/jobby-boy-logo-new.png" alt="Jobby Boy Logo" />
                {links}
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
    currentUser: state.session.currentUser
}};

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);