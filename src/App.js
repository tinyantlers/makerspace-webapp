import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
     <Router>
       <Navbar/> 
       <Switch>
         <Route path = '/' exact/>
       </Switch>
       <Footer/>
     </Router>

  );
}

export default App;