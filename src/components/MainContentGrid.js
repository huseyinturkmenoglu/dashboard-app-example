import React from "react";
import MainContentGridProjects from "./MainContentGridProjects";
import MainContentGridCustomers from "./MainContentGridCustomers";

export default function MainContentGrid() {
	const tableContentOne = {
		'cardHeader' : {
			'title': "Recent Projects",
			'buttonName': "See All",
		},
		'tableInfo' : {
			theadTitle: ["Project Title", "Department", "Status"],
			tbodyContent: [
				{
					projectTitle: "UI/UX Design",
					department: "UI Team",
					status: "review",
					statusClass: "status review",
				},
				{
					projectTitle: "Web Development",
					department: "Front End",
					status: "in progress",
					statusClass: "status progress",
				},
				{
					projectTitle: "Ushop App",
					department: "Mobile Team",
					status: "pending",
					statusClass: "status pending",
				},
				{
					projectTitle: "Apollo App",
					department: "DevOps",
					status: "pending",
					statusClass: "status pending",
				},
				{
					projectTitle: "Diamond Jewelry ",
					department: "UX Design",
					status: "in progress",
					statusClass: "status progress",
				},
			],
		},
	};

	return (
		<div className="recent-grid">
			<MainContentGridProjects projectCard={tableContentOne} />
			<MainContentGridCustomers />
		</div>
	);
}
