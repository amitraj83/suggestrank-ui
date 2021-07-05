import React, { Component } from 'react';
import Link from 'next/link'

export default class CompareForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            make: props.make,
            models: props.models,
            variants1: [],
            variants2: [],
            car1Models: [],
            car2Models: [],
            selectedMake1:"",
            selectedModel1:"",
            selectedMake2:"",
            selectedModel2:"",
            
        }

        this.changeCar1Make = this.changeCar1Make.bind(this);
        this.changeCar2Make = this.changeCar2Make.bind(this);

        this.changeCar1Model = this.changeCar1Model.bind(this);
        this.changeCar2Model = this.changeCar2Model.bind(this);

    }
    

    async changeCar1Model(event) {
        this.setState({
            variants1: []
        })
        let model = event.target.value;
        this.setState({selectedModel1: model})

        const res = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_HOST+"api/v2/car/variants?make="+this.state.selectedMake1+"&model="+model);
        const v = await res.json();
        
        this.setState({
            variants1: v
        })
        
    }

    async changeCar2Model(event) {
        this.setState({
            variants2: []
        })
        let model = event.target.value;
        this.setState({selectedModel2: model})

        const res = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_HOST+"api/v2/car/variants?make="+this.state.selectedMake2+"&model="+model);
        const v = await res.json();
        
        this.setState({
            variants2: v
        })
        
    }

    async changeCar1Make(event) {
        this.setState({
            car1Models: []
        })
        let val = event.target.value;
        this.setState({selectedMake1: val})

        const res = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_HOST+"api/v2/car/models?make="+val);
        const models = await res.json();
        
        this.setState({
            car1Models: models
        })
        
    }

    async changeCar2Make(event) {
        this.setState({
            car2Models: []
        })
        let val = event.target.value;
        this.setState({selectedMake2: val})

        const res = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_HOST+"api/v2/car/models?make="+val);
        const models = await res.json();
        
        this.setState({
            car2Models: models
        })
        
    }

  
    render() {
        return (
            <div>
                <div className="top-txt">
                    <h4 className="fw-bold mb-0">Select any two cars to compare</h4>
                    <span className="">Our car comparison tool helps you with clear difference between your chosen cars.</span>
                    <div className="btn-wrapper d-lg-inline-block d-none">
                    <Link href="/compare/cars"><button onClick={this.props.compare} className="btn-compare reverse">Compare</button></Link>
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
                                <select onChange={this.changeCar1Model} className="form-select form-select-sm">
                                    <option>Model</option>
                                    {this.state.car1Models&&this.state.car1Models.map((item, index) =>
                                        <option value={item} key={index}>{item}</option>
                                    )}
                                </select>
                            </div>
                            <div className="col-12 mt-3">
                                <select onChange={this.props.action1} className="form-select form-select-sm">
                                    <option>Variant</option>
                                    {this.state.variants1&&this.state.variants1.map(item =>
                                        <option value={item.value} key={item.value}>{item.label}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 img-vs-wrapper mt-3">
                        <img className="" src="/image/vs.png"/>
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
                                <select  onChange={this.changeCar2Model} className="form-select form-select-sm">
                                    <option>Model</option>
                                    {this.state.car2Models&&this.state.car2Models.map((item, index) =>
                                        <option value={item} key={index}>{item}</option>
                                    )}
                                </select>
                            </div>
                            <div className="col-12 mt-3">
                                <select onChange={this.props.action2} className="form-select form-select-sm">
                                    <option>Variant</option>
                                    {this.state.variants2&&this.state.variants2.map(item =>
                                        <option value={item.value} key={item.value}>{item.label}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="btn-wrapper d-lg-none mt-3">
                    <button  className="btn-compare reverse w100">Compare</button>
                </div>
            </div>
        )
    }
}