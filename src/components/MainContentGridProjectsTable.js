import React, { Component } from "react";
import MainContentGridProjectsTableTbody from "./MainContentGridProjectsTableTbody";
import MainContentGridProjectsTableThead from "./MainContentGridProjectsTableThead";

export default class MainContentGridProjectsTable extends Component {
	render() {
		return (
			<div className="table-responsive">
				<table width="100%">
					<MainContentGridProjectsTableThead {...this.props.tableInfo}/>
					<MainContentGridProjectsTableTbody {...this.props.tableInfo}/>
				</table>
			</div>
		);
	}
}
