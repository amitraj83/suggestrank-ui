import React, {useState} from 'react';
import ToggleSwitch from '../basic/toggle_switch'

function FeaturesItem (props) {
    const [checkedState, setCheckedState] = React.useState(props.item.included);

    const setIncluded = () => {
        setCheckedState(!checkedState);
        props.item.included =!checkedState;
    }

    return (
        <div className="features-item">
            <div className="row">
                <div className="col-9 pe-0">
                    <input onClick={setIncluded} className="form-check-input" type="checkbox" value="" id="defaultCheck1" checked={checkedState}/>
                    <label className="fs-7 ms-2">{props.item.displayName}</label>
                </div>
                <div className="col-3 text-end ps-0">
                        {/* <div className="form-check form-switch position-relative">
                        <input className="form-check-input" type="checkbox" />
                    </div>  */}

                    <ToggleSwitch Name={props.item}/>
                </div>
            </div>
        </div>
    )
    
}

export default FeaturesItem;