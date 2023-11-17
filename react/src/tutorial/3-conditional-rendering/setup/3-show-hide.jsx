import React, { useState } from "react";

const ToggleHeading = () => {
  const [showHeading, setShowHeading] = useState(false);

  const toggleHeading = () => {
    setShowHeading(!showHeading);
  };

  return (
    <div>
      <button onClick={toggleHeading}>Toggle Heading</button>
      {showHeading && <Heading />}
    </div>
  );
};

const Heading = () => {
  return <h1>This is the heading</h1>;
};

export default ToggleHeading;
