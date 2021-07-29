import React from "react";

export class Button extends React.Component {
    render() {
        return (
            <a href={this.props.link} target={this.props.target}>
                <button className={this.props.className}>
                    <p>{this.props.label}</p>
                </button>
            </a>
        );
    }
}
