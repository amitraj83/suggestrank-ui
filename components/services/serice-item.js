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
                        <label>Service Item</label>
                    </div>
                    <div className="service-item-content">
                        <p className="fs-8 mb-0">Mauris at lacus eu arcu varius vulputate. Etiam 
                            eleifend porta magna vitae imperdiet. Cras 
                            vestibulum cursus odio tincidunt faucibus. 
                            Praesent dapibus posuere leo. Quisque iaculis 
                            condimentum lorem vitae imperdiet.</p>
                    </div>
                </div>
            </div>
        )
    }
}