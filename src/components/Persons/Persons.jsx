import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {
    constructor(props) {
        super(props)
        console.log("[Persons.js] Inside constructor", props)
    }

    componentWillMount() {
        console.log('[Persons.js] inside componentWillMount')
    }

    componentDidMount() {
        console.log('[Persons.js] inside componentDidMount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] inside componentWillRecieveProps', nextProps)
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] inside shouldComponentUpdate', nextProps, nextState)
    //     return nextProps.persons !== this.props.persons;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] inside componentWillUpdate', nextProps, nextState)
    }
    
    componentDidUpdate() {
        console.log('[UPDATE Persons.js] inside componentDidUpdate')
    }

    render() {
        console.log("[Persons.js] inside render")
        return this.props.persons.map((person, index) => { 
            return (
                <Person 
                    name={person.name} 
                    age={person.age}
                    key={person.id}
                    click={() => this.props.click(index)}
                    changed={(event) => this.props.changed(event, person.id)}>
                </Person>
            )    
        })
    }
    
}

export default Persons;