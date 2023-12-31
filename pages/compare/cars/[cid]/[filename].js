import React, {useState} from 'react'
import { useEffect } from "react";
import { useRouter } from 'next/router'
import FeaturesItem from '../../../../components/comparision_features/features_item'
import FeaturesItemCompared from '../../../../components/comparision_features/features_item_compared'
import CardDescription from '../../../../components/basic/card_description'
import CompareItem from '../../../../components/compares/compare-item'
import CompareResultCar from '../../../../components/compares/compare-car'
import CompareCarPopularity from '../../../../components/compares/car-compare-popularity'
import ComparedData from '../../../../components/compares/compared_data'
import Head from "next/head";
import ErrorPage from '../../../errorpage'
import InfiniteScroll from "react-infinite-scroll-component";


function CarComparisonResult (props) {
    

    const [threeCarsComparison, setThreeCarsComparison] = React.useState( props.threeCarsComparison);
    const [popularComparisonsPage, setPopularComparisonsPage] = React.useState(1);
    const [isMobile, setIsMobile] = React.useState(false);
    const [statusCode, setStatusCode] = React.useState(props.statusCode);
    const [items, setItems] = React.useState([]);
    const [hasMoreElements, setHasMoreElements] = React.useState(true);
    const [standaloneDescriptions, setStandaloneDescriptions] = React.useState([]);
    const [standaloneVerdict, setStandaloneVerdict] = React.useState("");
    const [standalonePopularComparisons, setStandalonePopularComparisons] = React.useState();
    const [data, setData] = React.useState( {
                "headPara": {"title": props.title, "content": props.headPara},
                "comparisonFeatures":props.comparisonFeatures,
                "carsData":props.carsData,
                "specs": props.categorizedSpecs,
                "cid":0
            });

        // this.prewCompare = this.prewCompare.bind(this);
        // this.nextCompare = this.nextCompare.bind(this);
    

    const prewCompare = async () => {
        if (popularComparisonsPage > 1) {
            await setPopularComparisonsPage(popularComparisonsPage - 1)
        } 
        const res = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_HOST+"/api/v2/car/popular-comparisons?page="+popularComparisonsPage);
        const comps = await res.json();
        // var newState = this.state;
        var newData = {...data}
        newData.popularComparisons = comps;
        await setData(newData);
    }

    const nextCompare = async  () => {
        await setPopularComparisonsPage(popularComparisonsPage + 1)
        const res = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_HOST+"/api/v2/car/popular-comparisons?page="+popularComparisonsPage);
        const comps = await res.json();
        var newData = {...data}
        newData.popularComparisons = comps;
        await setData(newData);
    }

    const fetchMoreData = async () => {
        if (items.length > 1) {
            const comparisonsResults = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_HOST+"/api/v2/car/popular-comparisons");
            const comparisons = await comparisonsResults.json();
            await setStandalonePopularComparisons(comparisons);
            await setHasMoreElements(false);
        } else {
            var newItems = items.concat(Array.from({length:1}));
            await setItems(newItems);
            await setHasMoreElements(true);
        }
        const comparisonResponse = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_HOST+"/api/v2/car/comparison-result-content?id="+props.cid);
        const comparisonsData = await comparisonResponse.json();
        if (comparisonResponse.ok) {
            var currentData = data;
            currentData.descriptions = comparisonsData.descriptions;
            await setStandaloneDescriptions(comparisonsData.descriptions);
            currentData.verdict = comparisonsData.verdict;
            await setStandaloneVerdict(comparisonsData.verdict);
            await setData(currentData);

        }
        
    }
    
    useEffect( () => {
        setIsMobile(window.innerWidth < 992 ? true : false);
    }, [])

    
    // let isMobile = this.state.isMobile ;
    if (props.statusCode !== 200) {

        return <ErrorPage/>
        
    } else
    return (
        
        <>
        <Head>
        <title>{props.title} </title>
        <meta charset="utf-8" />
        <meta  name="theme-color" content="#1a2e3c"/>
        <meta  name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta  name="title" content={props.title}  />
        <meta  name="description" content={props.headPara}/>
        <meta property="twitter:description" content={props.headPara}/>
        <meta  property="og:title" content={props.title} />
        <meta  property="og:description"  content={props.headPara}/>
        <meta  property="og:image" content={"https://suggestrank.com"+props.pageImage}/>
        <meta  property="og:url" content={"https://suggestrank.com"+props.url}/>
        <meta property="og:image:secure_url" content="https://suggestrank.com/suggestrank.png"></meta>
        <meta  property="og:type" content="article"/>
        <meta  property="og:site_name" content="SuggestRank"/>
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content="2021-03-09T19:23:37+01:30"/>
        <meta property="og:image:width" content="400"/>
        <meta property="og:image:height" content="250"></meta>
        <meta property="og:image:type" content="image/jpeg"></meta>
        <meta name="twitter:title" content={props.title}/>
        <meta name="twitter:description" content={props.headPara}/>
        <meta name="twitter:image" content={"https://suggestrank.com"+props.pageImage}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@RankSuggest"/>
        <meta name="twitter:image:alt" content={"https://suggestrank.com"+props.pageImage}></meta>
        <meta property="fb:app_id" content="452302089227415" />
        <link rel="canonical" href={"https://suggestrank.com"+props.url} />

        <meta property="article:published_time" content="2021-04-02" />
        <meta property="article:publisher" content="https://suggestrank.com"></meta>
        <meta property="article:section" content="Car Comparison"></meta> 
            
            
        </Head> 
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
                                                {data.comparisonFeatures&&data.comparisonFeatures.map((item, index) =>
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
                                        <CardDescription title={data.headPara.title} content={data.headPara.content}/>
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
                                                    {data.comparisonFeatures &&data.comparisonFeatures.map((item, index) =>
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
                                                    {data.comparisonFeatures&&data.comparisonFeatures.map((item, index) =>
                                                        <FeaturesItemCompared data={item} />
                                                    )}
                                                </div>
                                            </div>

                                            
                                        </div>
                                    </div>

                                    <div className="compare-car mb-4 bg-white p-3 pt-4 mt-4">
                                        <div className="row">
                                            {threeCarsComparison ?
                                            data !== undefined &&  data.carsData !== undefined
                                                ? data.carsData.map(c => 
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
                                                : <></>
                                            :
                                            data !== undefined &&  data.carsData !== undefined 
                                                ? data.carsData.map(c => 
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
                                                : <></>
                                            }
                                            
                                            
                                            
                                        
                                        </div>

                                        

                                        <CompareCarPopularity data={{"threecars":threeCarsComparison, "carsData":data.carsData}}/>

                                        {data.specs && data.specs.map((item, index) =>
                                            <ComparedData data={item} threecars={threeCarsComparison} key={index}/>
                                        )}
                                        
                                    </div>
                                    <InfiniteScroll
                                        dataLength={items.length}
                                        next={fetchMoreData}
                                        hasMore={hasMoreElements}
                                        loader={<center><h4>...</h4></center>}
                                        style={{ overflow:"inherit"}}
                                        >
                                            {items.map((i, index) => {
                                                if (index === 0 ) {
                                                    return <div className="row">
                                                    {data !== undefined && data.descriptions !== undefined 
                                                        ? data.descriptions.map(d => 
                                                        <div className="col-md-6 mt-4">
                                                            <CardDescription title={d.title} content={d.content}/>
                                                        </div>
                                                        )
                                                        : <></>
                                                    }
                                                    
                                                    <div className="col-md-12 mt-4">
                                                        <CardDescription title={"Verdict"} content={standaloneVerdict}/>
                                                    </div>
                                                </div>
                                                } else if (index == 1) {
                                                    return <div className="row" style={{marginTop:"50px"}}>
                                                    <div className="section pt-0">
                                                        <div className="container">
                                                            <div className="section-title">
                                                                <h4>Popular comparison</h4>
                                                                <div className="prev-next">
                                                                    <div className="pn-item" onClick={prewCompare}>
                                                                    <picture>
                                                                        <source srcSet={require('../../../../public/image/prev.png?webp')} type='image/webp'/>
                                                                        <source srcSet={require('../../../../public/image/prev.png')} type='image/png'/>
                                                                        <img src={require('../../../../public/image/prev.png')} width="100%" height="100%"/>
                                                                    </picture>
                                                                    </div>
                                                                    <div className="pn-item">
                                                                    <picture>
                                                                        <source srcSet={require('../../../../public/image/next.png?webp')} type='image/webp'/>
                                                                        <source srcSet={require('../../../../public/image/next.png')} type='image/png'/>
                                                                        <img src={require('../../../../public/image/next.png')}  onClick={nextCompare} width="100%" height="100%"/>
                                                                    </picture>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                
                                                            <div className="section-content">
                                                                <div className="d-none d-sm-block">
                                                                    <div className="row">
                                                                    {standalonePopularComparisons && standalonePopularComparisons.map((item, index) => 
                                                                        <div className="col-sm-3">
                                                                            <CompareItem compareData={item} key={index}/>
                                                                        </div>
                                                                    )}
                                                                    </div>
                                                                    
                                                                </div>
                                                                    <div className="d-sm-none">
                                                                    {standalonePopularComparisons && standalonePopularComparisons.map((item, index) => 
                                                                            <CompareItem compareData={item} key={index}/>
                                                                    )}
                                                                </div> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                }
                                            })}
                                            
                                                
                                                
                                                </InfiniteScroll>
                                           
                                        
                                        
                                    
                                    

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



           
            
            
        </div>
        </>
    );
    
}


export async function getServerSideProps ({query}) {
    
    const comparisonResponse = await fetch(process.env.REACT_APP_API_HOST+"/api/v2/car/comparison-result?id="+query.cid);
    const comparisonsData = await comparisonResponse.json();
    if (comparisonResponse.ok) {
        var pageImage = "";
        for(var i = 0; i < comparisonsData.carsData.length; i++) {
            if (comparisonsData.carsData[i].rank === 1 ) {
                pageImage = comparisonsData.carsData[i].image;
            }
        }

        return {
        props: { "comparisonFeatures":comparisonsData.criteria, "title":comparisonsData.title,
                    "headPara":comparisonsData.headPara, "threeCarsComparison":comparisonsData.threeCarsComparison,
                "carsData":comparisonsData.carsData, "categorizedSpecs":comparisonsData.categorizedSpecs,
                 "pageImage":pageImage,
            "url":comparisonsData.url, "statusCode":comparisonResponse.status, "cid":query.cid}, // will be passed to the page component as props
        }
    } else {
        return {props: {"statusCode":comparisonResponse.status},}
    }
}




export default CarComparisonResult