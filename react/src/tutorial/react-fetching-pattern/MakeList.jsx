import React from "react";

const family = [
  //{member : "ebi ", age: 38},
  //{member: "Ekeopre", age: 35},
  //{member: "yanate", age: 27}
];

function List({ data, listItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item) => (
        <li key={item.member}>{listItem(item)}</li>
      ))}
    </ul>
  );
}

export default function GetData() {
  return (
    <div className="App">
      <List
        data={family}
        renderEmpty={<p>This list is empty</p>}
        listItem={(item) => <>{item.member}</>}
      />
    </div>
  );
}
