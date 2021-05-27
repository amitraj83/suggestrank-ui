import React, { Component } from "react";

export default class ProgressBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="progress">
                <div class="progress-bar" role="progressbar"  style={{ width: this.props.percent + '%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        );
    }
}
