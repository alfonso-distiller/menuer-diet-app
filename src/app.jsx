import React, { Component } from "react";
import Person from "./person/person.jsx";

export default class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 30 },
      { name: "Manu", age: 13 },
      { name: "Mario", age: 15 }
    ],
    showPersons: false
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 30 },
        { name: event.target.value, age: 13 },
        { name: "Mario", age: 27 }
      ]
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  deletePersonHandler = index => {
    const persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}
