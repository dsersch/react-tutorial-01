import React, { Component } from 'react';
import classes from "./Person.css";
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxilary';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props) {
        super(props)
        console.log("[Person.js] Inside constructor", props)
    }

    componentWillMount() {
        console.log('[Person.js] inside componentWillMount')
    }

    componentDidMount() {
        console.log('[Person.js] inside componentDidMount')
        if (this.props.position === 0) {
            this.inputElement.focus()
        }
    }

    render () {
        console.log('[Person.js] inside render')
        return (
            <Aux >
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input
                    ref = {(inp) => {this.inputElement = inp}}
                    type="text" onChange={this.props.changed} 
                    value={this.props.name}
                />
            </Aux >
        )
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    click: PropTypes.func,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);