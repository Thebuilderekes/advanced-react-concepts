import React, { useState, useEffect } from "react";
import { useFetch } from "./2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  const { loading, products } = useFetch(url);

  const listItems = products.map((product, id) => (
    <li key={id}>{product.fields.company}</li>
  ));

  console.log(products);
  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
      <ul>{listItems}</ul>
    </div>
  );
};

export default Example;
