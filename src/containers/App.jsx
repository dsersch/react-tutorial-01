import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from "../components/Persons/Persons";
import CockPit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass'

class App extends PureComponent {
  constructor(props) {
    super(props)
    console.log("[App.js] Inside constructor", props)
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount')
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] inside shouldComponentUpdate', nextProps, nextState)
  //   return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons
  // }

  componentWillUpdate(nextProps, nextState) {
      console.log('[UPDATE App.js] inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate() {
      console.log('[UPDATE App.js] inside componentDidUpdate')
  }

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
    console.log('[App.js] inside render')
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
      <WithClass classes={classes.App}>
        <button onClick={()=> {this.setState({showPersons: true})}}>Show Persons</button>
        <CockPit 
          appTitle={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          click={this.togglePersonHandler}
        />
        {persons}
      </WithClass>
      );
  }
}

export default App;