import React from "react";

export class Button extends React.Component {
    render() {
        return (
            <a href={this.props.link} target={this.props.target}>
                <button
                    className={this.props.className}
                    value={this.props.value}
                    type={this.props.type}
                >
                    <p>{this.props.label}</p>
                </button>
            </a>
        );
    }
}
