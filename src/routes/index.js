import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../pages/home";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
