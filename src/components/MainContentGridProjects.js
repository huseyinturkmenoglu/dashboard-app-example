import React, { Component } from "react";
import MainContentGridProjectsCardHeader from "./MainContentGridProjectsCardHeader";
import MainContentGridProjectsTable from "./MainContentGridProjectsTable";

export default class MainContentGridProjects extends Component {
	render () {
		return (
			<div className="projects">
				<div className="card">
					<MainContentGridProjectsCardHeader cardHeader={this.props.projectCard.cardHeader} />
					<div className="card-body">
						<MainContentGridProjectsTable tableInfo={this.props.projectCard.tableInfo} />
					</div>
				</div>
			</div>
		);
	}
}
