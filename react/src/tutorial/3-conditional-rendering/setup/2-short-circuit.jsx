import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
	const [firstValue, setFirstValue] = useState("hello" || "");
	// const secondValue = te && "hello world";
	return (
		<>
			<h2>{firstValue || "no VALUE"}</h2>
		</>
	);
};

export default ShortCircuit;
