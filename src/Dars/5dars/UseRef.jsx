import React, { useRef, useState} from 'react'

const UseRef_hook = () => {
    const inputElement1 = useRef()
    const inputElement2 = useRef()
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")

    const focusInput = () =>{
        if (value1 === "") {
            inputElement1.current.focus()
        }
        value2 === "" ? inputElement2.current.focus() : null
    }

    return ( 
        <React.Fragment>
            <input type="text" ref={inputElement1} onChange={(e)=>setValue1(e.target.value)}/> <br />
            <input type="text" ref={inputElement2} onChange={(e)=>setValue2(e.target.value)}/> <br />
            <button onClick={focusInput}>send</button>
        </React.Fragment>
     );
}
 
export default UseRef_hook;