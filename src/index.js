import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, Routes, BrowserRouter } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Car from "./components/Car";

const root = createRoot(document.getElementById("root"));
root.render( 
<BrowserRouter>
    <Navigation></Navigation>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/car/:id" element={<Car/>}/>
    </Routes>
  </BrowserRouter>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
