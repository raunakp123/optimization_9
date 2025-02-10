import React,{memo} from 'react'

 function Child2({name, add}) {
    console.log("child2 claled ");
    
  return (
    <div>
         <h1>child2 caleed ....{name} </h1>
    </div>
  )
}
export default memo(Child2);
