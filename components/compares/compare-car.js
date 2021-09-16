import React, { Component } from 'react';
import Image from 'next/image'

export default class CompareResultCar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
render() {
    return (<div >
    
    
    <div  className="item-img mb-3" >
    <Image 
            src={this.props.data.image} 
            alt="Car" 
            width='90%' 
            height='70%' 
            loading="lazy"
            layout="responsive"
            quality="50"
            placeholder="empty"
            className="absDiv"
            
            /> 
        <div className="absDiv" style={{top:"30px", width:"40px", height:"40px"}}>
        
        <Image
        src={'/image/medal-'+this.props.data.rank+'.png'} 
        width="100"
        height="100%"
        loading="lazy"
        placeholder="empty"
        quality="75"
        alt="Car rank img" 
        layout="responsive"/>
        
        
            </div>
        
        
        
    </div>
    <div className="value mb-4">
        <label className="d-block fw-bold">{this.props.data.make+" "+this.props.data.model}</label>
        <span className="fs-8">{this.props.data.variant+" "+this.props.data.year}</span>
    </div>
    
</div>)
}
}