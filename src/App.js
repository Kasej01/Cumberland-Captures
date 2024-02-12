// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
//import Schedule from './pages/Schedule';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* <Route path="/schedule" element={<Schedule />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
