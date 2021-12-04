import React from 'react'
import Person from './Person.js'


function ListRendering() {
    const persons = [
        {
            id: 1,
            name1: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name1: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name1: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]
/*   const names = ['Bruce', 'Clark', 'Diana' ]
   const nameList = names.map(name => <h2>{name}</h2>)*/
/*   const personList = persons.map((person) => (
       <h2>
           I am {person.name1}. I am {person.age} years old. I know {person.skill} 
       </h2>
   ))*/

   const personList1 = persons.map((person) => <Person Key={person.id} person={person}/>)
    return (
        /*<div>
            {personList}
        </div>*/
        /*<div>
            {nameList}
        </div>*/
        <div>{personList1}</div>
    )
}

export default ListRendering
