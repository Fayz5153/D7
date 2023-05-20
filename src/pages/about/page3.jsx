import React from 'react'
import { Outlet } from 'react-router-dom';

const Page3 = () => {
    return ( 
        <React.Fragment>
            <h1>Page3</h1>
            <Outlet/>
        </React.Fragment>
     );
}
 
export default Page3;