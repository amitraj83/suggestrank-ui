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
                            <img src={"/images/"+this.props.compareData.car1Image} />
                        </div>
                        <div className="value">
                            <label className="d-block fw-bold">{(this.props.compareData.car1Make +" "+this.props.compareData.car1Model).replace(/(.{17}).+/, "$1...")}</label>
                            <span className="fs-8">{this.props.compareData.car1Trim.replace(/(.{22}).+/, "$1...")}</span>
                        </div>
                    </div>
                    <div className="col-6 compare-item-right">
                        <div className="item-img">
                            <img src={"/images/"+this.props.compareData.car2Image} />
                        </div>
                        <div className="value">
                            <label className="d-block fw-bold">{(this.props.compareData.car2Make +" "+this.props.compareData.car2Model).replace(/(.{17}).+/, "$1...")}</label>
                            <span className="fs-8">{this.props.compareData.car2Trim.replace(/(.{22}).+/, "$1...")}</span>
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

  