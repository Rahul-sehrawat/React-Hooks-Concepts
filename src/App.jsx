import UseStateExample from "./Hooks/UseStateExample"
import UseEffectExample from "./Hooks/UseEffectExample"
import UseRefExample from "./Hooks/UseRefExample"
import Home from "./components/Home"
import Foot from "./components/Foot"
import UseReducer from "./Hooks/UseReducer"
import UseLocalStorage from "./Hooks/UseLocalStorage"
import UseMemo from "./Hooks/UseMemo"
import UseLayoutEffect from "./Hooks/UseLayoutEffect"


function App() {
    //for custom hook local storage
    const [name,setname] = UseLocalStorage('nameCustomHook','')


  return(
    <div className="container">
        <div> <h1>UseState Example : </h1> <UseStateExample/> </div>
        <div> <h1>UseEffect Example : </h1> <UseEffectExample/> </div>
        <div> <h1>UseRef Example : </h1> <UseRefExample/> </div>
        <div> <h1>UseContext Example : </h1> <Home/> <Foot/> </div>
        <div> <h1>UseReducer Example : </h1> <UseReducer/> </div>

        <div>
            <h1>Custom Hook Example : </h1>
            <input 
                    type="text" 
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e)=>{setname(e.target.value)}}
              />
            <h1> Hello,{name}</h1>
        </div>
      
      <div><h1>UseMemo Example : </h1> <UseMemo/></div>
      <div><h1>UseLayoutEffect Example : </h1> <UseLayoutEffect/></div>
      

    </div>
  )
}

export default App
