import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Testing</h1>} />
      </Routes>
    </div>
  );
}
export default App;
