import { useState, createContext } from "react";
import NavLinks from "./Navlinks.jsx";

export const NavbarContext = createContext();

export default function Navbar() {
	const [userName, setName] = useState("");

	function handleChange() {
		setName("king");
	}

	return (
		<NavbarContext.Provider value={{ userName, handleChange }}>
			<>
				<NavLinks />
			</>
		</NavbarContext.Provider>
	);
}
