import React, { Component } from 'react';
import ToggleSwitch from '../basic/toggle_switch'

export default class FeaturesItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="features-item">
                <div className="row">
                    <div className="col-9 pe-0">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label className="fw-bold fs-7 ms-2">{this.props.item}</label>
                    </div>
                    <div className="col-3 text-end ps-0">
                        {/* <div className="form-check form-switch position-relative">
                            <input className="form-check-input" type="checkbox" />
                        </div> */}

                        <ToggleSwitch Name={this.props.item}/>
                    </div>
                </div>
            </div>
        )
    }
}