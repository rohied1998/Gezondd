import React from "react";
import s from "./index.module.css";

export class Button extends React.Component {
    render() {
        return (
            <a href={this.props.link} target={this.props.target}>
                <button className={this.props.className}>{this.props.label}</button>
            </a>
        );
    }
}
