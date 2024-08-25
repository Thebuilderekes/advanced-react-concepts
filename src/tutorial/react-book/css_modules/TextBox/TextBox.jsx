
import React from "react";

import classes from './TextBox.module.css'
const Text = ({ children, cssClasses }) => {
  return (
    <div>
      <p className={cssClasses}>{children}</p>
    </div>
  );
};


function Texts(){

  return (
    <div>
      <p>These texts bellow are styled with props while using CSS modules with imported classes from a module.css file </p>

    <Text cssClasses={classes.yellowtext}>This text is styled using CSS modules</Text>
    <Text cssClasses={classes.bluetext}>This text is styled using CSS modules</Text>
    </div>

  )
}

export default Texts;


