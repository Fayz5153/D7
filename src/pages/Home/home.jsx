import React, { useState } from 'react'
import { MyContext } from '../../context/context';

const Home = () => {
    const [text, setText] = useState('')
    return ( 
        <MyContext.Consumer>
            {(x)=>{
                return(
                    <h1 >
                        <input type="text" onChange={(e)=>setText(e.target.value)}/>
                        <button onClick={()=>x.setSearch(text)}>Send</button>
                    </h1>
                )
            }}
        </MyContext.Consumer>
     );
}
 
export default Home;