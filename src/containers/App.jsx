import React, { Component } from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import CockPit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      {id: 'hfgeiwh83023', name: "Max", age: 28},
      {id: '083ut09834r7', name: "Manu", age: 29},
      {id: '9038245ruy25', name: "Stephanie", age: 26}
    ],
    showPersons: false
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons})
  }

  nameChangeHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    
    const person = {...this.state.persons[personIndex]};

    person.name = e.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = 
        <Persons 
          persons={this.state.persons}
          click={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
    }

    return (
      <div className={classes.App}>
        <CockPit 
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          click={this.togglePersonHandler}
        />
        {persons}
      </div>
      );
  }
}

export default App;