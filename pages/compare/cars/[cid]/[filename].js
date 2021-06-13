import React from 'react'
import FeaturesItem from '../../../../components/comparision_features/features_item'
import FeaturesItemCompared from '../../../../components/comparision_features/features_item_compared'
import CardDescription from '../../../../components/basic/card_description'
import CompareItem from '../../../../components/compares/compare-item'
import CompareResultCar from '../../../../components/compares/compare-car'
import CompareCarPopularity from '../../../../components/compares/car-compare-popularity'
import ComparedData from '../../../../components/compares/compared_data'


export default class CarComparisonResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            threeCarsComparison: true,
            popularComparisonsPage:1,
            data: {
                "desc1": {
                    "title": props.title, 
                    "content": props.headPara
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

                "comparisonFeatures":props.comparisonFeatures
                ,
                "car1Data":{
                    "carImage":"https://suggestrank.com/images/8795e4a4.jpg", "name":"Honda CRV", "make":"Honda", "model":"CRV", "year":"2020"
                },
                "car2Data":{
                    "carImage":"https://suggestrank.com/images/honda-jazz-2017-2019-1519048567.5.jpg", "name":"Honda Jazz", "make":"Honda", "model":"Jazz", "year":"2019"
                },
                "car3Data":{
                    "carImage":"https://suggestrank.com/images/honda-jazz-2017-2019-1519048567.5.jpg", "name":"Honda Jazz", "make":"Honda", "model":"Jazz", "year":"2019"
                },
                "popularComparisons":props.popularComparisons,
                "comparedData": [
                    {
                        "categoryName": "Engine", "image": "/image/motor.png",
                        "details": [
                            { "name": "Engine Size (CC)", "car1": "1197cc", "car2": "1197cc","car3": "1197cc" },
                            { "name": "Engine Bore", "car1": "0", "car2": "0", "car3": "0" },
                            { "name": "Engine Compression", "car1": "9.6", "car2": "9.6" , "car3": "9.6" },
                            { "name": "Engine Cylinder", "car1": "4", "car2": "4", "car3": "4" },
                            { "name": "Engine Fuel", "car1": "Premium Unleaded", "car2": "Premium Unleaded", "car3": "Premium Unleaded" },
                            { "name": "Engine Position", "car1": "Front", "car2": "Front", "car3": "Front" },
                            { "name": "Engine Power", "car1": "565", "car2": "565", "car3": "565" },
                        ]
                    },
                    {
                        "categoryName": "Dimension & wight", "image": "/image/ruler.png",
                        "details": [
                            { "name": "Length", "car1": "3995mm", "car2": "3995mm", "car3": "3995mm" },
                        ]
                    },
                    {
                        "categoryName": "Engine", "image": "/image/manual-transmission.png",
                        "details": [
                            { "name": "Engine Size (CC)", "car1": "1197cc", "car2": "1197cc", "car3": "1197cc" },
                        ]
                    },
                    {
                        "categoryName": "Engine", "image": "/image/tire.png",
                        "details": [
                            { "name": "Engine Size (CC)", "car1": "1197cc", "car2": "1197cc", "car3": "1197cc" },
                        ]
                    }
                ]
            },

        };

        this.prewCompare = this.prewCompare.bind(this);
        this.nextCompare = this.nextCompare.bind(this);
    }

    async prewCompare() {
        if (this.state.popularComparisonsPage > 1) {
            await this.setState({popularComparisonsPage: this.state.popularComparisonsPage - 1})
        } 
        const res = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_HOST+"/api/v2/car/popular-comparisons?page="+this.state.popularComparisonsPage);
        const comps = await res.json();
        var newState = this.state;
        newState.data.popularComparisons = comps;
        await this.setState(newState);
    }

    async nextCompare() {
        await this.setState({popularComparisonsPage: this.state.popularComparisonsPage + 1})
        const res = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_HOST+"/api/v2/car/popular-comparisons?page="+this.state.popularComparisonsPage);
        const comps = await res.json();
        var newState = this.state;
        newState.data.popularComparisons = comps;
        await this.setState(newState);
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
                                                    
                                                    <i className="fal fa-chevron-down float-end"></i>
                                                </div>
                                                <div className="collapse show" id="engine-collapse">
                                                    <div className="divider mb-1"></div>
                                                    {this.state.data.comparisonFeatures&&this.state.data.comparisonFeatures.map((item, index) =>
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
                                                        {this.state.data.comparisonFeatures &&this.state.data.comparisonFeatures.map((item, index) =>
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
                                                        {this.state.data.comparisonFeatures&&this.state.data.comparisonFeatures.map((item, index) =>
                                                            <FeaturesItemCompared data={item} />
                                                        )}
                                                    </div>
                                                </div>

                                                
                                            </div>
                                        </div>

                                        <div className="compare-car mb-4 bg-white p-3 pt-4 mt-4">
                                            <div className="row">
                                                {this.state.threeCarsComparison ?
                                                [1,2,3].map(e => 
                                                    <div className="col-4 compare-item-left">
                                                        <CompareResultCar data={{
                                                            "rank":e, 
                                                            "image":this.state.data.car1Data.carImage, 
                                                            "make":this.state.data.car1Data.make, 
                                                            "model":this.state.data.car1Data.model, 
                                                            "year":this.state.data.car1Data.year,
                                                            "winner":(e ==1? true:false)
                                                        }}/></div>)
                                                :<><div className="col-6 compare-item-left">
                                                <CompareResultCar data={{
                                                    "rank":"1", 
                                                    "image":this.state.data.car1Data.carImage, 
                                                    "make":this.state.data.car1Data.make, 
                                                    "model":this.state.data.car1Data.model, 
                                                    "year":this.state.data.car1Data.year,
                                                    "winner":true
                                                }}/></div>
                                                <div className="col-6 compare-item-right">
                                                        <CompareResultCar data={{
                                                            "rank":"2", 
                                                            "image":this.state.data.car1Data.carImage, 
                                                            "make":this.state.data.car1Data.make, 
                                                            "model":this.state.data.car1Data.model, 
                                                            "year":this.state.data.car1Data.year,
                                                            "winner":false
                                                        }}/></div></>}
                                                
                                                
                                                
                                            
                                            </div>

                                            

                                            <CompareCarPopularity data={{"threecars":this.state.threeCarsComparison, "popularity1":68, "popularity2":78,"popularity3":65}}/>

                                            {this.state.data.comparedData&&this.state.data.comparedData.map((item, index) =>
                                                <ComparedData data={item} threecars={this.state.threeCarsComparison} key={index}/>
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
                                    <img src="/image/prev.png" />
                                </div>
                                <div className="pn-item">
                                    <img src="/image/next.png"  onClick={this.nextCompare}/>
                                </div>
                            </div>
                        </div>
            
                        <div className="section-content">
                            <div className="d-none d-sm-block">
                                <div className="row">
                                {this.state.data.popularComparisons && this.state.data.popularComparisons.map((item, index) => 
                                    <div className="col-sm-3">
                                        <CompareItem compareData={item} key={index}/>
                                    </div>
                                )}
                                </div>
                                
                            </div>
                             <div className="d-sm-none">
                             {this.state.data.popularComparisons && this.state.data.popularComparisons.map((item, index) => 
                                        <CompareItem compareData={item} key={index}/>
                                )}
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export async function getStaticProps() {
    
    const comparisonsResults = await fetch(process.env.REACT_APP_API_HOST+"/api/v2/car/popular-comparisons");
    const comparisons = await comparisonsResults.json();
    const comparisonResponse = await fetch(process.env.REACT_APP_API_HOST+"/api/v2/car/comparison-result?id=546");
    const comparisonsData = await comparisonResponse.json();
    return {
      props: {"popularComparisons":comparisons, "comparisonFeatures":comparisonsData.criteria, "title":comparisonsData.title,
                "headPara":comparisonsData.headPara}, // will be passed to the page component as props
    }
}

export async function getStaticPaths () {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}