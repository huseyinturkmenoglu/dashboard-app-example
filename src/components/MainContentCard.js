import React, { Component } from "react";

export default class MainContentCard extends Component {
	render() {
		return (
			<div className="card-single">
				<div>
					<h1>{this.props.cardCount}</h1>
					<span>{this.props.cardName}</span>
				</div>
				<div>
					<span className={this.props.cardIcon}></span>
				</div>
			</div>
		);
	}
}
