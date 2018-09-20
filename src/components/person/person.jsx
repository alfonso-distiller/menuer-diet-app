import React from "react";
import classes from "./person.css";
import Aux from "../../hoc/aux.jsx";
import withClass from "../../hoc/with-class.jsx";

class Person extends React.Component {
  constructor(props) {
    super(props);
    console.log('[person.jsx] @ constructor', props);
  }

  componentWillMount() {
    console.log('[person.jsx] @ componentWillMount');
  }

  componentDidMount() {
    console.log('[person.jsx] @ componentDidMount');
  }

  render() {
    console.log('[person.jsx] @ render');
    return (
      <Aux>
        <p onClick={this.props.click}>
          Im {this.props.name} and I am {this.props.age} years old !
      </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </Aux>
    );
  }
}

export default withClass(Person, classes.person);
