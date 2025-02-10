import { useState } from 'react'
import './App.css'
import { useMemo } from 'react'

function App() {
   const[count, setCount] = useState(1000000)
  const [number, setNumber] = useState(1000000)

  const calculatesum=()=>{
    var sum=0;
    for(let i=0; i<number; i++){
      sum=sum +i;

    }
    return sum


  }
   const sum1=useMemo(calculatesum, [])
  

  return (
    <>
      {sum1}
      <br/>
      {count}
      <button onClick={()=>setCount(count+3)}>clic me</button>
    </>
  )
}

export default App
