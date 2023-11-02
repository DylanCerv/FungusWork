// import Header from './share/components/Header/Header';
// import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NuestroEquipo from './pages/Nuestro-Equipo';
import Home from './pages/Home';

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />} /> {/* Nueva página */}
        <Route path="/nuestro-equipo" element={< NuestroEquipo />} /> {/* Nueva página */}
      </Routes>
      </BrowserRouter>
  );
}

export default App;
