import React from 'react'; //this is always required on a new component
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm <strong>{props.name}</strong> and I am <strong>{props.age}</strong> years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;