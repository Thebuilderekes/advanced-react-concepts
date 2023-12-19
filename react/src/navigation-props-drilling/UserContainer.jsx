import React from "react";
import { useEffect } from "react";
function UserContainer({ userName, handleNameChange }) {
	useEffect(() => {
		console.log("this is userName:", userName);
	}, [userName]);

	return (
		<div>
			<h1>{userName ? "hello" : " "}</h1>
			<h2>{userName}</h2>
			<button onClick={handleNameChange}>
				{userName ? "log in" : "log out"}
			</button>
		</div>
	);
}

export default UserContainer;
