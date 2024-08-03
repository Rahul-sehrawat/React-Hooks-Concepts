import UseStateExample from "./Hooks/UseStateExample"
import UseEffectExample from "./Hooks/UseEffectExample"
import UseRefExample from "./Hooks/UseRefExample"
import Home from "./components/Home"
import Foot from "./components/Foot"
import UseReducer from "./Hooks/UseReducer"
import UseLocalStorage from "./Hooks/UseLocalStorage"
import UseMemo from "./Hooks/UseMemo"


function App() {
    //for custom hook local storage
    const [name,setname] = UseLocalStorage('nameCustomHook','')


  return(
    <div className="container">
      {/* <UseStateExample/> */}
      {/* <UseEffectExample/> */}
      {/* <UseRefExample/> */}

      {/* this is for UseContext */}
      {/* <Home/> */}
      {/* <Foot/> */}

      {/* <UseReducer/> */}

      <input 
          type="text" 
          placeholder="Enter your name"
          value={name}
          onChange={(e)=>{setname(e.target.value)}}
          />
      <h1> Hello,{name}</h1>

      <UseMemo/>


    </div>
  )
}

export default App
