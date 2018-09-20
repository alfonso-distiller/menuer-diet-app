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

  componentWillReceiveProps(nextProps) {
    console.log('[person-list.jsx] @ componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[person-list.jsx] @ shouldComponentUpdate', nextProps, nextState);
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[person-list.jsx] @ componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[person-list.jsx] @ componentDidUpdate');
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
