import React from 'react';
import Header from './src/components/Header';
import Body from './src/components/Body';
import {Routes,Route } from 'react-router-dom';
import Home from './src/components/Home';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Login from './src/components/Login';

const App = () => {
  return (
    <div style={{marginTop:"150px"}}>
      <Header/>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
       </Routes>
      <Body/>
    </div>
  )
}

export default App
