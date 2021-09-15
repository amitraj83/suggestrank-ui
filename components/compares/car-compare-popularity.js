import React, { Component } from 'react';
import ProgressBar from '../basic/progressbar'
export default class CompareCarPopularity extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

render() {
    return (<div >
    
    
    <div className="popularity-wrapper mt-3">
            <div className="title mb-3">
                <picture>
                <source srcSet={require('../../public/image/popularity.png?webp')} type='image/webp' />
                <source srcSet={require('../../public/image/popularity.png')} type='image/png' />
                <img src={require('../../public/image/popularity.png')} />
                </picture>
                <span className="fw-bold fs-6 text-uppercase">popularity</span>
            </div>
            {this.props.data.threecars
            ?
            <div className="row detail">
                <div className="col-4 right">
                    <div className="row">
                        
                        <div className="col-md-12 col-12 mt-1">
                            <ProgressBar percent={this.props.data.carsData[0].popularity}/>
                            <div className="fw-bold number">{this.props.data.carsData[0].popularity+" %"}</div>
                            {/* <p className="d-none d-md-block text-end fs-8">
                                Integer eget sem non augue euismod rhoncus eu eu sem. In volutpat 
                                suscipit est ac malesuada.
                            </p> */}
                        </div>
                    </div>
                </div>
                <div className="col-4 ">
                    <div className="row">
                        <div className="col-md-12 col-12 mt-1">
                            <ProgressBar percent={this.props.data.carsData[1].popularity}/>
                            <div className="fw-bold number">{this.props.data.carsData[1].popularity+" %"}</div>
                            {/* <p className="d-none d-md-block text-start fs-8">
                                Integer eget sem non augue euismod rhoncus eu eu sem. In volutpat 
                                suscipit est ac malesuada.
                            </p> */}
                        </div>
                        
                    </div>
                </div>
                <div className="col-4 right_alternate">
                    <div className="row">
                        <div className="col-md-12 col-12 mt-1">
                            <ProgressBar percent={this.props.data.carsData[2].popularity}/>
                            <div className="fw-bold number">{this.props.data.carsData[2].popularity+" %"}</div>
                            {/* <p className="d-none d-md-block text-start fs-8">
                                Integer eget sem non augue euismod rhoncus eu eu sem. In volutpat 
                                suscipit est ac malesuada.
                            </p> */}
                        </div>
                        
                    </div>
                </div>
            </div>
            :
            <div className="row detail">
                <div className="col-6 left">
                    <div className="row">
                        
                        <div className="col-md-12 col-12 mt-1">
                            <ProgressBar percent={this.props.data.carsData[0].popularity}/>
                            <div className="fw-bold number">{this.props.data.carsData[0].popularity+" %"}</div>
                            {/* <p className="d-none d-md-block text-end fs-8">
                                Integer eget sem non augue euismod rhoncus eu eu sem. In volutpat 
                                suscipit est ac malesuada.
                            </p> */}
                        </div>
                    </div>
                </div>
                <div className="col-6 right">
                    <div className="row">
                        <div className="col-md-12 col-12 mt-1">
                            <ProgressBar percent={this.props.data.carsData[1].popularity}/>
                            <div className="fw-bold number">{this.props.data.carsData[1].popularity+" %"}</div>
                            {/* <p className="d-none d-md-block text-start fs-8">
                                Integer eget sem non augue euismod rhoncus eu eu sem. In volutpat 
                                suscipit est ac malesuada.
                            </p> */}
                        </div>
                        
                    </div>
                </div>
            </div>
            }
        </div>
    
</div>)
}
}