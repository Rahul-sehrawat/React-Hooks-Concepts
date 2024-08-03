import { useEffect, useLayoutEffect } from "react"

function UseLayoutEffect() {
    useEffect(()=>{
        console.log("meassge from useeffect")
    },[])

    // this will executed before the useEffect
    // the layoutEffect is before the mounting the UI element
    useLayoutEffect(()=>{
        console.log("message from useLayoutEffect")
    },[])

  return (
    <div>
        {/* {Array(4000).fill('').map((item,index)=>(
            <li key={index}> {Math.pow(Math.random(),10)}</li>
        ))} */}
        <h1>hiii</h1>
    </div>
  )
}
export default UseLayoutEffect