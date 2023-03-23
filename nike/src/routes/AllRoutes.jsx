import React from "react";
import { Routes, Route } from "react-router-dom";
import { Landing } from "../Components/Header/Landing/Landing";
import { MensOverview } from "../Components/MensSection.jsx/MensOverview";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Men" element={<MensOverview />} />
    </Routes>
  );
};
