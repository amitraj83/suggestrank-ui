import React, { Component } from 'react';

export default class PopularArticle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="article popular">
                <div className="image-wrapper" style={{ backgroundImage: `url(${this.props.articleData.imageUrl})` }}>
                    {/* <img src={this.props.articleData.imageUrl} /> */}
                    <span className="article-date fs-8 fw-bold text-white">{this.props.articleData.date}</span>
                </div>
                <div className="artical-content p-2"> 
                    <div className="article-title">
                        <h6 className="text-dark">
                            {this.props.articleData.title.length < 40 ? this.props.articleData.title : this.props.articleData.title.substr(0,40) + '...'}
                        </h6>
                    </div>
                    <div>
                        <p className="fs-8">
                            {this.props.articleData.content.length < 300 ? this.props.articleData.content : this.props.articleData.content.substr(0,300) + '...'}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}