import React from 'react';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import { Route , Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
    <Route exact path="/signup" element={<Signup/>}/>
    </Routes>
    </div>
  );
}

export default App;
