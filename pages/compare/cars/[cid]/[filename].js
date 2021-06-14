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
            threeCarsComparison: props.threeCarsComparison,
            popularComparisonsPage:1,
            data: {
                "desc1": {
                    "title": props.title, 
                    "content": props.headPara
                },
                "descriptions":props.descriptions,

                "Verdict": props.verdict,

                "comparisonFeatures":props.comparisonFeatures
                ,
                "carsData":props.carsData,
                "popularComparisons":props.popularComparisons,
                "specs": props.categorizedSpecs
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
                                                this.state.data.carsData.map(c => 
                                                    <div className="col-4 compare-item-left">
                                                        <CompareResultCar data={{
                                                            "rank":c.rank, 
                                                            "image":c.image, 
                                                            "make":c.make, 
                                                            "model":c.model, 
                                                            "year":c.year,
                                                            "variant":c.variant,
                                                            "winner":(c.rank ==1? true:false)
                                                        }}/></div>)
                                                :
                                                this.state.data.carsData.map(c => 
                                                    <div className="col-6 compare-item-left">
                                                        <CompareResultCar data={{
                                                            "rank":c.rank, 
                                                            "image":c.image, 
                                                            "make":c.make, 
                                                            "model":c.model, 
                                                            "year":c.year,
                                                            "variant":c.variant,
                                                            "winner":(c.rank ==1? true:false)
                                                        }}/></div>)
                                                }
                                                
                                                
                                                
                                            
                                            </div>

                                            

                                            <CompareCarPopularity data={{"threecars":this.state.threeCarsComparison, "carsData":this.state.data.carsData}}/>

                                            {this.state.data.specs&&this.state.data.specs.map((item, index) =>
                                                <ComparedData data={item} threecars={this.state.threeCarsComparison} key={index}/>
                                            )}
                                            
                                        </div>
                                    
                                        <div className="row">
                                            {this.state.data.descriptions.map(d => 
                                            <div className="col-md-6 mt-4">
                                                <CardDescription title={d.title} content={d.content}/>
                                            </div>
                                            )}
                                            
                                            <div className="col-md-12 mt-4">
                                                <CardDescription title={"Verdict"} content={this.state.data.Verdict}/>
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
                "headPara":comparisonsData.headPara, "threeCarsComparison":comparisonsData.threeCarsComparison,
            "carsData":comparisonsData.carsData, "categorizedSpecs":comparisonsData.categorizedSpecs,
            "descriptions":comparisonsData.descriptions, "verdict":comparisonsData.verdict}, // will be passed to the page component as props
    }
}

export async function getStaticPaths () {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}