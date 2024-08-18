import React from "react";

export function InputBar({ value, onChange }) {
  return (
    <div>
      <input type="number" value={value} onChange={onChange} />
    </div>
  );
}

export function Evaluate({ value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      <option value="*"> * </option>
      <option value="-"> - </option>
      <option value="+"> + </option>
      <option value="/"> / </option>
    </select>
  );
}
