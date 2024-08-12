import React from "react";

export default function Learning({ heading, subHeading, bodyText }) {
	return (
		<div>
			<h1>{heading}</h1>
			<h2>{subHeading}</h2>
			<p>{bodyText}</p>
		</div>
	);
}
