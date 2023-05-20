import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Blog from './pages/blog';
import Edit from './pages/edit';
import "./style.css"

const Home = () => {
    return ( 
        <React.Fragment>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path='blog' element={<Blog/>}/>
                <Route path='edit/:id' element={<Edit/>}/>
            </Routes>
        </React.Fragment>
     );
}
 
export default Home;