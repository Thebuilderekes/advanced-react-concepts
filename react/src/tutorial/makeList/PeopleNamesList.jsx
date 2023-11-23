import { data } from "../../data.js";

export default function PeopleNamesList({ person }) {
	return (
		<ul>
			{data.map((person) => (
				<li key={person.id}>{person.name}</li>
			))}
		</ul>
	);
}
