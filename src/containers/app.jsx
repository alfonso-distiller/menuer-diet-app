import React, { PureComponent } from "react";
import classes from "./styles.css";
import Person from "../components/person/person.jsx";
import PersonList from "../components/person-list/person-list.jsx";
import CockPit from "../components/cockpit/cockpit.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[app.jsx] @ constructor', props);
    this.state = {
      persons: [
        { id: 1, name: "Max", age: 30 },
        { id: 2, name: "Manu", age: 13 },
        { id: 3, name: "Mario", age: 15 }
      ],
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('[app.jsx] @ componentWillMount');
  }

  componentDidMount() {
    console.log('[app.jsx] @ componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[app.jsx] @ componentWillReceiveProps', nextProps);
  }

  //shouldComponentUpdate(nextProps, nextState) {
  //  console.log('[app.jsx] @ shouldComponentUpdate', nextProps, nextState);
  //  return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
  //}

  componentWillUpdate(nextProps, nextState) {
    console.log('[app.jsx] @ componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[app.jsx] @ componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
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
    console.log('[app.jsx] @ render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <PersonList
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <CockPit
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          click={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
