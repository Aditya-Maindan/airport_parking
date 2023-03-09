import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter >
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<HomePage />} />
    </Route>
  </Routes>
  </BrowserRouter >
  );
}

export default App;