import React, { useState } from "react";

const ItemList = () => {
	const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
	const [emptyList, setEmptyList] = useState(false);
	const [clearList, setClearList] = useState(true);

	const handleRemoveItem = (index) => {
		// Create a copy of the array without the selected item
		const updatedItems = [...items.slice(0, index), ...items.slice(index + 1)];

		setItems(updatedItems);
		console.log(items);
		if (updatedItems.length < 1) {
			setEmptyList(true);
			setClearList(false);
		}
	};

	function clearListItems() {
		setItems([]);
		setClearList(false);
		setEmptyList(true);
	}

	function resetList() {
		setItems(["Item 1", "Item 2", "Item 3"]);
		setClearList(true);
		setEmptyList(false);
	}

	return (
		<div>
			<h2>Item List</h2>
			<ul>
				{items.map((item, index) => (
					<li key={index}>
						{item}
						<button onClick={() => handleRemoveItem(index)}>Remove</button>
					</li>
				))}
			</ul>
			{items && clearList ? (
				<button onClick={clearListItems}>clear list</button>
			) : (
				" "
			)}
			{emptyList ? <button onClick={resetList}>reset</button> : " "}
		</div>
	);
};

export default ItemList;
