import React from 'react';

import exampleRequest from '../../util/example_request';

class API extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            key: 'yvweLwd1Q03gQv92rorEWgyx8tDEZFOc',
        }

        this.generateApiKey = this.generateApiKey.bind(this);
    }

    componentDidMount() {
        this.props.finishLoading();
    }

    generateApiKey() {
        this.setState({ key: '781v1wwenJxbUgF0EYyHzWmenvbmnuCZ' })
    }

    render() {
        return (
            <div id="main" className="column-1 api">
                <section id="api-generate">
                    <h2>API Key</h2>
                    <form onSubmit={ this.generateApiKey }>
                        <input type="submit" value="Generate New Key"/>
                        <input type="text" value={ this.state.key }/>
                    </form>
                </section>
                <section id="api-instructions">
                    <h2>Example Request</h2>
                    <i>All fields are required</i>
                    <textarea name="example-request">{ exampleRequest }</textarea>
                </section>
            </div>
        );
    }
}

import { connect } from 'react-redux';
import { finishLoading } from '../../actions/loading-actions';

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = (dispatch) => ({
    finishLoading: () => dispatch(finishLoading())
});

export default connect(mapStateToProps, mapDispatchToProps)(API);