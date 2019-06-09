import React from 'react';

import { connect } from "react-redux";

let id = 0

class TweetForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const content = document.getElementById('input-tweet').value;
        if (content) {
            ++id;
            this.props.actionSubmit({ id, content });
            document.getElementById('input-tweet').value = ""
        }
    }

    render() {
        return  <form onSubmit={this.handleSubmit}>
                    <div className = "form-group">
                        <input
                            id="input-tweet"
                            type = "text"
                            className = "form-control"
                        />
                        <button type="submit"
                                className="btn btn-success btn-lg">Send tweet</button>
                    </div>
                </form>
    }
}

export default connect()(TweetForm)