import React, { Component } from "react";

export default class CardDescription extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="compare-desc p-3 bg-white">
                <h6 className="text-center fw-bold">{this.props.title}</h6>
                <p className="fs-7">
                    {this.props.content}
                </p>
            </div>
        );
    }
}
