import React from 'react';
import Navbar from './views/Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/home';
import Category from './pages/category/category';
import Items from './pages/category/items';

function App() {
  return (
    <>
      <Navbar/>
      <div className='home'>
        <div> 
          <Link to={"/category/book"}>book</Link>
          <Link to={"/category/tv"}>tv</Link>
          <Link to={"/category/phone"}>Phone</Link>
        </div>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='category' element={<Category/>}/>
          <Route path='category/:name' element={<Items/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
