import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 'sadf',name: 'Corey', age: 28},
      { id: 'wera', name: 'Ruth', age: 29}, 
      { id: 'koij', name: 'Kyle', age: 22}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object,assign({}, this.state.person[personIndex]);

    person.name= event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons})

  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.slice();
    const persons = [...this.state.persons]; //copy original array
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.showPersons;
    this.setState({showPersons: !doesShow});
  };


  render () {
    // Inline styles - Restrictions apply such as no hover styling etc...
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer' 
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button className="main-btn"
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    ); 
  }

  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}


export default App;




