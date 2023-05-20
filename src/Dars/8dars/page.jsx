import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Idpage from './IdPage';

const Page = () => {
    return ( 
        <React.Fragment>
            <h1>React-router-dom</h1>
            <div className='navbar'>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>  About</Link>
                <Link to={"/news"}>  News</Link>
                <Link to={"/asdadsasdsa"}>  404</Link>
            </div>
            <div className='routers'>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='news' element={<h2>News</h2>}/>
                    <Route path='news/:id' element={<Idpage/>}/>
                    <Route path='*' element={<h2>404 not found</h2>}/>
                </Routes>
            </div>
        </React.Fragment>
     );
}
 
export default Page;