import React, { Component } from 'react';

export default class CompareForm extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            make: props.make,
            models: props.models,
            variants: props.variants,
            car1Models: [],
            car2Models: []
        }

        this.changeCar1Make = this.changeCar1Make.bind(this);
        this.changeCar2Make = this.changeCar2Make.bind(this);
    }

    changeCar1Make(event) {
        console.log(event.target.value);

        let val = event.target.value;

        if (this.state.models[val]) {
            this.setState({
                car1Models: this.state.models[val]
            })
        } else {
            this.setState({
                car1Models: []
            })
        }
    }

    changeCar2Make(event) {
        let val = event.target.value;

        if (this.state.models[val]) {
            this.setState({
                car2Models: this.state.models[val]
            })
        } else {
            this.setState({
                car2Models: []
            })
        }
    }

    render() {
        return (
            <div>
                <div className="top-txt">
                    <h4 className="fw-bold mb-0">Select any two cars to compare</h4>
                    <span className="">Our car comparison tool helps you with clear difference between your chosen cars.</span>
                    <div className="btn-wrapper d-lg-inline-block d-none">
                        <button className="btn-compare reverse">Compare</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-6 mt-3">
                                <select onChange={this.changeCar1Make} className="form-select form-select-sm">
                                    <option>Make</option>
                                    {this.state.make&&this.state.make.map((item, index) =>
                                        <option value={item} key={index}>{item}</option>
                                    )}
                                </select>
                            </div>
                            <div className="col-6 mt-3">
                                <select className="form-select form-select-sm">
                                    <option>Model</option>
                                    {this.state.car1Models&&this.state.car1Models.map((item, index) =>
                                        <option value={item} key={index}>{item}</option>
                                    )}
                                </select>
                            </div>
                            <div className="col-12 mt-3">
                                <select className="form-select form-select-sm">
                                    <option>Variant</option>
                                    {this.state.variants&&this.state.variants.map((item, index) =>
                                        <option value={item} key={index}>{item}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 img-vs-wrapper mt-3">
                        <img className="" src="image/vs.png"/>
                    </div>
                    <div className="col-md-5">
                        <div className="row">
                            <div className="col-6 mt-3">
                                <select onChange={this.changeCar2Make} className="form-select form-select-sm">
                                    <option>Make</option>
                                    {this.state.make&&this.state.make.map((item, index) =>
                                        <option value={item} key={index}>{item}</option>
                                    )}
                                </select>
                            </div>
                            <div className="col-6 mt-3">
                                <select className="form-select form-select-sm">
                                    <option>Model</option>
                                    {this.state.car2Models&&this.state.car2Models.map((item, index) =>
                                        <option value={item} key={index}>{item}</option>
                                    )}
                                </select>
                            </div>
                            <div className="col-12 mt-3">
                                <select className="form-select form-select-sm">
                                    <option>Variant</option>
                                    {this.state.variants&&this.state.variants.map((item, index) =>
                                        <option value={item} key={index}>{item}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="btn-wrapper d-lg-none mt-3">
                    <button className="btn-compare reverse w100">Compare</button>
                </div>
            </div>
        )
    }
}