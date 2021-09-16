import React, { Component } from 'react';
import Link from 'next/link'
import Image from 'next/image'

export default class CompareItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Link href={this.props.compareData.url} >
            <div className="compare-item" style={{cursor:"pointer"}}>
                <div className="row">
                    <div className="col-6 compare-item-left">
                        <div className="item-img">
                        <Image
                            src={'/images/'+this.props.compareData.car1Image} 
                            alt="Car comparison blog" 
                            width='100%' 
                            height='100%' 
                            loading="lazy"
                            layout="responsive"
                            quality="50"
                            placeholder="empty"
                            /> 
                            
                        </div>
                        <div className="value">
                            <label className="d-block fw-bold">{(this.props.compareData.car1Make +" "+this.props.compareData.car1Model).replace(/(.{17}).+/, "$1...")}</label>
                            <span className="fs-8">{this.props.compareData.car1Trim.replace(/(.{22}).+/, "$1...")}</span>
                        </div>
                    </div>
                    <div className="col-6 compare-item-right">
                        <div className="item-img">
                        <Image
                            src={'/images/'+this.props.compareData.car2Image} 
                            alt="Car comparison blog" 
                            width='100%' 
                            height='100%' 
                            loading="lazy"
                            layout="responsive"
                            quality="50"
                            placeholder="empty"
                            /> 
                            
                        </div>
                        <div className="value">
                            <label className="d-block fw-bold">{(this.props.compareData.car2Make +" "+this.props.compareData.car2Model).replace(/(.{17}).+/, "$1...")}</label>
                            <span className="fs-8">{this.props.compareData.car2Trim.replace(/(.{22}).+/, "$1...")}</span>
                        </div>
                    </div>
                </div>

                <div className="vs-image">
                    <picture>
                    <source srcSet={require('../../public/image/vs-orange.png?webp')} type='image/webp' />
                    <source srcSet={require('../../public/image/vs-orange.png')} type='image/png'/>
                    <img src={require('../../public/image/vs-orange.png')} width="100%" height="100%"/>
                    </picture>
                </div>
            </div>
            </Link>
        )
    }
}

  