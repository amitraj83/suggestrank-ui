import React, { Component } from "react";

export default class ComparedData extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="compared_data mt-2">
                <div className="title">
                    <img src={this.props.data.image} />
                    <h6 className="mb-0 ms-2 d-inline-block text-uppercase fw-bold">{this.props.data.categoryName}</h6>
                </div>

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
            </div>
        );
    }
}
