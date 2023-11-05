import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import Car from "./pages/Car.jsx";
import NotFound from "./pages/Notfound.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarContextProvider from "./context/CarContext.jsx";
import FeatureContextProvider from "./context/FeatureContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route
          path="cars"
          element={
            <CarContextProvider>
              <FeatureContextProvider>
                <Car />
              </FeatureContextProvider>
            </CarContextProvider>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
