import React from 'react'
import FeaturesItem from '../components/comparision_features/features_item'
import FeaturesItemCompared from '../components/comparision_features/features_item_compared'
import CardDescription from '../components/basic/card_description'
import CompareItem from '../components/compares/compare-item'
import ComparedData from '../components/compares/compared_data'
import ProgressBar from '../components/basic/progressbar'

export default class Compared extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "desc1": {
                    "title": "Kia Sonet vs Tata Nexon - Comparision", 
                    "content": `Suspendisse scelerisque quis diam ut commodo. Maecenas efficitur mauris feugiat velit cursus ullamcorper. Proin tempor volutpat magna in pretium. Ut 
                                congue aliquam risus, eget auctor neque auctor et. Nam bibendum mi quis aliquam vehicula.Nulla facilisi. Suspendisse fringilla ipsum faucibus libero auctor 
                                mollis. Nam rhoncus odio metus, non tristique enim finibus quis. Aenean semper tempor urna quis feugiat. Suspendisse tortor tellus, laoreet ut urna ac, 
                                tempus dapibus nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`
                },
                "desc2": {
                    "title": "Kia Sonet vs Tata Nexon - Model Year", 
                    "content": `Suspendisse scelerisque quis diam ut commodo. Maecenas efficitur mauris feugiat velit cursus ullamcorper. Proin tempor volutpat magna in pretium. Ut 
                                congue aliquam risus, eget auctor neque auctor et. Nam bibendum mi quis aliquam vehicula.Nulla facilisi. Suspendisse fringilla ipsum faucibus libero auctor 
                                mollis. Nam rhoncus odio metus, non tristique enim finibus quis. Aenean semper tempor urna quis feugiat. Suspendisse tortor tellus, laoreet ut urna ac, 
                                tempus dapibus nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`
                },
                "desc3": {
                    "title": "Kia Sonet vs Tata Nexon - Engine size (cc)", 
                    "content": `Suspendisse scelerisque quis diam ut commodo. Maecenas efficitur mauris feugiat velit cursus ullamcorper. Proin tempor volutpat magna in pretium. Ut 
                                congue aliquam risus, eget auctor neque auctor et. Nam bibendum mi quis aliquam vehicula.Nulla facilisi. Suspendisse fringilla ipsum faucibus libero auctor 
                                mollis. Nam rhoncus odio metus, non tristique enim finibus quis. Aenean semper tempor urna quis feugiat. Suspendisse tortor tellus, laoreet ut urna ac, 
                                tempus dapibus nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`
                },
                "desc4": {
                    "title": "Kia Sonet vs Tata Nexon - Engine Cylinder", 
                    "content": `Suspendisse scelerisque quis diam ut commodo. Maecenas efficitur mauris feugiat velit cursus ullamcorper. Proin tempor volutpat magna in pretium. Ut 
                                congue aliquam risus, eget auctor neque auctor et. Nam bibendum mi quis aliquam vehicula.Nulla facilisi. Suspendisse fringilla ipsum faucibus libero auctor 
                                mollis. Nam rhoncus odio metus, non tristique enim finibus quis. Aenean semper tempor urna quis feugiat. Suspendisse tortor tellus, laoreet ut urna ac, 
                                tempus dapibus nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`
                },
                "desc5": {
                    "title": "Kia Sonet vs Tata Nexon - Engine power (rpm)", 
                    "content": `Suspendisse scelerisque quis diam ut commodo. Maecenas efficitur mauris feugiat velit cursus ullamcorper. Proin tempor volutpat magna in pretium. Ut 
                                congue aliquam risus, eget auctor neque auctor et. Nam bibendum mi quis aliquam vehicula.Nulla facilisi. Suspendisse fringilla ipsum faucibus libero auctor 
                                mollis. Nam rhoncus odio metus, non tristique enim finibus quis. Aenean semper tempor urna quis feugiat. Suspendisse tortor tellus, laoreet ut urna ac, 
                                tempus dapibus nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`
                },
                "desc6": {
                    "title": "Kia Sonet vs Tata Nexon - Engine Torque (rpm)", 
                    "content": `Suspendisse scelerisque quis diam ut commodo. Maecenas efficitur mauris feugiat velit cursus ullamcorper. Proin tempor volutpat magna in pretium. Ut 
                                congue aliquam risus, eget auctor neque auctor et. Nam bibendum mi quis aliquam vehicula.Nulla facilisi. Suspendisse fringilla ipsum faucibus libero auctor 
                                mollis. Nam rhoncus odio metus, non tristique enim finibus quis. Aenean semper tempor urna quis feugiat. Suspendisse tortor tellus, laoreet ut urna ac, 
                                tempus dapibus nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`
                },
                "desc7": {
                    "title": "Kia Sonet vs Tata Nexon - Seats", 
                    "content": `Suspendisse scelerisque quis diam ut commodo. Maecenas efficitur mauris feugiat velit cursus ullamcorper. Proin tempor volutpat magna in pretium. Ut 
                                congue aliquam risus, eget auctor neque auctor et. Nam bibendum mi quis aliquam vehicula.Nulla facilisi. Suspendisse fringilla ipsum faucibus libero auctor 
                                mollis. Nam rhoncus odio metus, non tristique enim finibus quis. Aenean semper tempor urna quis feugiat. Suspendisse tortor tellus, laoreet ut urna ac, 
                                tempus dapibus nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`
                },
                "desc8": {
                    "title": "Verdicts", 
                    "content": `Suspendisse scelerisque quis diam ut commodo. Maecenas efficitur mauris feugiat velit cursus ullamcorper. Proin tempor volutpat magna in pretium. Ut 
                                congue aliquam risus, eget auctor neque auctor et. Nam bibendum mi quis aliquam vehicula.Nulla facilisi. Suspendisse fringilla ipsum faucibus libero auctor 
                                mollis. Nam rhoncus odio metus, non tristique enim finibus quis. Aenean semper tempor urna quis feugiat. Suspendisse tortor tellus, laoreet ut urna ac, 
                                tempus dapibus nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`
                },

                "comparisonFeatures": {
                    "Engine": [
                        {"name": "Engine Size", "higher": true},
                        {"name": "Engine Bore", "higher": false},
                        {"name": "Compression", "higher": true},
                        {"name": "Cylinders", "higher": false},
                        {"name": "Power", "higher": true},
                    ], 
                    "Dimensions":[
                        {"name": "Height", "higher": true},
                        {"name": "Weight", "higher": false},
                        {"name": "Length", "higher": true}
                    ]
                },
                "car1Data":{
                    "carImage":"https://suggestrank.com/images/8795e4a4.jpg", "name":"Honda CRV", "make":"Honda", "model":"CRV", "year":"2020"
                },
                "car2Data":{
                    "carImage":"https://suggestrank.com/images/honda-jazz-2017-2019-1519048567.5.jpg", "name":"Honda Jazz", "make":"Honda", "model":"Jazz", "year":"2019"
                },
                "popularComparisons":[
                    {"imageUrl1":"https://suggestrank.com/images/mazda-atenza-2018-2019-1537376293.68.jpg", "name1":"Mazda Roadster", "variant1":"2.0 TDI","imageUrl2":"https://suggestrank.com/images/mazda-roadster-2015-2019-1520489007.03.jpg", "name2":"Mazda 6", "variant2":"2.0 iTDxz"},
                    {"imageUrl1":"https://suggestrank.com/images/audi-a3-2016-2018-1498129622.34.jpg", "name1":"Audi A6", "variant1":"2.0 TDI","imageUrl2":"https://suggestrank.com/images/audi-a4-2016-2017-1455205004.51.jpg", "name2":"Audi A3", "variant2":"2.0 iTDxz"},
                    {"imageUrl1":"https://suggestrank.com/images/daewoo-leganza-1997-2008-1469775082.98.jpg", "name1":"Daewoo - Nubira", "variant1":"2.0 TDI","imageUrl2":"https://suggestrank.com/images/daewoo-nubira-2002-2015-1470036230.57.jpg", "name2":"Daewoo - Leganza", "variant2":"2.0 iTDxz"},
                    {"imageUrl1":"https://suggestrank.com/images/2ba7ca71.jpg", "name1":"Fiat Linea", "variant1":"2.0 TDI","imageUrl2":"https://suggestrank.com/images/45b2e9c1.jpg", "name2":"Fiat Ulysse", "variant2":"2.0 iTDxz"},
                    {"imageUrl1":"https://suggestrank.com/images/mazda-atenza-2018-2019-1537376293.68.jpg", "name1":"Mazda Roadster", "variant1":"2.0 TDI","imageUrl2":"https://suggestrank.com/images/mazda-roadster-2015-2019-1520489007.03.jpg", "name2":"Mazda 6", "variant2":"2.0 iTDxz"},
                    {"imageUrl1":"https://suggestrank.com/images/audi-a3-2016-2018-1498129622.34.jpg", "name1":"Audi A6", "variant1":"2.0 TDI","imageUrl2":"https://suggestrank.com/images/audi-a4-2016-2017-1455205004.51.jpg", "name2":"Audi A3", "variant2":"2.0 iTDxz"},
                    {"imageUrl1":"https://suggestrank.com/images/daewoo-leganza-1997-2008-1469775082.98.jpg", "name1":"Daewoo - Nubira", "variant1":"2.0 TDI","imageUrl2":"https://suggestrank.com/images/daewoo-nubira-2002-2015-1470036230.57.jpg", "name2":"Daewoo - Leganza", "variant2":"2.0 iTDxz"},
                    {"imageUrl1":"https://suggestrank.com/images/2ba7ca71.jpg", "name1":"Fiat Linea", "variant1":"2.0 TDI","imageUrl2":"https://suggestrank.com/images/45b2e9c1.jpg", "name2":"Fiat Ulysse", "variant2":"2.0 iTDxz"},
                ],
                "comparedData": [
                    {
                        "categoryName": "Engine", "image": "image/motor.png",
                        "details": [
                            { "name": "Engine Size (CC)", "car1": "1197cc", "car2": "1197cc" },
                            { "name": "Engine Bore", "car1": "0", "car2": "0" },
                            { "name": "Engine Compression", "car1": "9.6", "car2": "9.6" },
                            { "name": "Engine Cylinder", "car1": "4", "car2": "4" },
                            { "name": "Engine Fuel", "car1": "Premium Unleaded", "car2": "Premium Unleaded" },
                            { "name": "Engine Position", "car1": "Front", "car2": "Front" },
                            { "name": "Engine Power", "car1": "565", "car2": "565" },
                        ]
                    },
                    {
                        "categoryName": "Dimension & wight", "image": "image/ruler.png",
                        "details": [
                            { "name": "Length", "car1": "3995mm", "car2": "3995mm" },
                        ]
                    },
                    {
                        "categoryName": "Engine", "image": "image/manual-transmission.png",
                        "details": [
                            { "name": "Engine Size (CC)", "car1": "1197cc", "car2": "1197cc" },
                        ]
                    },
                    {
                        "categoryName": "Engine", "image": "image/tire.png",
                        "details": [
                            { "name": "Engine Size (CC)", "car1": "1197cc", "car2": "1197cc" },
                        ]
                    }
                ]
            },

            compareDActiveNumber: 0,
            compareMActiveNumber: 0
        };

        this.prewCompare = this.prewCompare.bind(this);
        this.nextCompare = this.nextCompare.bind(this);
    }

    prewCompare() {
        if (this.state.compareDActiveNumber != 0) {
            this.setState({
                compareDActiveNumber: this.state.compareDActiveNumber - 1
            })
        }

        if (this.state.compareMActiveNumber != 0) {
            this.setState({
                compareMActiveNumber: this.state.compareMActiveNumber - 1
            })
        }
    }

    nextCompare() {
        if (this.state.compareDActiveNumber < this.state.data.popularComparisons.length - 4) {
            this.setState({
                compareDActiveNumber: this.state.compareDActiveNumber + 1
            })
        }

        if (this.state.compareMActiveNumber < this.state.data.popularComparisons.length - 1) {
            this.setState({
                compareMActiveNumber: this.state.compareMActiveNumber + 1
            })
        }
    }

    componentDidMount() {
        this.setState({
            isMobile: window.innerWidth < 992 ? true : false
        })
    }

    render() {
        let isMobile = this.state.isMobile ;
        return (
            <div className="page-car">
                <div className="section pt-2 page-wrapper">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="features d-none d-lg-block mt-5 mb-4 p-3 bg-white">
                                        <div className="section-title mb-4">
                                            <h6>Comparision Features</h6>
                                        </div>

                                        <div className="features-items">
                                            <div className="features-item-wrapper mb-1">
                                                <div className="toggler clearfix" data-bs-toggle="collapse" href="#engine-collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    <h6 className="float-start">Engine</h6>
                                                    <i className="fal fa-chevron-down float-end"></i>
                                                </div>
                                                <div className="collapse show" id="engine-collapse">
                                                    <div className="divider mb-1"></div>
                                                    {this.state.data.comparisonFeatures.Engine&&this.state.data.comparisonFeatures.Engine.map((item, index) =>
                                                        <FeaturesItemCompared data={item} />
                                                    )}
                                                </div>
                                            </div>

                                            <div className="features-item-wrapper mb-1">
                                                <div className="toggler clearfix" data-bs-toggle="collapse" href="#dimension-collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    <h6 className="float-start">Dimension & Weight</h6>
                                                    <i className="fal fa-chevron-down float-end"></i>
                                                </div>
                                                <div className="collapse show" id="dimension-collapse">
                                                    <div className="divider mb-1"></div>
                                                    {this.state.data.comparisonFeatures.Dimensions&&this.state.data.comparisonFeatures.Dimensions.map((item, index) =>
                                                        <FeaturesItemCompared data={item} />
                                                    )}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-9">
                                    <div className="right-panel pl-3">
                                        <div className="mt-5">
                                            <CardDescription title={this.state.data.desc1.title} content={this.state.data.desc1.content}/>
                                        </div>
                                        <div className="features d-lg-none mt-4 mb-4 p-3 bg-white">
                                            <div className="clearfix" data-bs-toggle="collapse" href="#features-collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                <h6 className="mb-0 float-start">Comparision Features</h6>
                                                <i className="far fa-chevron-double-down float-end mt-1"></i>
                                            </div>

                                            <div className="features-items collapse mt-3" id="features-collapse">
                                                
                                                <div className="features-item-wrapper mb-1">
                                                    <div className="toggler clearfix" data-bs-toggle="collapse" href="#engine-collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                        <h6 className="float-start">Engine</h6>
                                                        <i className="fal fa-chevron-down float-end"></i>
                                                    </div>
                                                    <div className="collapse" id="engine-collapse">
                                                        <div className="divider mb-1"></div>
                                                        {this.state.data.comparisonFeatures.Engine&&this.state.data.comparisonFeatures.Engine.map((item, index) =>
                                                            <FeaturesItemCompared data={item} />
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="features-item-wrapper mb-1">
                                                    <div className="toggler clearfix" data-bs-toggle="collapse" href="#dimension-collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                        <h6 className="float-start">Dimension & Weight</h6>
                                                        <i className="fal fa-chevron-down float-end"></i>
                                                    </div>
                                                    <div className="collapse" id="dimension-collapse">
                                                        <div className="divider mb-1"></div>
                                                        {this.state.data.comparisonFeatures.Dimensions&&this.state.data.comparisonFeatures.Dimensions.map((item, index) =>
                                                            <FeaturesItemCompared data={item} />
                                                        )}
                                                    </div>
                                                </div>

                                                
                                            </div>
                                        </div>

                                        <div className="compare-car mb-4 bg-white p-3 pt-4 mt-4">
                                            <div className="row">
                                                <div className="col-6 compare-item-left">
                                                    <div className="rank-wrapper winner mb-3">
                                                        <div className="rank d-inline-block text-center">
                                                            <span className="d-block number fw-bold fs-5">1</span>
                                                            <span className="d-block fs-8 fw-bold">RANK</span>
                                                        </div>
                                                        <div className="winnder-item d-none d-lg-inline-block ms-3">
                                                            <i class="far fa-thumbs-up me-1"></i>
                                                            <span className="fs-8 fw-bold">WINNER</span>
                                                        </div>
                                                    </div>

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
                                                    <div className="rank-wrapper mb-3 text-end">
                                                        <div className="rank d-inline-block text-center">
                                                            <span className="d-block number fw-bold fs-5">2</span>
                                                            <span className="d-block fs-8 fw-bold">RANK</span>
                                                        </div>
                                                    </div>

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

                                            <div className="vs-image compared">
                                                <img src="image/vs.png" />
                                            </div>

                                            <div className="popularity-wrapper mt-3">
                                                <div className="title mb-3">
                                                    <img src="image/popularity.png" />
                                                    <span className="fw-bold fs-6 text-uppercase">popularity</span>
                                                </div>

                                                <div className="row detail">
                                                    <div className="col-6 left">
                                                        <div className="row">
                                                            <div className="col-md-2 col-3 fw-bold text-end number">
                                                                68%
                                                            </div>
                                                            <div className="col-md-10 col-9 mt-1">
                                                                <ProgressBar percent="68"/>
                                                                <p className="d-none d-md-block text-end fs-8">
                                                                    Integer eget sem non augue euismod rhoncus eu eu sem. In volutpat 
                                                                    suscipit est ac malesuada.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 right">
                                                        <div className="row">
                                                            <div className="col-md-10 col-9 mt-1">
                                                                <ProgressBar percent="60"/>
                                                                <p className="d-none d-md-block text-start fs-8">
                                                                    Integer eget sem non augue euismod rhoncus eu eu sem. In volutpat 
                                                                    suscipit est ac malesuada.
                                                                </p>
                                                            </div>
                                                            <div className="col-md-2 col-3 fw-bold text-start number">
                                                                68%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {this.state.data.comparedData&&this.state.data.comparedData.map((item, index) =>
                                                <ComparedData data={item} key={index}/>
                                            )}
                                            
                                        </div>
                                    
                                        <div className="row">
                                            <div className="col-md-6 mt-4">
                                                <CardDescription title={this.state.data.desc2.title} content={this.state.data.desc2.content}/>
                                            </div>

                                            <div className="col-md-6 mt-4">
                                                <CardDescription title={this.state.data.desc3.title} content={this.state.data.desc3.content}/>
                                            </div>

                                            <div className="col-md-6 mt-4">
                                                <CardDescription title={this.state.data.desc4.title} content={this.state.data.desc4.content}/>
                                            </div>

                                            <div className="col-md-6 mt-4">
                                                <CardDescription title={this.state.data.desc5.title} content={this.state.data.desc5.content}/>
                                            </div>

                                            <div className="col-md-6 mt-4">
                                                <CardDescription title={this.state.data.desc6.title} content={this.state.data.desc6.content}/>
                                            </div>

                                            <div className="col-md-6 mt-4">
                                                <CardDescription title={this.state.data.desc7.title} content={this.state.data.desc7.content}/>
                                            </div>

                                            <div className="col-md-12 mt-4">
                                                <CardDescription title={this.state.data.desc8.title} content={this.state.data.desc8.content}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="section pt-0">
                    <div className="container">
                        <div className="section-title">
                            <h4>Popular comparison</h4>
                            <div className="prev-next">
                                <div className="pn-item" onClick={this.prewCompare}>
                                    <img src="image/prev.png" />
                                </div>
                                <div className="pn-item">
                                    <img src="image/next.png"  onClick={this.nextCompare}/>
                                </div>
                            </div>
                        </div>
            
                        <div className="section-content">
                            <div className="d-none d-sm-block">
                                <div className="row">
                                    {this.state.data.popularComparisons&&this.state.data.popularComparisons.map((item, index) => {
                                        return index - this.state.compareDActiveNumber < 4 && index -this.state.compareDActiveNumber >= 0?
                                        <div className="col-sm-3">
                                            <CompareItem compareData={item} key={index}/>
                                        </div>
                                        :
                                        ''
                                    })}
                                </div>
                                
                            </div>
                            <div className="d-sm-none">
                                <CompareItem compareData={this.state.data.popularComparisons[this.state.compareMActiveNumber]}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}