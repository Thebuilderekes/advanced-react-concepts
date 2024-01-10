import React from "react";

export default function NumberedList({
	items,
	resourceName,
	itemComponent: ItemComponent,
}) {
	return (
		<ul className="people-list">
			{items.map((item, i) => (
				<div key={i}>
					<h2>{i + 1}</h2>
					<ItemComponent key={item.id} {...{ [resourceName]: item }} />
				</div>
			))}
		</ul>
	);
}
