// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Book from './Book';
// import Employee from './Employee';
import './App.css';
import Table from './table';
import Edit from './Edit';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
           <Route path="/login" element={<Login />} />
          <Route path="/book" element={<Book />} />
          {/* <Route path="/book" element={<Book />} /> */}
          * <Route path="/tabledata" element={<Table />} /> 
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
