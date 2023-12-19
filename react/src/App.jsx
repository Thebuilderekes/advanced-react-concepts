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
//import Navbar from "./navigation-contextAPI/Navbar";
//import People from "./globalContext/people.jsx";
import { useGlobalContext } from "./globalContext/context";
import People from "./globalContext/people";
function App() {

  const {userName} = useGlobalContext()
	return (
		<div className="container">
      <h1>hello {userName}</h1>
      <People userName={userName}/>
		</div>
	);
}

export default App;
