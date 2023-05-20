import React, { createContext, useState } from 'react'

export const MyContext = createContext()

const Mode = (props) => {
    const [theme, setTheme]=useState(true)
    const handleTheme = ()=>{
        setTheme(!theme)
    }
    const [search, setSearch] = useState("")
    return ( 
        <MyContext.Provider value={{ 
            theme, handleTheme, 
            search, setSearch
         }}>
            {props.children}
        </MyContext.Provider>
     );
}
 
export default Mode;