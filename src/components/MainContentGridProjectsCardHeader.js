import React, { Component } from "react";

export default class MainContentGridProjectsCardHeader extends Component {
	render() {
		return (
			<div className="card-header">
				<h3>{this.props.cardHeader.title}</h3>
				<button>
					{this.props.cardHeader.buttonName} <span className="las la-arrow-right"></span>
				</button>
			</div>
		);
	}
}
