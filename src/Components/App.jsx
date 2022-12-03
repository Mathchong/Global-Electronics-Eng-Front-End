import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "../pages/login";

export default function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/sing-up" element={<h1>Tela de Cadastro</h1>} />
        <Route path="/sign-in" element={<Login/>}/>
        <Route path="*" element={<h1>Desculpe, não entramos a página</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
