import { useRef } from "react"

function UseRefExample() {

    const inputRef = useRef()

    const HandleInputRef = () =>{
        console.log(inputRef)   //current : input
        console.log(inputRef.current)  //  <input type = 'text />
        inputRef.current.style.background = 'green';
        inputRef.current.focus() 
    }
  return (
    <div>
        <input type="text" ref={inputRef}/>
        <button onClick={HandleInputRef}>click</button>


    </div>
  )
}
export default UseRefExample