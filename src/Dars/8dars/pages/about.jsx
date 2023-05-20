import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
    let navigate = useNavigate()

    setTimeout(() => {
        navigate("/news/2")
    }, 3000);
    return ( 
        <React.Fragment>
            <h1>About page</h1>
        </React.Fragment>
     );
}
 
export default About;