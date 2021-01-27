import React from "react";

export default function MainContentGridProjectsTableThead(props) {
	
	return (
		<thead>
			<tr>
				{props.theadTitle.map((v, i) => {
					return <td key={i}>{v}</td>
				})}
			</tr>
		</thead>
	);
}
