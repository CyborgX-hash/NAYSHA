import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FormPage from './pages/FormPage';
import ResultsPage from './pages/ResultsPage';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path='results' element={<ResultsPage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  );
   
}

export default App;
