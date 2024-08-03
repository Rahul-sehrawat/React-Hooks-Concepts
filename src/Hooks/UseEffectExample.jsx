import { useEffect, useState } from "react"

function UseEffectExample() {
    const [store,setStore] = useState([])

    useEffect(()=>{
        async function fetching(){
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data =  await response.json()
            console.log("data",data)
            // You need to use useState to store the fetched data and then map over it in the render.
            setStore(data)
        }
        fetching()
    },[])


  return (


    <div>
        <h1>Title</h1>
        {store.map((one)=>(
            <p key={one.id}>{one.userId}.{one.title} </p>
        ))}
    </div>
  )
}
export default UseEffectExample