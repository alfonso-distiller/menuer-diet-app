import React, {Component} from 'react';
import Person from './person/person.jsx';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="11">My hobbies are Racing</Person>
        <Person name="Mario" age="13" />
      </div>
    );
  }
}