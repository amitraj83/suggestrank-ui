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
                    name={this.props.Name.id}
                    id={this.props.Name.id}
                    checked={this.props.Name.lowerIsBetter == 0 ? true : false}
                />
                <label className={styles.toggle_switch_label} htmlFor={this.props.Name.id}>
                    <span className={styles.toggle_switch_inner}  data-yes="Higher" data-no="Lower"/>
                    <span className={styles.toggle_switch_switch} data-yes="Higher"/>
                </label>
            </div>
        );
    }
}
