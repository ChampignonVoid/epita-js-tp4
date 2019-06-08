import React from 'react';

import { connect } from "react-redux";
import { addTweet } from '../actions/index'

let id = 0

function mapDispatchToProps(dispatch) {
    return {
        addTweet: article => dispatch(addTweet(article))
    };
}

class TweetForm extends React.Component {
    constructor() {
        super();
        this.state = {
          content: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ content : event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const content = this.state.content;
        ++id;
        this.props.addTweet({ id, content });
        this.setState({ content: "" });
    }

    render() {
        return  <form onSubmit={this.handleSubmit}>
                    <div className = "form-group">
                        <input
                            type = "text"
                            className = "form-control"
                            value={this.state.content}
                            onChange={(e) => this.handleChange(e)}
                        />
                        <button type="submit"
                                className="btn btn-success btn-lg">Send tweet</button>
                    </div>
                </form>
    }
}

export default connect(null, mapDispatchToProps)(TweetForm)