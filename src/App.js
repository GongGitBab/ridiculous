import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './components/test';
import Main from './components/main';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/main' element={<Main/>} />
      <Route path='/test' element={<Test/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;