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
        
        <Image style={{position:'absolute', height:"40px", width:"40px", marginLeft:"-40px"}} src={"/image/medal-"+this.props.data.rank+".png"} />
        <Image src={this.props.data.image} layout='fill'/>
        
    </div>
    <div className="value mb-4">
        <label className="d-block fw-bold">{this.props.data.make+" "+this.props.data.model}</label>
        <span className="fs-8">{this.props.data.variant+" "+this.props.data.year}</span>
    </div>
    
</div>)
}
}