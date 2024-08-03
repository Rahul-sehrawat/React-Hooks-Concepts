import {useMemo, useState } from "react"

function UseMemo() {

    const [number,setNumber] = useState(0)
    const [count ,setCount] = useState(0)

    function cube(num){
      console.log("did some calculation...")
      return Math.pow(num,3)
    }
    // const result = cube(number)

    // so, the usememo will not run until and unless [number] changes
    const result = useMemo(()=>{ return cube(number)},[number])


  return(
    <div>
        <input 
            type= "number"
            value={number}
            onChange={(e)=>{setNumber(e.target.value)}}
            />
        <h1>The cube of the Number is {result}</h1>

        <button onClick={()=>{setCount(count +1)}}> + </button>
        <h4>count : {count}</h4>
    </div>
  )
}
export default UseMemo