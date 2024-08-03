import { useState } from "react"

function UseStateExample() {
    const [count,setCount] = useState(0)
    const [info,setinfo] = useState({
      myname : 'rahul',
      study : 'dsa'
    })
    
    // if we dont use the spread operater with prev, then setinfo() will overwrite the whole obj
    // basically ...prev ,spread the property of the obj and then we can write the one which we want to change
    // if it have two same property name then the later one will be used
    const changestudy = ()=>{
        setinfo((prev)=>{
          return {...prev , study :"Full stack dev"}
        })
          
    }

  return (
    <>
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}> +</button>
        <button onClick={()=> setCount(count -1)}> - </button>
    </div>
    <div>
      <h1>UseState with obj</h1>
      <h3> my name is : {info.myname}</h3>
      <h4> Right now, i am studying : {info.study}</h4>
      <button onClick={changestudy}> change study plan</button>
    </div>
    </>
  )
}
export default UseStateExample