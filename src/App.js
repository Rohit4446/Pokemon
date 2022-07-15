import "./styles.css";
import React from "react";
import Pokemon from "./Pokemon/Pokemon";
import Header from "./Comman/Header";
import Review from "./Reviews/Review";
import Questions from "./Accordium/Questions";
import MenuApp from "./Menu/MenuApp";
import { Route, BrowserRouter, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="pokemon" element={<Pokemon />} />
          <Route path="review" element={<Review />} />
          <Route path="accordion" element={<Questions />} />
          <Route path="menuapp" element={<MenuApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
