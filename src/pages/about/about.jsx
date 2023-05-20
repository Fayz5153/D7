import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const About = () => {
    return ( 
        <React.Fragment>
            <h1>About</h1>
            <Link to={""}>Page1</Link>
            <Link to={"p2"}>Page2</Link>
            <Link to={"p3"}>Page3</Link>
            <Outlet/>
        </React.Fragment>
     );
}
 
export default About;
