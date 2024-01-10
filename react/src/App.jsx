// import React from "react";
//import UseEffectCleanup from "./tutorial/2-useEffect/final/2-useEffect-cleanup";
// import ShortCircuit from "./tutorial/3-conditional-rendering/setup/2-short-circuit";
//import GetData from "./tutorial/react-fetching-pattern/MakeList.jsx"
//import ControlledInputs from "./tutorial/4-forms/final/2-multiple-inputs";
//import Example from "./tutorial/9-custom-hooks/final/1-fetch-example.jsx";
// import MyComponent from "./tutorial/3-conditional-rendering/setup/MyComponent.jsx";
// import { Home, About } from "./tutorial/folder-structure/pages/index";
// import People from "./tutorial/makeList/People";
// import UseStateEffect from "./tutorial/2-useEffect/setup/1-useEffect-basics"
// import UseEffectFetchData from "./tutorial/2-useEffect/final/3-useEffect-fetch-data";
// import MultipleReturns from "./tutorial/3-conditional-rendering/setup/1-multiple-returns";
// import NavLinks from "./navigation-props-drilling/Navlinks";
//import People from "./globalContext/people.jsx";
//import { useGlobalContext } from "./globalContext/context";
//import People from "./globalContext/people";
//import ItemList from "./listDisplay/List.jsx";
// import Navbar from "./tutorial/11-react-router/final/Navbar";

//import UseEffChallenge from "./tutorial/2-useEffect/exercise/UseEffChallenge";
//import GetCyptoData from "./tutorial/2-useEffect/exercise/GetCryptoData.jsx";
//import MyApp from "./tutorial/9-custom-hooks/exercises/usePrevious.jsx";
// import YellowButton from "./tutorial/0-JSX/YellowButton.jsx";
// import {
//   DeleteButton,
//   SaveButton,
//   GreetButton,
// } from "./tutorial/0-JSX/Buttons/Buttons.jsx";
import { people } from "./tutorial/react-design-pattern/peopleLayoutComponents/people.js";
import RegularList from "./tutorial/react-design-pattern/peopleLayoutComponents/RegularList.jsx";
import LargePersonListItem from "./tutorial/react-design-pattern/peopleLayoutComponents/LargePersonListItem.jsx";
import SmallPersonListItem from "./tutorial/react-design-pattern/peopleLayoutComponents/SmallPersonListItem.jsx";
import NumberedList from "./tutorial/react-design-pattern/peopleLayoutComponents/NumberedList.jsx";
import ActionButton from "./tutorial/styledComponentPractice/Button.jsx";
import HomeScreen from "./tutorial/react-design-pattern/splitScreenComponent/HomeScreen.jsx";
function App() {
	return (
		<div className="container">
			<RegularList
				items={people}
				resourceName="person"
				itemComponent={LargePersonListItem}
			/>

			<NumberedList
				items={people}
				resourceName="person"
				itemComponent={SmallPersonListItem}
			/>
			<ActionButton />
			<HomeScreen />
		</div>
	);
}

export default App;
