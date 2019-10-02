import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import wobble from '../../util/wobble_util';

const userLinks = (linkColor) => (
    <ul>
        <li><Link to="/resumes" className={linkColor}>Resumes</Link></li>
        <li><Link to="/profile" className={linkColor}>Profile</Link></li>
        <li><Link to="/api" className={linkColor}>API</Link></li>
        <li><Link to="/extension" className={`button ${linkColor}`}>Extension</Link></li>
    </ul>
)

const sessionLinks = () => (
    <Link to="/auth/google_oauth2"><div id="login"></div></Link>
)

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        wobble();
    }

    render() {
        const linkColor = this.props.location.pathname === '/' ? 'white' : 'black';
        const links = this.props.currentUser ? userLinks(linkColor) : sessionLinks();

        return (
            <nav>
                <h1>
                    <Link to="/" id="logo">
                        <ul className={linkColor}>
                            <li>J</li>
                            <li>⚙️</li>
                            <li>b</li>
                            <li>b</li>
                            <li>y</li>
                            <li>B</li>
                            <li>👦🏻</li>
                            <li>y</li>
                        </ul>
                    </Link>
                </h1>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));