import React from 'react'
import Person from './Person.js'

export default function IndexAsKey() {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}
