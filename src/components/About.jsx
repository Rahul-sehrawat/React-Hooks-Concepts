import { useContext } from "react"
import { AppContext } from "../Hooks/context/AppContext"

function About() {
    const {phone,name} = useContext(AppContext)
  return (
    <div style={{border:'2px solid orange', width:'400px'}}>
        <h2>About</h2>
        <p>Name: {name}</p>
        <p>Phone in About: {phone}</p>    
    </div>
  )
}
export default About