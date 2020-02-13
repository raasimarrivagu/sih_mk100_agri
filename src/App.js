
import Navtab from './components/uppertab.js'
import addpost from './addpost';
import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import products from './products.js';
import register from './register.js';


function App() {
  return (
    <div>
   
   <Router>
        <div>
        <Navtab/>
        
        <Route exact path='/products' component={products}></Route> 
        <Route exact path='/addpost' component={addpost}></Route> 
        <Route exact path='/register' component={register}></Route> 
        </div>
   </Router>
   </div>
  );
  
}
export default App;
