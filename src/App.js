import './otput.css';
import acc from './acc2.jpg';
import Nav from './Nav';
import Lenta from './Lenta';
import Account from './Account';
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom';
import Chat from './Chat';
import Cantakt from './Cantakt';
import Uvedom from './Uvedom';
import React from 'react';
import Posts from './Posts';

let reference=React.createRef();

const viewer=()=>{
  alert(reference.current.value)
};
function App() {
  return (
    <BrowserRouter>
      <div className="App" >
      <div className="main">
        
          <Nav />
          
          <Routes>
            <Route path='/' element={<Lenta />}></Route>
            <Route path='/chat' element={<Chat />}></Route>
            <Route path='/uvedom' element={<Uvedom />}></Route>
            <Route path='/cantakt' element={<Cantakt />}></Route>
            <Route path='/posts' element={<Posts />}></Route>
          </Routes>
          <Account />

      </div>
      </div>
    </BrowserRouter> 
  );
}

export default App;