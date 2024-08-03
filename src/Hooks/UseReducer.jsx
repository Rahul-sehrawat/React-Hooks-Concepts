import { useReducer } from "react"

function UseReducer() {

    const initialState = {count:0}

    // initialize reducer before using it in useReducer()
    const reducer = (state,action) =>{
        switch(action.type){
            case 'inc':{
                return {count :state.count +1}
            }
            case 'dec':{
                return {count :state.count - 1}
            }
            case 'input':{
                return {count : action.payload}
            }
            default:{
                return state
            }
        }
    }

    const [state,dispatch] = useReducer(reducer,initialState)



  return (
    <div>
        <h1>Count :{state.count}</h1>
        {/* always remember, to use the array fn outside, otherwise the fn will be directly called */}
        <button onClick={()=> dispatch({type:'inc'})}> +</button>
        <button onClick={()=> dispatch({type:'dec'})}> - </button>
        <br />
        <input 
            type="number"
            value={state.count}
            onChange={(e)=> dispatch({type:'input', payload:Number(e.target.value)})}
            />
    </div>
  )
}
export default UseReducer