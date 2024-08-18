import React from "react";

export function SearchBar({ onUpdateSearch }) {
  return (
    <div>
      <input type="search" onChange={onUpdateSearch} />
    </div>
  );
}

export function Overview({ currentTerm }) {
  return (
    <div>
      <p> your search term is {currentTerm}</p>
    </div>
  );
}
