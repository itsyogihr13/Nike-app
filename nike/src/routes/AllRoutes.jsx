import React from "react";
import { Routes, Route } from "react-router-dom";
import { Landing } from "../Components/Header/Landing/Landing";
import { FavouratePage } from "../Components/MensSection.jsx/FavaourateSection";
import { MensOverview } from "../Components/MensSection.jsx/MensOverview";
import { MenShoe } from "../Components/MensSection.jsx/MensShoe";
import { SingleProd } from "../Components/MensSection.jsx/SingleProd";
import { CartPage } from "../Components/Payment/Cart";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Men" element={<MensOverview />} />
      <Route path="/Men/shoe" element={<MenShoe />} />
      <Route path="/Singleprod/:id" element={<SingleProd />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/fav" element={<FavouratePage />} />
    </Routes>
  );
};
