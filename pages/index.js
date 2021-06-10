import React from 'react'
import CompareForm from '../components/compares/compare-form'
import CompareItem from '../components/compares/compare-item'
import ServiceItem from '../components/services/serice-item'
import PopularArticle from '../components/articles/popular-article'
import RecentArticle from '../components/articles/recent-article'

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        console.log("Transfered props: "+JSON.stringify(props));
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
                "popularArticles":[
                                {"imageUrl":"https://suggestrank.com/blog/wp-content/uploads/2021/03/matteo-catanese-PI8Hk-3ZcCU-unsplash.jpg", "date":"14 May 2021", "title":"CarGurus – No. 1 reviews compilation from 1000s of customers Reviews", "content":"CarGurus is an online marketplace for cars and other vehicles. It lists cars from the local dealers. Buyers can search such cars on CarGurus marketplace, narrow down their search and find out a perfect car for them. Then, the buyer is connected with the dealer to finalize the transactions and delivery."},
                                {"imageUrl":"https://suggestrank.com/blog/wp-content/uploads/2021/03/arvid-skywalker-ZvVNJOnV3ho-unsplash.jpg", "date":"15 May 2021", "title":"Used cars for sale – 11 facts, last one is the most important", "content":"There are always a number of for/against arguments about buying a used car. Regardless of such arguments, most of the people find used cars for sale and buy it as their first car. Following are some interesting facts that will help you to make an informed decision before buying a used car."},
                                {"imageUrl":"https://suggestrank.com/blog/wp-content/uploads/2021/03/gabriel-gurrola-u6BPMXgURuI-unsplash.jpg", "date":"16 May 2021", "title":"How much is my EV battery life?", "content":"The lifespan is mostly dependent on the battery of the vehicle. Apart from the battery, rest of the electric vehicle’s component’s lifespan is usually comparable to other conventional cars. So, the ultimate question is how long does the batteries of an electric vehicle survive."},
                                {"imageUrl":"https://suggestrank.com/blog/wp-content/uploads/2021/03/jasper-geys-NyRe1Mj1pm4-unsplash.jpg", "date":"17 May 2021", "title":"3 way of EV battery charging – last one is amazing", "content":"EV Battery is one of the main components of an electric vehicle. One of the questions comes to our mind is that what are the different types of charging an electric vehicle. There is no standard way to charge an EV battery which is being followed by all EV manufacturers. However, following three ways a battery can be charged."}
                ],
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
        console.log(this.state.popularComparisonsPage);
        await this.setState({popularComparisonsPage: this.state.popularComparisonsPage + 1})
        console.log(this.state.popularComparisonsPage);
        const res = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_HOST+"/api/v2/car/popular-comparisons?page="+this.state.popularComparisonsPage);
        const comps = await res.json();
        
        console.log("Next Comps: "+JSON.stringify(comps));
        this.setState({ "data": {"popularComparisons":comps} });
    }
    render() {
        return (
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
                        {/* <div className="d-sm-none">
                            <CompareItem compareData={this.state.data.popularComparisons[this.state.compareMActiveNumber]}/>
                        </div> */}
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
                                <p className="fs-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada nisl in elit 
                                ullamcorper condimentum. Aliquam enim metus, egestas quis libero quis, iaculis volutpat 
                                felis.</p>
        
                                <p className="fs-7">Nunc nulla dui, mollis ac justo in, dictum porttitor dolor. Vivamus non pulvinar metus, a 
                                blandit erat. Integer eget pharetra orci. Nulla sapien libero, consequat eget leo quis, 
                                vehicula sodales mauris. Proin magna lacus, condimentum et sapien a, volutpat scelerisque 
                                augue. Morbi quam tortor, accumsan pharetra diam id, commodo sodales turpis. Nam et 
                                rutrum mi.</p>
        
                                <p className="fs-7">Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam elementum est 
                                quis odio mollis convallis. Maecenas interdum dui venenatis leo tincidunt, sit amet laoreet 
                                dolor varius. Sed placerat feugiat justo ut elementum. Mauris euismod nulla eget mi 
                                fermentum varius.</p>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <ServiceItem reverse={true}/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <ServiceItem/>
                                    </div>
        
                                </div>
                                <div className="row flex-row-reverse">
                                    
                                    <div className="col-md-6 mb-3">
                                        <ServiceItem reverse={true}/>
                                    </div>
        
                                    <div className="col-md-6 mb-3">
                                        <ServiceItem/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="section text-end section-action">
                <div className="container">
                    <h1>Are you confused <br/>between multiple cars to<br/>choose from?</h1>
                    <h4>Our car comparison tool helps you with <br/>clear difference between your chosen cars.</h4>
        
                    <button className="btn-compare">Compare</button>
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
                                        <div className="col-md-6 mb-2">
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
        )
    }
  
}


export async function getStaticProps() {
    const res = await fetch(process.env.REACT_APP_API_HOST+"/api/v2/car/makes");
    const makes = await res.json();
    
    const comparisonsResults = await fetch(process.env.REACT_APP_API_HOST+"/api/v2/car/popular-comparisons");
    const comparisons = await comparisonsResults.json();
  
    return {
      props: {"makes":makes, "popularComparisons":comparisons}, // will be passed to the page component as props
      
    }
  }