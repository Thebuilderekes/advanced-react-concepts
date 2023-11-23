import React from "react";
import { data } from "../../data.js";

function PeopleAge({ person }) {
	return (
		<ul>
			{data.map((person) => (
				<li key={person.id}>{person.age}</li>
			))}
		</ul>
	);
}

export default PeopleAge;
