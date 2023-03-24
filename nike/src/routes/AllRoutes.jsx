import React from "react";
import { Routes, Route } from "react-router-dom";
import { Landing } from "../Components/Header/Landing/Landing";
import { MensOverview } from "../Components/MensSection.jsx/MensOverview";
import { MenShoe } from "../Components/MensSection.jsx/MensShoe";
import { SingleProd } from "../Components/MensSection.jsx/SingleProd";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Men" element={<MensOverview />} />
      <Route path="/Men/shoe" element={<MenShoe />} />
      <Route path="/Singleprod/:id" element={<SingleProd />} />
    </Routes>
  );
};
