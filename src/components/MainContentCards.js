import React from "react";
import MainContentCard from "./MainContentCard";
export default function MainContentCards() {
	return (
		<div className="cards">
			<MainContentCard 
				cardCount="54"
				cardName="Customers"
				cardIcon="las la-users"
			/>
			<MainContentCard
				cardCount="79"
				cardName="Projects"
				cardIcon="las la-clipboard"
			/>
			<MainContentCard
				cardCount="124"
				cardName="Orders"
				cardIcon="las la-shopping-bag"
			/>
			<MainContentCard
				cardCount="$6k"
				cardName="Income"
				cardIcon="lab la-google-wallet"
			/>
		</div>
	);
}
