import React from "react";
import SidebarMenuLi from "./SidebarMenuLi";

export default function SidebarMenu() {
	return (
		<div className="sidebar-menu">
			<ul>
				<SidebarMenuLi
					activeMenuElement="active"
					menuIcon="las la-igloo"
					menuText="Dashboard"
				/>
				<SidebarMenuLi menuIcon="las la-users" menuText="Customers" />
				<SidebarMenuLi
					menuIcon="las la-clipboard-list"
					menuText="Projects"
				/>
				<SidebarMenuLi
					menuIcon="las la-shopping-bag"
					menuText="Orders"
				/>
				<SidebarMenuLi menuIcon="las la-receipt" menuText="Inventory" />
				<SidebarMenuLi
					menuIcon="las la-user-circle"
					menuText="Account"
				/>
				<SidebarMenuLi
					menuIcon="las la-clipboard-list"
					menuText="Tasks"
				/>
			</ul>
		</div>
	);
}
