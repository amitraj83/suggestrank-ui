import React, {useState} from 'react'
import { useEffect } from "react";
import { useRouter } from 'next/router'
import CompareForm from '../../components/compares/compare-form'
import FeaturesItem from '../../components/comparision_features/features_item'
import Head from "next/head";
import Image from 'next/image'

function Compare (props) {
    const router = useRouter();
    const [isMobile, setIsMobile] = React.useState(false);
    const [data, setData] = React.useState( {
                "make":props.makes,
                "comparisonFeatures":props.comparisonFeatures,
                "car1Data":{
                    "modelId":"", "carImage":"/image/default-car.png",  "make":"---", "model":"---", "year":"", "variant":"--- "
                },
                "car2Data":{
                    "modelId":"","carImage":"/image/default-car.png",  "make":"---", "model":"---", "year":"", "variant":"---"
                }
            }
            );
        // this.car1SelectionHandler = this.car1SelectionHandler.bind(this);
        // this.car2SelectionHandler = this.car2SelectionHandler.bind(this);
        // this.compareCars = this.compareCars.bind(this);
    

        useEffect( () => {
            setIsMobile(window.innerWidth < 992 ? true : false);
        }, [])

    const car1SelectionHandler = async (val) => {
        const res = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_HOST+"/api/v2/car/light-car/details?id="+val.target.value);
        const carData = await res.json();
        var newData = {...data}
        newData["car1Data"] = {"modelId":carData.id, 
        "carImage":"/images/"+carData.image,  "make":carData.make, 
        "model":carData.model, "year":carData.year, "variant":carData.variant}
        await setData(newData);
    }

    const car2SelectionHandler = async (val) => {
        const res = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_HOST+"/api/v2/car/light-car/details?id="+val.target.value);
        const carData = await res.json();
        var newData = {...data}
        newData["car2Data"] = {"modelId":carData.id, 
        "carImage":"/images/"+carData.image,  "make":carData.make, 
        "model":carData.model, "year":carData.year, "variant":carData.variant}
        await setData(newData);
    }

    const compareCars = async () => {
        var carComparisonCriteria = [];
            // {
            //     "id": 880,
            //     "col_name": "model_year",
            //     "displayname": "Model Year",
            //     "preference": "False",
            //     "importance": "5"
            // }
            //{"id":"model_length_mm","displayName":"Length (mm)","lowerIsBetter":1,"included":false}
            //preference === "False" ? "Higher the better": "Lower the better"
        Object.keys(data.comparisonFeatures).map((key) => {
            comparisonFeatures[key].map((item) => {
                console.log(JSON.stringify(item));
                var pref = item.lowerIsBetter === 1 ? true : false;
                if (item.included === true){
                    carComparisonCriteria.push({"col_name":item.id, "displayname":item.displayName, "preference":pref});
                }
            } );
        });
        console.log(JSON.stringify(carComparisonCriteria));
        const compareRequest = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_HOST+"/api/v2/compare-rank/cars?ids="+data.car1Data.modelId + ","+data.car2Data.modelId,
        {
            method: "post",
            body: JSON.stringify({
              criteria: carComparisonCriteria
            }),
          });
        const comparisons = await compareRequest.json();
        router.push(comparisons.pushUrl);
    }

   
    let comparisonFeatures = data.comparisonFeatures;
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
        <>
        <Head>
        
        <title>
              Compare and Rank Cars, Car Comparison and Ranking Tool | SuggestRank
          </title>
          <meta charset="utf-8" />
  
          <meta property="twitter:description" content="Compare cars side-by-side and rank. See car specifications, equipment, review, sale price, interiors, review, horsepower, engine, Images and colours and rank."/>
          <meta name="theme-color" content="#1a2e3c"/>
          <meta property="og:type" content="website"/>
          <meta property="og:site_name" content="SuggestRank"/>
          <meta name="og:image" property="og:image" content="https://suggestrank.com/static/media/text6244.283151ca.png"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="title" content="SuggestRank - Car compare and rank tool"/>
          <meta property="og:title" content="SuggestRank - Car compare and rank tool"/>
          <meta property="og:url" content="https://suggestrank.com"/>
          <meta name="description" content="Compare cars side-by-side and rank. See car specifications, equipment, review, sale price, interiors, review, horsepower, engine, Images and colours and rank."/>
          <meta property="og:description" content="Compare cars side-by-side and rank. See car specifications, equipment, review, sale price, interiors, review, horsepower, engine, Images and colours and rank."/>
          <meta  name="keywords"  content={"compare cars, compare cars side-by-side, Car comparison tool"}/>
  
        </Head>
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
                                    <CompareForm make={data.make} 
                                    models={{}} 
                                    variants={[]} 
                                    action1={car1SelectionHandler} 
                                    action2={car2SelectionHandler}
                                    compare={compareCars} />
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
                                            <Image
                                                src={data.car1Data.carImage} 
                                                alt="Car comparison blog" 
                                                width='100%' 
                                                height='100%' 
                                                loading="lazy"
                                                layout="responsive"
                                                quality="50"
                                                placeholder="empty"
                                                /> 
                                            
                                            </div>
                                            <div className="value mb-4">
                                                <label className="d-block fw-bold">{data.car1Data.make+" "+data.car1Data.model}</label>
                                                <span className="fs-8">{data.car1Data.variant+" "+data.car1Data.year}</span>
                                            </div>
                                            {/* <div className="row value-details">
                                                <div className="col-md-4 mb-2">
                                                    <div className="value">
                                                        <span className="fs-8">Make</span>
                                                        <label className="d-block fw-bold">{data.car1Data.make}</label>
                                                    </div>  
                                                </div>
                                                <div className="col-md-4 mb-2">
                                                    <div className="value">
                                                        <span className="fs-8">Model</span>
                                                        <label className="d-block fw-bold">{data.car1Data.model}</label>
                                                        <span className="fs-8">Varient</span>
                                                    </div>  
                                                </div>
                                                <div className="col-md-4 mb-2">
                                                    <div className="value">
                                                        <span className="fs-8">Year</span>
                                                        <label className="d-block fw-bold">{data.car1Data.year}</label>
                                                    </div> 
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="col-6 compare-item-right">
                                            <div className="item-img mb-3">
                                            <Image
                                                src={data.car2Data.carImage} 
                                                alt="Car comparison blog" 
                                                width='100%' 
                                                height='100%' 
                                                loading="lazy"
                                                layout="responsive"
                                                quality="50"
                                                placeholder="empty"
                                                /> 
                                            
                                            </div>
                                            <div className="value mb-4">
                                                <label className="d-block fw-bold">{data.car2Data.make+" "+data.car2Data.model}</label>
                                                <span className="fs-8">{data.car2Data.variant+" "+data.car2Data.year}</span>
                                            </div>
                                            {/* <div className="row value-details">
                                                <div className="col-md-4 mb-2">
                                                    <div className="value">
                                                        <span className="fs-8">Make</span>
                                                        <label className="d-block fw-bold">{data.car2Data.make}</label>
                                                    </div>  
                                                </div>
                                                <div className="col-md-4 mb-2">
                                                    <div className="value">
                                                        <span className="fs-8">Model</span>
                                                        <label className="d-block fw-bold">{data.car2Data.model}</label>
                                                        <span className="fs-8">Varient</span>
                                                    </div>  
                                                </div>
                                                <div className="col-md-4 mb-2">
                                                    <div className="value">
                                                        <span className="fs-8">Year</span>
                                                        <label className="d-block fw-bold">{data.car2Data.year}</label>
                                                    </div> 
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>

                                    <div className="vs-image">
                                    <picture>
                                        <source srcSet={'/image/vs.png?webp'} type='image/webp'/>
                                        <source srcSet={'/image/vs.png'} type='image/png'/>
                                        <img src={'/image/vs.png'} width="100%" height="100%"/>
                                    </picture>
                                    </div>
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

export async function getServerSideProps () {
    
    const features = await fetch(process.env.REACT_APP_API_HOST+"/api/v2/car/comparison-features");
    const featuresJSON = await features.json();

    const makesResponse = await fetch(process.env.REACT_APP_API_HOST+"/api/v2/car/makes");
    const makes = await makesResponse.json();

    return {
      props: { "comparisonFeatures":featuresJSON, "makes":makes}, // will be passed to the page component as props
    }
}

export default Compare