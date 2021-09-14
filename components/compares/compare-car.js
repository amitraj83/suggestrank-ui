import React, { Component } from 'react';

export default class CompareResultCar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

render() {
    return (<div >
    
    
    <div  className="item-img mb-3" >
        <picture>
            <source  srcSet={require('../../public/image/medal-'+this.props.data.rank+'.png?webp')} type="image/webp" 
            style={{position:'absolute', height:"40px", width:"40px", marginLeft:"-40px"}}  /> 
            <source srcSet={require('../../public/image/medal-'+this.props.data.rank+'.png')} type="image/png" 
            style={{position:'absolute', height:"40px", width:"40px", marginLeft:"-40px"}}  /> 
            <img style={{position:'absolute', height:"40px", width:"40px", marginLeft:"-40px"}} 
            src={'../../public/image/medal-'+this.props.data.rank+'.png'} />
        </picture>
        <img src={this.props.data.image} />
        
    </div>
    <div className="value mb-4">
        <label className="d-block fw-bold">{this.props.data.make+" "+this.props.data.model}</label>
        <span className="fs-8">{this.props.data.variant+" "+this.props.data.year}</span>
    </div>
    
</div>)
}
}