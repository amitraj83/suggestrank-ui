import React, { Component } from "react";
import styles from './ToggleSwitch.module.scss';

export default class ToggleSwitch extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.small_switch + ' ' + styles.toggle_switch}>
                <input
                    type="checkbox"
                    className={styles.toggle_switch_checkbox}
                    name={this.props.Name}
                    id={this.props.Name}
                />
                <label className={styles.toggle_switch_label} htmlFor={this.props.Name}>
                    <span className={styles.toggle_switch_inner}  data-yes="Higher" data-no="Lower"/>
                    <span className={styles.toggle_switch_switch}/>
                </label>
            </div>
        );
    }
}
