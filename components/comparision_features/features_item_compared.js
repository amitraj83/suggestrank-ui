import React, { Component } from 'react';

export default class FeaturesItemCompared extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={`features-item-compared ${this.props.data.higher ? "higher" : ""}`}>
                <span className="title fw-bold text-uppercase">{this.props.data.name}</span>
                {console.log("Higher : "+this.props.data.higher)}
                { this.props.data.higher
                    ?   <label className="text-uppercase fw-bold">
                            Higher is better
                        </label>
                    :   <label className="text-uppercase fw-bold">
                            Lower is better
                        </label>
                }

                { this.props.data.higher
                    ?   <i  class="fal fa-long-arrow-up"></i>
                    :   <i style={{color:"red"}} class="fal fa-long-arrow-down"></i>
                }


                
            </div>
        )
    }
}