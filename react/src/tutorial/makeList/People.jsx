import React from "react";
import PeopleNamesList from "./PeopleNamesList";
import PeopleAge from "./PeopleAge";
function People({ person }) {
	return (
		<div>
			<PeopleNamesList person={person} />
			<PeopleAge person={person} />
		</div>
	);
}

export default People;
