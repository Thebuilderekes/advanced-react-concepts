function SmallPersonListItem({ person }) {
	const { name, age } = person;
	return (
		<>
			<li className="list-item">
				Name: {name} <br />
				Age: {age} <br />
			</li>
		</>
	);
}

export default SmallPersonListItem;
