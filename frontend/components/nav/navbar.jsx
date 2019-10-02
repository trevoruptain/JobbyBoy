import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import wobble from '../../util/wobble_util';

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

    componentDidMount() {
        wobble();
    }

    render() {
        const links = this.props.currentUser ? userLinks() : sessionLinks();

        return (
            <nav>
                <h1>
                    <Link to="/" id="logo">
                        <ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);