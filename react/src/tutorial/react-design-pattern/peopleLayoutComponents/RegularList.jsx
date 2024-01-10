import React from "react";
import "./listItem.css";
export default function RegularList({
	items,
	resourceName,
	itemComponent: ItemComponent,
}) {
	console.log("this is the type of items", typeof items);
	console.log("this is the type of resource", typeof resourceName);
	return (
		<div>
			<ul className="people-list">
				{items.map((item) => (
					<ItemComponent key={item.id} {...{ [resourceName]: item }} />
				))}
			</ul>
		</div>
	);
}
