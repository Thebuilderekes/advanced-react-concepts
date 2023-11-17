import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
	const [button, setButton] = useState(true);

	useEffect(() => {
		return () => {
			console.log("useEffect cleanup");
		};
	}, []);

	return (
		<div>{button ? <h2>useEffect cleanup</h2> : <h2>button found</h2>}</div>
	);
};

export default UseEffectCleanup;
