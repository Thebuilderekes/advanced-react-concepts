import { useState } from 'react'

import './App.css'
import Learning from './tutorial/react-book/Learning'
import Counter from './tutorial/react-book/Counter'
import LoginForm from './tutorial/react-book/LoginForm'
import {SearchBar, Overview} from  './tutorial/react-book/lift_state/Overview.jsx'

function App() {
 
   const [searchTerm, setSearchTerm] = useState('');
   function updateSearchTermHandler(event) {
     setSearchTerm(event.target.value);
   };

  return (
    <div className="App">  
  <Learning heading="Learning React in depth" subHeading="Getting in depth react Knowledge" bodyText="My Journey to becoming React developer and professional teacher"/>

    <Counter/>
    <LoginForm/>
     <h3>Lifting state up</h3> 
    <SearchBar onSearchUpdate ={updateSearchTermHandler}  />  
    <Overview currentTerm={searchTerm}/>
    </div>
  )
}

export default App
