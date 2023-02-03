import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Card from './components/Card';

function App() {
  //https://stackoverflow.com/questions/72226904/how-to-solve-matched-leaf-route-at-location-project-does-not-have-an-element
  //old version: <Route exact path='/' component={Home}></Route>

  //Note: <Route path='/card/:user' element={<Card/>} />  works fine
  //If we want the path to be just ':user' thats when we need the Switch
  //Which is now handled by Routes!
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<Home></Home>}> </Route> 
            <Route path='/about' element={<About></About>}> </Route>
            <Route path='/contact' element={<Contact/>} />
            <Route path='/:user' element={<Card/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
