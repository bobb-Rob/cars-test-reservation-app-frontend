import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Splash from './components/sign-in-sign-up/splash';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
      </Routes>
    </div>
  );
}
export default App;
