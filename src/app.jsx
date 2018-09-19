import React, { Component } from "react";
import classes from './styles.css';
import Person from "./person/person.jsx";
import ErrorBoundary from './error-boundary/error-boundary.jsx';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 30 },
      { id: 2, name: "Manu", age: 13 },
      { id: 3, name: "Mario", age: 15 }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.userId === id;
    });

    const person = {
      ...this.state.persons[personIndex],
      name: event.target.value
    };

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
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
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={event => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
    }

    let assignedClasses = [];

    if (this.state.persons.length <= 2 ) {
      assignedClasses.push('red');
    } 

    if (this.state.persons.length <= 1) {
      assignedClasses.push('bold');
    } 

    return (
      <div className={classes.App}>
        <h1>Hello CodeSandbox</h1>
        <p className={assignedClasses.join(' ')}>Start  editing to see some magic happen!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
      </button>
        {persons}
      </div>
    );
  }
}

export default App;