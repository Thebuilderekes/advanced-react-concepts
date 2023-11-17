import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [user, setUser] = useState(null);

	async function fetchUser() {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				setIsLoading(false);
				setIsError(true);
				return;
			}
			const user = await response.json();
			setUser(user);
			console.log(user);
			//
		} catch (error) {
			setIsError(true);
			console.log(error);
		}
		setIsLoading(false);
	}
	useEffect(() => {
		fetchUser();
	}, []);

	if (isLoading) {
		return <h2>Loading</h2>;
	}

	if (isError) {
		return <h2>there was error</h2>;
	}
	const { avatar_url, name, bio } = user;
	//user has to be placed after conditions because the conditions is what decides the value of user but at the point above the conditions, user state is set to null.
	return (
		<div>
			<img
				style={{ width: "150px", borderRadius: "50%" }}
				src={avatar_url}
				alt={name}
			/>
			<h2>{name}</h2>
			<p>{bio}</p>
		</div>
	);
};

export default MultipleReturns;
