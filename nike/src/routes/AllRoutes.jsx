import React from "react";
import { Routes, Route } from "react-router-dom";
import { Landing } from "../Components/Header/Landing/Landing";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
};
