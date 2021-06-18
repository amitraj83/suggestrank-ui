import React from 'react'
import CompareForm from '../../components/compares/compare-form'
import FeaturesItem from '../../components/comparision_features/features_item'

export default class Compare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "make":props.makes,
                "comparisonFeatures":props.comparisonFeatures,
                "car1Data":{
                    "modelId":"", "carImage":"/image/default-car.png",  "make":"---", "model":"---", "year":"", "variant":"--- "
                },
                "car2Data":{
                    "modelId":"","carImage":"/image/default-car.png",  "make":"---", "model":"---", "year":"", "variant":"---"
                }
            }
        };
        this.car1SelectionHandler = this.car1SelectionHandler.bind(this);
        this.car2SelectionHandler = this.car2SelectionHandler.bind(this);
        this.compareCars = this.compareCars.bind(this);
    }

    componentDidMount() {
        this.setState({
            isMobile: window.innerWidth < 992 ? true : false
        })
    }

    async car1SelectionHandler(val){
        const res = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_HOST+"/api/v2/car/light-car/details?id="+val.target.value);
        const carData = await res.json();
        var newData = {...this.state.data}
        newData["car1Data"] = {"modelId":carData.id, 
        "carImage":"/images/"+carData.image,  "make":carData.make, 
        "model":carData.model, "year":carData.year, "variant":carData.variant}
        await this.setState({"data":newData})
    }

    async car2SelectionHandler(val){
        const res = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_HOST+"/api/v2/car/light-car/details?id="+val.target.value);
        const carData = await res.json();
        var newData = {...this.state.data}
        newData["car2Data"] = {"modelId":carData.id, 
        "carImage":"/images/"+carData.image,  "make":carData.make, 
        "model":carData.model, "year":carData.year, "variant":carData.variant}
        await this.setState({"data":newData})
    }

    compareCars() {
        alert(this.state.data.car1Data.modelId+" and "+this.state.data.car2Data.modelId);
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
                    <div id={key.displayName} className={`collapse ${isMobile ? "" : "show"}`}>
                        <div className="divider mb-1"></div>
                        {comparisonFeatures[key].map((item, index) =>
                            <FeaturesItem item={item} />
                        )}
                    </div>
                </div>
            )
            
        });
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
                                        <CompareForm make={this.state.data.make} 
                                        models={{}} 
                                        variants={[]} 
                                        action1={this.car1SelectionHandler} 
                                        action2={this.car2SelectionHandler}
                                        compare={this.compareCars} />
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
                                                    <label className="d-block fw-bold">{this.state.data.car1Data.make+" "+this.state.data.car1Data.model}</label>
                                                    <span className="fs-8">{this.state.data.car1Data.variant+" "+this.state.data.car1Data.year}</span>
                                                </div>
                                                {/* <div className="row value-details">
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
                                                </div> */}
                                            </div>
                                            <div className="col-6 compare-item-right">
                                                <div className="item-img mb-3">
                                                    <img src={this.state.data.car2Data.carImage} />
                                                </div>
                                                <div className="value mb-4">
                                                    <label className="d-block fw-bold">{this.state.data.car2Data.make+" "+this.state.data.car2Data.model}</label>
                                                    <span className="fs-8">{this.state.data.car2Data.variant+" "+this.state.data.car2Data.year}</span>
                                                </div>
                                                {/* <div className="row value-details">
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
                                                </div> */}
                                            </div>
                                        </div>

                                        <div className="vs-image">
                                            <img src="/image/vs.png" />
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

export async function getServerSideProps () {
    
    const features = await fetch(process.env.REACT_APP_API_HOST+"/api/v2/car/comparison-features");
    const featuresJSON = await features.json();

    const makesResponse = await fetch(process.env.REACT_APP_API_HOST+"/api/v2/car/makes");
    const makes = await makesResponse.json();

    return {
      props: { "comparisonFeatures":featuresJSON, "makes":makes}, // will be passed to the page component as props
    }
}