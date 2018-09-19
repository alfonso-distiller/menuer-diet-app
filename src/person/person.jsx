import React from "react";
import classes from './person.css';

const person = props => {
  const rng = Math.random();
  if(rng > 0.8) {
    throw new Error('Something went wrong');
  }
  return (
    <div className={classes.person}>
      <p onClick={props.click}>
        Im {props.name} and I am {props.age} years old !
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
