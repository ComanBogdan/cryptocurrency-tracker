import './App.css';

import React from 'react';


import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Homepage from './Pages/Homepage';
import Coinpage from './Pages/Coinpage';




console.log('test');

function App() {


  return (

    <Homepage></Homepage>

//     <BrowserRouter>
//     <div>
//     <Header/>
//     </div>
// {/*       
//       <Route path="/" component= {Homepage}/>
//       <Route path="/Coin" component = {Coinpage}/> */}
//     </BrowserRouter>
    
  );
}

export default App;
