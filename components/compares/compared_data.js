import React, { Component } from "react";

export default class ComparedData extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="compared_data mt-2">
                <div className="title">
                    <picture>
                    <source srcSet={this.props.data.image+'?webp'} type='image/webp'/>
                    <source srcSet={this.props.data.image} type='image/jpeg'/>
                    <img src={this.props.data.image} />
                    </picture>
                    <h6 className="mb-0 ms-2 d-inline-block text-uppercase fw-bold">{this.props.data.categoryName}</h6>
                </div>
                {this.props.threecars 
                ? 
                <div className="details p-2">
                    {this.props.data.details&&this.props.data.details.map((item, index) =>
                        <>
                        <div className="detail_item pt-2 pb-2">
                            <div className="row" >
                                <div className="col-md-4 col-3 car1_detail item fs-7"></div>
                                <div className="col-md-4 col-6 detail_name item fs-7">{item.name}</div>
                                <div className="col-md-4 col-3 car2_detail item fs-7"></div>
                            </div>
                        </div>
                        <div className="detail_item pt-2 pb-2">
                            <div className="row">
                                <div className="col-md-4 col-4 car1_detail item fs-7">{item.car1}</div>
                                <div className="col-md-4 col-4 car2_detail item fs-7">{item.car2}</div>
                                <div className="col-md-4 col-4 car3_detail item fs-7">{item.car2}</div>
                            </div>

                        </div>
                        </>
                    )}
                </div>
                :
                <div className="details p-2">
                    {this.props.data.details&&this.props.data.details.map((item, index) =>
                        <div className="detail_item pt-2 pb-2">
                            <div className="row">
                                <div className="col-md-4 col-3 car1_detail item fs-7">{item.car1}</div>
                                <div className="col-md-4 col-6 detail_name item fs-7">{item.name}</div>
                                <div className="col-md-4 col-3 car2_detail item fs-7">{item.car2}</div>
                            </div>

                        </div>
                    )}
                </div>
                }
            </div>
        );
    }
}
