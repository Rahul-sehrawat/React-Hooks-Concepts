import { useContext } from "react"
import { AppContext } from "../Hooks/context/AppContext"


function Foot() {
    const {phone,name} = useContext(AppContext)
  return (
    <div style={{border:'2px solid blue'}}>
        <h2>Footer</h2>
        <p>Name :{name}</p>
        <p>phone : {phone}</p>
    </div>

  )
}
export default Foot