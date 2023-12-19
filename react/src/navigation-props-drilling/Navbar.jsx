import { useState, useEffect } from "react";
import NavLinks from "./Navlinks.jsx";

export default function Navbar() {
	const [userName, setName] = useState("");

	function handleNameChange() {
		setName("king");
	}

	useEffect(() => {
		console.log("this is navbar userName:", userName);
	}, []);
	return (
		<>
			<NavLinks userName={userName} handleNameChange={handleNameChange} />
		</>
	);
}
