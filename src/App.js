import React from 'react';
import Header from './components/Header';
import Body from  './components/Body';
// import {Routes,Route } from 'react-router-dom';
// import About from  './components/About';
// import Contact from  './components/Contact';
// import Login from  './components/Login';
// <Routes>
// <Route path='/' element={<Body/>} />
// <Route path='/about' element={<About/>} />
// <Route path='/contact' element={<Contact/>}/>
// <Route path='/login' element={<Login/>}/>
// </Routes>

const App = () => {
  return (
    <div style={{marginTop:"150px"}}>
      <Header/>
      <Body/>
    </div>
  )
}

export default App
