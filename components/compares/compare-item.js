import React, { Component } from 'react';

export default class CompareItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="compare-item">
                <div className="row">
                    <div className="col-6 compare-item-left">
                        <div className="item-img">
                            <img src={this.props.compareData.imageUrl1} />
                        </div>
                        <div className="value">
                            <label className="d-block fw-bold">{this.props.compareData.name1}</label>
                            <span className="fs-8">Rs 7.59lakh</span>
                        </div>
                    </div>
                    <div className="col-6 compare-item-right">
                        <div className="item-img">
                            <img src={this.props.compareData.imageUrl2} />
                        </div>
                        <div className="value">
                            <label className="d-block fw-bold">{this.props.compareData.name2}</label>
                            <span className="fs-8">Rs 7.59lakh</span>
                        </div>
                    </div>
                </div>

                <div className="vs-image">
                    <img src="image/vs-orange.png" />
                </div>
            </div>
        )
    }
}

  