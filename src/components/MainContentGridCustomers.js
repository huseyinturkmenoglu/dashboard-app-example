import React from 'react'
import MainContentGridCustomersHeader from './MainContentGridCustomersHeader';
import MainContentGridCustomersBody from './MainContentGridCustomersBody';

export default function MainContentGridCustomers() {
    return (
        <div className="customers">
			<div className="card">
				<MainContentGridCustomersHeader />
				<MainContentGridCustomersBody />
			</div>
		</div>
    )
}
