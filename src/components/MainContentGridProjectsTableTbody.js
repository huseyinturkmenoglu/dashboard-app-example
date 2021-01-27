import React from "react";

export default function MainContentGridProjectsTableTbody(props) {
	return (
		<tbody>
			{props.tbodyContent.map((v, i) => {
				return (
					<tr key={i}>
						<td>{v.projectTitle}</td>
						<td>{v.department}</td>
						<td>
							<span className={v.statusClass}></span>
							{v.status}
						</td>
					</tr>
				);
			})}
		</tbody>
	);
}
