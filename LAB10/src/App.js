import './App.css';
import MySidebar from './component/Sidebar';
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Post from './component/Post';

function App() {
  return (
    <Router>
      <div className="App">
      <nav class="bg-dark navbar-dark navbar">
      <div className="row col-12 d-flex justify-content-center text-white">
          <h3>Welcome to NTUT Web Programming</h3>
      </div>
      </nav>
      <MySidebar/>
      <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/post' element={< Post />}></Route>
      </Routes>
      </div>
    </Router>
  );
}


export default App;
