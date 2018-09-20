import React from "react";
import Person from "../person/person.jsx";

class PersonList extends React.Component {
  constructor(props) {
    super(props);
    console.log('[person-list.jsx] @ constructor', props);
  }

  componentWillMount() {
    console.log('[person-list.jsx] @ componentWillMount');
  }

  componentDidMount() {
    console.log('[person-list.jsx] @ componentDidMount');
  }


  render() {
    console.log('[person-list.jsx] @ render');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default PersonList;
