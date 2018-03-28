import React, { Component } from 'react';
import classes from './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {id: 'hfgeiwh83023', name: "Max", age: 28},
      {id: '083ut09834r7', name: "Manu", age: 29},
      {id: '9038245ruy25', name: "Stephanie", age: 26}
    ]
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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = 
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person 
                name={person.name} 
                age={person.age}
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangeHandler(event, person.id)}>
              </Person>
            )
          })}
      </div>
      style.backgroundColor = "red";
    }

    let assignedClasses = [];

    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React app</h1>
        <p className={assignedClasses.join(' ')}>This is really working...</p>
        <button
          style={style} 
          onClick={this.togglePersonHandler}
          >Show Names</button>
        {persons}
      </div>
      );
  }
}

export default App;