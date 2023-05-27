import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(()=>{
        const onScroll = () => {
            setScroll(window.pageYOffset)
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    },[])

    // console.log(scroll)
    return ( 
        <div className={scroll > 100 ? 'navbar scrolled' : 'navbar'}>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/category"}>Category</Link>
        </div>
     );
}
 
export default Navbar;