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
        
        <img style={{position:'absolute', height:"40px", width:"40px", marginLeft:"-40px"}} src={"/image/medal-"+this.props.data.rank+".png"} />
        <img src={this.props.data.image} />
        
    </div>
    <div className="value mb-4">
        <label className="d-block fw-bold">Kia Sonet</label>
        <span className="fs-8">Rs 7.59lakh</span>
    </div>
    
</div>)
}
}