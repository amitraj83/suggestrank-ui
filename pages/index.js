import React from 'react'
import CompareForm from '../components/compares/compare-form'
import CompareItem from '../components/compares/compare-item'
import ServiceItem from '../components/services/serice-item'
import PopularArticle from '../components/articles/popular-article'
import RecentArticle from '../components/articles/recent-article'
const { DOMParser } = require('xmldom')
import Head from "next/head";
import Link from 'next/link'

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            popularComparisonsPage:1,
            makes: props.makes,
            data: {
                "make":["Audi", "BMW", "Honda", "Ford"],
                "models":{
                            "Audi":["A3", "A4", "A5"],
                            "BMW":["X5", "X6", "X7"],
                            "Ford":["Focus", "Fiesta"],
                        },
                "variants":[],
                "popularComparisons":props.popularComparisons,
                "popularArticles":props.popularArticles,
                "recentArticles":[
                                {"imageUrl":"https://suggestrank.com/blog/wp-content/uploads/2021/03/matteo-catanese-PI8Hk-3ZcCU-unsplash.jpg", "date":"14 May 2021", "title":"CarGurus – No. 1 reviews compilation from 1000s of customers Reviews", "content":"CarGurus is an online marketplace for cars and other vehicles. It lists cars from the local dealers. Buyers can search such cars on CarGurus marketplace, narrow down their search and find out a perfect car for them. Then, the buyer is connected with the dealer to finalize the transactions and delivery."},
                                {"imageUrl":"https://suggestrank.com/blog/wp-content/uploads/2021/03/arvid-skywalker-ZvVNJOnV3ho-unsplash.jpg", "date":"14 May 2021", "title":"Used cars for sale – 11 facts, last one is the most important", "content":"There are always a number of for/against arguments about buying a used car. Regardless of such arguments, most of the people find used cars for sale and buy it as their first car. Following are some interesting facts that will help you to make an informed decision before buying a used car."},
                                {"imageUrl":"https://suggestrank.com/blog/wp-content/uploads/2021/03/gabriel-gurrola-u6BPMXgURuI-unsplash.jpg", "date":"14 May 2021", "title":"How much is my EV battery life?", "content":"The lifespan is mostly dependent on the battery of the vehicle. Apart from the battery, rest of the electric vehicle’s component’s lifespan is usually comparable to other conventional cars. So, the ultimate question is how long does the batteries of an electric vehicle survive."},
                                {"imageUrl":"https://suggestrank.com/blog/wp-content/uploads/2021/03/jasper-geys-NyRe1Mj1pm4-unsplash.jpg", "date":"14 May 2021", "title":"3 way of EV battery charging – last one is amazing", "content":"EV Battery is one of the main components of an electric vehicle. One of the questions comes to our mind is that what are the different types of charging an electric vehicle. There is no standard way to charge an EV battery which is being followed by all EV manufacturers. However, following three ways a battery can be charged."}
                ]
            }
            
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
        this.setState({ "data": {"popularComparisons":comps} });
    }

    async nextCompare() {
        await this.setState({popularComparisonsPage: this.state.popularComparisonsPage + 1})
        const res = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_HOST+"/api/v2/car/popular-comparisons?page="+this.state.popularComparisonsPage);
        const comps = await res.json();
        
        this.setState({ "data": {"popularComparisons":comps} });
    }
    render() {
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
        <div className="page-home page-wrapper">
            <div className="banner">
                <div className="container">
                    <div className="banner-text-wrapper">
                        <div className="banner-inner">
                            <h1>Are you confused <br/>between multiple cars to<br/>choose from?</h1>
                            <h4>Our car comparison tool helps you with <br/>clear difference between your chosen cars.</h4>
                        </div>
                    </div>
                    <div className="compare-wrapper">
                        <div className="row">
                            <div className="col-md-4 d-lg-block d-none">
                                <div className="compare-img">
                                    <img src="image/car1.png" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="p-4">
                                    <CompareForm make={this.state.makes} models={this.state.data.models} variants={this.state.data.variants}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-background"></div>
            </div>
        
            <div className="section">
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
        
            <div className="section bg-white">
                <div className="container">
                    <div className="section-title">
                        <h4>What we offer</h4>
        
                        
                    </div>
        
                    <div className="section-content">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="fs-7">Comparison of two things is not always easy. Moreover, a comparison results 
                                may be useful for one person but not for other. Its because different persons have different
                                comparison criteria.</p>
        
                                <p className="fs-7">SuggestRank presents an innovative Car Comparison tool which lets you customize 
                                your own comparison. You can define your own car comparison criteria, select cars and compare. The
                                results will be very specific to your needs. It also suggest the ranking between the cars so that
                                you can easily decide which car is better. </p>
        
                                <p className="fs-7">1000s of people are using this tool every day to check which car is better. So, 
                                before you buy your next car, compare cars with SuggestRank and find out which car is better for your
                                needs. </p>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <ServiceItem data={{"title":"Cars Comparison", "description":"Select car compairson criteria such as engine size, carbon emission, number of cylinders, etc., and do a comparison. You can compare cars side by side and compare each specs. Also explains why a car is better than other one."}} reverse={true}/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <ServiceItem data={{"title":"Cars Ranking", "description":"Unlike other car comparisons, we do the ranking of the cars as well. So, you get a decision automatically about which car is better. We do rankings based on several specs and then present a collective rank of cars."}} />
                                    </div>
        
                                </div>
                                <div className="row flex-row-reverse">
                                    
                                    <div className="col-md-6 mb-3">
                                        <ServiceItem data={{"title":"Cars Data", "description":"If you are looking for cars data, we would be happy to share. We have data for more than 100K cars. Each car has more than 30+ specs. Please contact us at suggestrank@gmail.com"}}  reverse={true}/>
                                    </div>
        
                                    <div className="col-md-6 mb-3">
                                        <ServiceItem data={{"title":"Cars Specs", "description":"We have possibly all makes and models. So, if you are looking for the car specs of any car, we have them for you. You can check the specs related to Engine, dimensions, power, emission, etc."}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="section text-end section-action">
                <div className="container">
                    <h1>Are you planning <br/>to buy a new car,<br/>compare cars today.</h1>
                    <h4>Our car comparison tool helps you with <br/>clear difference between your chosen cars.</h4>
        
                    <Link href="/compare/cars"><button className="btn-compare">Compare</button></Link>
                </div>
            </div>
        
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="section">
                            <div className="section-title">
                                <h4>Popular Articles</h4>
                            </div>
            
                            <div className="section-content">
                                <div className="row">
                                    {this.state.data.popularArticles&&this.state.data.popularArticles.map((item, index) =>
                                        <div style={{cursor:"pointer"}} className="col-md-6 mb-2">
                                            <PopularArticle articleData={item} key={index}/>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="section recent-article">
                            <div className="section-title title-left">
                                <h4>Recent Articles</h4>
                            </div>
            
                            <div className="section-content">
                                
                                {this.state.data.recentArticles&&this.state.data.recentArticles.map((item, index) =>
                                    <div className="mb-2">
                                        <RecentArticle articleData={item} key={index}/>
                                    </div>
                                )}
            
                                <div className="btn-wrapper mt-3">
                                    <button className="btn-compare">View All Articles</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        )
    }
  
}


export async function getStaticProps() {
    const res = await fetch(process.env.REACT_APP_API_HOST+"/api/v2/car/makes");
    const makes = await res.json();
    
    const comparisonsResults = await fetch(process.env.REACT_APP_API_HOST+"/api/v2/car/popular-comparisons");
    const comparisons = await comparisonsResults.json();

    const postsResult = await fetch("https://suggestrank.com/blog/wp-json/wp/v2/posts?&page=1&per_page=4&_embed");
    const posts = await postsResult.json();
    var postsArray = [];
    for (var i = 0; i < posts.length; i++) {
        var post = posts[i];
        var imageUrl = post.qubely_featured_image_url.portraits[0];
        var date = new Date(post.date).toDateString();
        var title = post.title.rendered.replace(/\s\s+/g, ' ').replace(/<[^>]+>/g, '').replace("&#8211;", " - ");
        // var content = new DOMParser().parseFromString(post.content.rendered.replace(/\s\s+/g, ' '), "text/html").documentElement.textContent.replace(/\n/g, '').replace(/(.{2000}).+/, "$1...");
        var content = post.content.rendered.replace(/\s\s+/g, ' ').replace(/<[^>]+>/g, '');
        var link = post.link;
        postsArray.push({"imageUrl":imageUrl, "date":date, "title":title, "content":content, "link":link});
    }
    
    return {
      props: {"makes":makes, "popularComparisons":comparisons, "popularArticles":postsArray}, // will be passed to the page component as props
      
    }
  }