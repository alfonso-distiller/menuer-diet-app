import React from "react";
import classes from "./cockpit.css";

const CockPit = props => {
  const assignedClasses = [];
  let btnClass = "";

  if(props.showPersons) {
    btnClass = classes.red
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div>
      <h1>Hi, Im a react app</h1>
      <p className={assignedClasses.join(" ")}>
        Start editing to see some magic happen!
      </p>
      <button className={btnClass} onClick={props.click}>
        Switch Name
      </button>
    </div>
  );
};

export default CockPit;
