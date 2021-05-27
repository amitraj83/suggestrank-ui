import React from 'react'
import CompareForm from '../components/compares/compare-form'
import FeaturesItem from '../components/comparision_features/features_item'

export default class Compare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "make":["Audi", "BMW", "Honda", "Ford"],
                "models":{
                            "Audi":["A3", "A4", "A5"],
                            "BMW":["X5", "X6", "X7"],
                            "Ford":["Focus", "Fiesta"],
                        },
                "variants":["Diesel", "Petrol", "Electric"],
                "comparisonFeatures":{"Engine":["Engine Size", "Engine Bore", "Compression", "Cylinders", "Power"], "Dimensions":["Height", "Weight", "Length"] },
                "car1Data":{
                    "carImage":"https://suggestrank.com/images/8795e4a4.jpg", "name":"Honda CRV", "make":"Honda", "model":"CRV", "year":"2020"
                },
                "car2Data":{
                    "carImage":"https://suggestrank.com/images/honda-jazz-2017-2019-1519048567.5.jpg", "name":"Honda Jazz", "make":"Honda", "model":"Jazz", "year":"2019"
                }
            }
        };
    }

    componentDidMount() {
        this.setState({
            isMobile: window.innerWidth < 992 ? true : false
        })
    }

    render() {
        let isMobile = this.state.isMobile ;
        let comparisonFeatures = this.state.data.comparisonFeatures;
        let features_items = Object.keys(comparisonFeatures).map(function(key) {
            return (
                <div className="features-item-wrapper mb-1">
                    <div className="toggler clearfix" data-bs-toggle="collapse" href={`#${key}`} role="button" aria-expanded="false" aria-controls="collapseExample">
                        <h6 className="float-start">{key}</h6>
                        <i className="fal fa-chevron-down float-end"></i>
                    </div>
                    <div id={key} className={`collapse ${isMobile ? "" : "show"}`}>
                        <div className="divider mb-1"></div>
                        {comparisonFeatures[key].map((item, index) =>
                            <FeaturesItem item={item} />
                        )}
                    </div>
                </div>
            )
            
        });
        console.log(features_items);
        return (
            <div className="page-car section pt-2 page-wrapper">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="row">
                            <div className="col-lg-3">
                                {
                                    isMobile ? '' : <div className="features d-none d-lg-block mt-5 mb-4 p-3 bg-white">
                                                        <div className="section-title mb-4">
                                                            <h6>Comparision Features</h6>
                                                        </div>

                                                        <div className="features-items">
                                                            {features_items}
                                                        </div>
                                                    </div>
                                }
                                
                            </div>

                            <div className="col-lg-9">
                                <div className="right-panel pl-3">
                                    <div className="compare-wrapper mt-5 mb-4">
                                        <div className="p-4">
                                        <CompareForm make={this.state.data.make} models={this.state.data.models} variants={this.state.data.variants}/>
                                        </div>
                                    </div>

                                    {isMobile ? 
                                        <div className="features d-lg-none mt-5 mb-4 p-3 bg-white">
                                            <div className="clearfix" data-bs-toggle="collapse" href="#features-collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                <h6 className="mb-0 float-start">Comparision Features</h6>
                                                <i className="far fa-chevron-double-down float-end mt-1"></i>
                                            </div>

                                            <div className="features-items collapse mt-3" id="features-collapse">
                                                {features_items}
                                            </div>
                                        </div> : ''
                                    }

                                    

                                    <div className="compare-car mb-4 bg-white p-3 pt-5">
                                        <div className="row">
                                            <div className="col-6 compare-item-left">
                                                <div className="item-img mb-3">
                                                    <img src={this.state.data.car1Data.carImage} />
                                                </div>
                                                <div className="value mb-4">
                                                    <label className="d-block fw-bold">Kia Sonet</label>
                                                    <span className="fs-8">Rs 7.59lakh</span>
                                                </div>
                                                <div className="row value-details">
                                                    <div className="col-md-4 mb-2">
                                                        <div className="value">
                                                            <span className="fs-8">Make</span>
                                                            <label className="d-block fw-bold">{this.state.data.car1Data.make}</label>
                                                        </div>  
                                                    </div>
                                                    <div className="col-md-4 mb-2">
                                                        <div className="value">
                                                            <span className="fs-8">Model</span>
                                                            <label className="d-block fw-bold">{this.state.data.car1Data.model}</label>
                                                            <span className="fs-8">Varient</span>
                                                        </div>  
                                                    </div>
                                                    <div className="col-md-4 mb-2">
                                                        <div className="value">
                                                            <span className="fs-8">Year</span>
                                                            <label className="d-block fw-bold">{this.state.data.car1Data.year}</label>
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 compare-item-right">
                                                <div className="item-img mb-3">
                                                    <img src={this.state.data.car2Data.carImage} />
                                                </div>
                                                <div className="value mb-4">
                                                    <label className="d-block fw-bold">Kia Sonet</label>
                                                    <span className="fs-8">Rs 7.59lakh</span>
                                                </div>
                                                <div className="row value-details">
                                                    <div className="col-md-4 mb-2">
                                                        <div className="value">
                                                            <span className="fs-8">Make</span>
                                                            <label className="d-block fw-bold">{this.state.data.car2Data.make}</label>
                                                        </div>  
                                                    </div>
                                                    <div className="col-md-4 mb-2">
                                                        <div className="value">
                                                            <span className="fs-8">Model</span>
                                                            <label className="d-block fw-bold">{this.state.data.car2Data.model}</label>
                                                            <span className="fs-8">Varient</span>
                                                        </div>  
                                                    </div>
                                                    <div className="col-md-4 mb-2">
                                                        <div className="value">
                                                            <span className="fs-8">Year</span>
                                                            <label className="d-block fw-bold">{this.state.data.car2Data.year}</label>
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="vs-image">
                                            <img src="image/vs.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}