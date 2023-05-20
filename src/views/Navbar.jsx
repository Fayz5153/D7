import React from 'react'
import { MyContext } from '../context/context';
import { Button } from '@mui/material';
import MyButton from '../components/btn';

const Navbar = () => {
    const handleClick = () =>{ console.log("click") }
    return ( 
        <MyContext.Consumer>
            {(x)=>{
                return(
                    <div>
                        <Button onClick={x.handleTheme} variant='contained'>
                            {x.theme ? "dark" : "light"}
                        </Button>
                        <MyButton onClick={handleClick} aaa={"s100"}>salom</MyButton>
                        <MyButton onClick={()=>console.log("hello")}>hello</MyButton>
                    </div>
                )
            }}
        </MyContext.Consumer>
     );
}
 
export default Navbar;