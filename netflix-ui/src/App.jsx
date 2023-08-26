import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Netflix from "./pages/Netflix";

export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path ="/" element={<Netflix/>}> </Route>
    </Routes>
    </BrowserRouter>
  );
}