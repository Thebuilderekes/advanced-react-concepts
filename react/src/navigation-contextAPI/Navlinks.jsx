import UserContainer from "./UserContainer.jsx";

export default function NavLinks() {
	const links = [
		{
			text: "Home",
			url: "/",
		},

		{
			text: "about",
			url: "/about",
		},
		{
			text: "contact",
			url: "/contact",
		},
		{
			text: "news",
			url: "/news",
		},
	];
	return (
		<>
			<ul>
				{links.map((link) => (
					<li key={link.text}>
						<a href={link.url}>{link.text}</a>
					</li>
				))}
			</ul>

			<UserContainer />
		</>
	);
}
