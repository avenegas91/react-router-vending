import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from "./VendingMachine";

import Chips from "./Chips";
import Candy from "./Candy";
import Soda from "./Soda";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/soda" element={<Soda />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/candy" element={<Candy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;