import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './components/test';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/test' element={<Test/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;