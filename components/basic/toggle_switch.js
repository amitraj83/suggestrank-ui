import React, { Component, useState } from "react";
import styles from './ToggleSwitch.module.scss';

function ToggleSwitch (props) {
   
    const [checkedState, setCheckedState] = React.useState(props.Name.lowerIsBetter == 0 ? true : false);

    return (
        <div className={styles.small_switch + ' ' + styles.toggle_switch}>
            <input
                type="checkbox"
                className={styles.toggle_switch_checkbox}
                onClick={() => {setCheckedState(!checkedState)}}
                name={props.Name.id}
                id={props.Name.id}
                checked={checkedState}
            />
            <label className={styles.toggle_switch_label} htmlFor={props.Name.id}>
                <span className={styles.toggle_switch_inner}  data-yes="Higher" data-no="Lower"/>
                <span className={styles.toggle_switch_switch} data-yes="Higher"/>
            </label>
        </div>
    );
    
}
export default ToggleSwitch;
