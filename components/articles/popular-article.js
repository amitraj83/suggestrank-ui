import React, { Component } from 'react';
import Link from 'next/link'
import Image from 'next/image'

export default class PopularArticle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Link href={this.props.articleData.link} >
            <div className="article popular">
                {/* <div className="image-wrapper" style={{ backgroundImage: `url(${this.props.articleData.imageUrl})` }}> */}
                <div className="image-wrapper" >
                    <Image 
                    src={this.props.articleData.imageUrl} 
                    alt="Car comparison blog" 
                    width='100%' 
                    height='100%' 
                    loading="lazy"
                    layout="responsive"
                    quality="75"
                    placeholder="empty"
                    
                    /> 
                
                    
                    <span className="article-date fs-8 fw-bold text-white">{this.props.articleData.date}</span>
                </div>
                <div className="artical-content p-2"> 
                    <div className="article-title">
                        <h6 className="text-dark">
                            {this.props.articleData.title.length < 50 ? this.props.articleData.title : this.props.articleData.title.substr(0,50) + '...'}
                        </h6>
                    </div>
                    <div>
                        <p className="fs-8">
                            {this.props.articleData.content.length < 350 ? this.props.articleData.content : this.props.articleData.content.substr(0,350) + '...'}
                        </p>
                    </div>
                </div>
            </div>
            </Link>
        )
    }
}