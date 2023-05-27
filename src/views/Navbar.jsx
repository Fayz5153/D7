import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import moon from "./moon.svg"
import sun from "./sun.svg"

const Navbar = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(()=>{
        const onScroll = () => {
            setScroll(window.pageYOffset)
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    },[])
    const [mode, setMode] = useState(true);
    const handleMode = () =>{
        setMode(!mode)
    }
    // console.log(scroll)
    return ( 
        <div className={scroll > 100 ? 'navbar scrolled' : 'navbar'}>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/category"}>Category</Link>
            <button onClick={handleMode} className={mode ? "moon btn" : "sun btn"}>
                <img src={mode ? moon : sun} alt="" width={25}/>
            </button>
        </div>
     );
}
 
export default Navbar;