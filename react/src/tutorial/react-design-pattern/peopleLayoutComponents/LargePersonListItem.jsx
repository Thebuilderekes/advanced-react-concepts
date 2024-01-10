import React from "react";

function LargePersonListItem({ person }) {
	const { name, age, hairColor } = person;
	return (
		<>
			<li className="list-item">
				Name: {name} <br />
				Age: {age} <br />
				Hair color: {hairColor}
			</li>
		</>
	);
}

export default LargePersonListItem;
