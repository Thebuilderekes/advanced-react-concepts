 import React from 'react'



export function SearchBar({onSearchUpdate}) {
   return (
     <div>
    <input type="search" onChange={onSearchUpdate} />
    </div>
   )
 }


 export function Overview({currentTerm}) {
   return (
     <div>
       <p> your search term is {currentTerm}</p>
     </div>
   )
 }

