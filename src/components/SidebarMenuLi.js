import React, { Component } from "react";

export default class SidebarMenuLi extends Component {
	render() {
		return (
			<li>
				<a href="/" className={this.props.activeMenuElement}>
					<span className={this.props.menuIcon}></span>
					<span>{this.props.menuText}</span>
				</a>
			</li>
		);
	}
}
