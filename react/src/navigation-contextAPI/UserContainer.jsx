import React from "react";
import { useContext } from "react";
import { NavbarContext } from "./Navbar";
function UserContainer() {
	const { userName, handleChange } = useContext(NavbarContext);
	return (
		<div>
			<h1>hello</h1>
			<h2>{userName}</h2>
			<button onClick={handleChange}>login</button>
		</div>
	);
}

export default UserContainer;
