import React, { useEffect, useState } from 'react'

const UseEffect_hook = () => {
    // useEffect(function, depandecy)
    const [count, setCount] = useState(0)
    const [calc, setCalc] = useState(0)
    useEffect(()=>{
        // setTimeout(() => {
        //     setCount((count) => count + 1)
        // }, 1000);
        setCalc(() => count * 2)
    }, [count])
    return ( 
        <React.Fragment>
            <h1>son  {count} </h1>
            <button onClick={()=>setCount((c)=>c+1)}>count+</button>
            <h1>calc {calc}</h1>
        </React.Fragment>
        
    );
}
 
export default UseEffect_hook;