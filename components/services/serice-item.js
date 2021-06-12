import React, { Component } from 'react';

export default class ServiceItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={`service-item card ${this.props.reverse ? "reverse" : ""}`}>
                <div className="card-body">
                    <div className="service-item-title">
                        <i className="fas fa-cogs"></i>
                        <label>{this.props.data.title}</label>
                    </div>
                    <div className="service-item-content">
                        <p className="fs-8 mb-0">{this.props.data.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}