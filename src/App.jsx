import * as React from 'react';
import Home from './pages/Home/home';
import Navbar from './views/Navbar';
import Mode, { MyContext } from './context/context';

function App() {

  return (
    <Mode>
      <MyContext.Consumer>
        {(x)=>{
          // console.log(x)
          return(
            <div className={x.theme ? 'container light' :'container dark'}>
              <Navbar/>
              <Home/>
              <h1>{x.search}</h1>
            </div>
          )
        }}
      </MyContext.Consumer>
    </Mode>
  )
}

export default App
