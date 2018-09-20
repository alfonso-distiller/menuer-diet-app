import React from "react";
import classes from "./person.css";
import Aux from "../../hoc/aux.jsx";
import withClass from "../../hoc/with-class.jsx";
import PropTypes from "prop-types";

class Person extends React.Component {
  constructor(props) {
    super(props);
    console.log('[person.jsx] @ constructor', props);
    this.inputElementRef = React.createRef();
  }

  componentWillMount() {
    console.log('[person.jsx] @ componentWillMount');
  }

  componentDidMount() {
    console.log('[person.jsx] @ componentDidMount');
    if (this.props.pos === 0) {
      this.inputElementRef.current.focus();
    }
  }

  focus() {
    this.inputElementRef.current.focus();
  }

  render() {
    console.log('[person.jsx] @ render');
    return (
      <Aux>
        <p onClick={this.props.click}>
          Im {this.props.name} and I am {this.props.age} years old !
      </p>
        <p>{this.props.children}</p>
        <input ref={this.inputElementRef}  type="text" onChange={this.props.changed} value={this.props.name} />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.person);
