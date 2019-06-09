import React from 'react';

import { connect } from "react-redux";

let id = 0

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
        if (content) {
            ++id;
            this.props.actionSubmit({ id, content });
            this.setState({ content: "" });
        }
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

export default connect()(TweetForm)