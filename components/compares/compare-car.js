import React, { Component } from 'react';

export default class CompareResultCar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

render() {
    return (<div >
    <div className={"rank-wrapper "+(this.props.data.winner?"winner":"")+" mb-3 "}>
        <div className="rank d-inline-block text-center">
            <span className="d-block number fw-bold fs-5">{this.props.data.rank}</span>
            <span className="d-block fs-8 fw-bold">RANK</span>
        </div>
        {this.props.data.winner?
        <div className="winnder-item d-none d-lg-inline-block ms-3">
            <i class="far fa-thumbs-up me-1"></i>
            <span className="fs-8 fw-bold">WINNER</span>
        </div>:""}
    </div>

    <div className="item-img mb-3">
        <img src={this.props.data.image} />
    </div>
    <div className="value mb-4">
        <label className="d-block fw-bold">Kia Sonet</label>
        <span className="fs-8">Rs 7.59lakh</span>
    </div>
    <div className="row value-details">
        <div className="col-md-4 mb-2">
            <div className="value">
                <span className="fs-8">Make</span>
                <label className="d-block fw-bold">{this.props.data.make}</label>
            </div>  
        </div>
        <div className="col-md-4 mb-2">
            <div className="value">
                <span className="fs-8">Model</span>
                <label className="d-block fw-bold">{this.props.data.model}</label>
                <span className="fs-8">Varient</span>
            </div>  
        </div>
        <div className="col-md-4 mb-2">
            <div className="value">
                <span className="fs-8">Year</span>
                <label className="d-block fw-bold">{this.props.data.year}</label>
            </div> 
        </div>
    </div>
</div>)
}
}