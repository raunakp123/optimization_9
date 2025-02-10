import React from 'react'

export default function Child1({name}) {
    console.log("child1 calling again");
    
  return (
    <div>
         <h1>child1 called...name is{name}</h1>
    </div>
  )
}
