import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/sing-up' element={<h1>Tela de Cadastro</h1>} />
      <Route path='*' element={<h1>Desculpe, não entramos a página</h1>}/>
    </Routes>
    </BrowserRouter>
  );
}
