import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ContactUs from './components/pages/ContactUs';
import Details from '../src/components/pages/Details'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component = {Home}/>
          <Route path='/ContactUs' exact Component = {ContactUs}/>
          <Route path='/Details' exact Component={Details}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;