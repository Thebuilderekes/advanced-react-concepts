import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

// second argument

const UseEffectFetchData = () => {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const response = await fetch(url);

		const users = await response.json();
		setUsers(users);
		console.log(users);
	};

	// The fetch function in JavaScript does not treat a 404 HTTP status code as an error by default because HTTP status codes are not always indicative of errors in the context of HTTP communication.

	// HTTP status codes are used to indicate the result of an HTTP request. While 404 commonly represents "Not Found," it doesn't necessarily indicate a network error or a problem with the request itself. Instead, it signifies that the requested resource was not found on the server.

	// In many cases, a 404 status code is a valid and expected response when attempting to access a resource that doesn't exist. For example, if you request a specific page on a website, and that page doesn't exist, the server will respond with a 404 status code to inform you that the requested page is not available.

	// However, if you want to treat a 404 response as an error in your JavaScript code, you can do so by explicitly checking the response.ok property and throwing an error if it's false.

	// const getUsers = async () => {
	//   const response = await fetch(url);
	//  try (if response.ok){

	//       const users = await response.json();
	//      setUsers(users);
	//  }catch(error) {
	//    throw new Error(error.message)
	// }

	//}

	//with fetch you need to set the condition fro the response but with axios the fuctionality works without the if condition and the catch runs

	useEffect(() => {
		getUsers();
	}, []);
	return (
		<>
			<h3>github users</h3>
			<ul className="users">
				{users.map((user) => {
					console.log(user);
					const { id, login, avatar_url, html_url } = user;
					return (
						<li key={id}>
							<img src={avatar_url} alt={login} />
							<div>
								<h4>{login}</h4>
								<a href={html_url}>profile</a>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default UseEffectFetchData;
