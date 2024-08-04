# React-Hooks-Concepts

This repository contains examples and concepts of all the main React hooks. Each hook is implemented in its own component and imported into the main App file. By cloning this repository and running the project, you can see practical implementations of each React hook.

# Getting Started

## Installation

1. Clone the repository:
```
git clone https://github.com/Rahul-sehrawat/React-Hooks-Concepts
cd react-hooks-examples
```

2. Install the dependencies:
```
npm install
# or
yarn install
```

## Running the Project

Start the development server:

```
npm run dev
```

Open http://localhost:5173 to view it in the browser.


# Hooks Overview

## useState

- What it does: useState is a Hook that lets you add React state to function components.
- What to do: Use it to declare a state variable and a function to update it.
- Why it's needed: It allows functional components to manage local state.

```
import { useState } from "react"

function UseStateExample() {
    const [count,setCount] = useState(0)
    const [info,setinfo] = useState({myname : 'rahul',study : 'dsa'})
    
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
        <button onClick={()=>setCount(count -1)}> - </button>
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
```

