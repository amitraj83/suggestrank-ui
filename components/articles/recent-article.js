import React, { Component } from 'react';

export default class RecentArticle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article recent">
                <div className="image-wrapper">
                    <picture>
                        <source srcSet={this.props.articleData.imageUrl+'?webp'} type='image/webp'  style={{width:'100%', height:'100%'}}/>
                        <source srcSet={this.props.articleData.imageUrl} type='image/jpeg'  style={{width:'100%', height:'100%'}}/>
                        <img src={this.props.articleData.imageUrl}  style={{width:'100%', height:'100%'}}/>
                    </picture>
                    <span className="article-date fs-8 fw-bold text-white">{this.props.articleData.date}</span>
                </div>
                <div className="artical-content p-2"> 
                    <div className="article-title">
                        <h6 className="text-dark fs-8 fw-bold">{this.props.articleData.title}</h6>
                    </div>
                    <div>
                        <p className="fs-8 mb-0">
                            {this.props.articleData.content.length < 100 ? this.props.articleData.content : this.props.articleData.content.substr(0,160) + '...'}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}