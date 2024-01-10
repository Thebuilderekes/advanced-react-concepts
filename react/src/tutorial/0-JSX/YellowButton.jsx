import React, { useState, useEffect } from "react";

function YellowButton() {
  const [isYellow, setIsYellow] = useState(false);

  const handleClick = () => {
    setIsYellow(!isYellow);
  };

  useEffect(() => {
    document.body.style.backgroundColor = isYellow ? "yellow" : "";
  }, [isYellow]);

  return (
    <button onClick={handleClick}>
      {isYellow ? "Turn Off Yellow" : "Turn On Yellow"}
    </button>
  );
}

export default YellowButton;
