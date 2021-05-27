import React from 'react'
import CompareForm from '../components/compares/compare-form'
import CompareItem from '../components/compares/compare-item'
import ServiceItem from '../components/services/serice-item'
import PopularArticle from '../components/articles/popular-article'
import RecentArticle from '../components/articles/recent-article'

export default class Home extends React.Component {

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
                                    <CompareForm make={this.state.data.make} models={this.state.data.models} variants={this.state.data.variants}/>
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
