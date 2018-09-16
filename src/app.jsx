import React, {Component} from 'react';
import Person from './person/person.jsx';

export default class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 30},
      {name: 'Manu', age: 13},
      {name: 'Mario', age: 15}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('was clicked!');
    // DONT DO THIS : this.state.persons[0].name = 'Maximus';
    this.setState({
      persons: [
        {name: newName, age: 30},
        {name: 'Manu', age: 13},
        {name: 'Mario', age: 27}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 30},
        {name: event.target.value, age: 13},
        {name: 'Mario', age: 27}
      ]
    })
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {this.state.showPersons ? <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Maximiliano')}
            changed={this.nameChangedHandler}>
            My hobbies are: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
        </div> : null}
      </div>
    );
  }
}
