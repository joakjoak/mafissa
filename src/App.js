import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Asesoramiento from "./components/asesoramiento";
import "./App.css";
import QuienesSomos from "./components/quienes-somos";
import Mineria from "./components/mineria";
import Agrosinteticos from "./components/agro";
import Textiles from "./components/textiles";
import Destacados from "./components/destacados";
import Geosinteticos from "./components/geosinteticos";
import Obras from "./components/obras";
import Home from "./components/home";
import { BackgroundProvider } from "./contexts/BackgroundContext";

function AppWrapper() {
  return (
    <BackgroundProvider>
      <App />
    </BackgroundProvider>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--page-bg-image",
      getBackgroundForRoute(location.pathname)
    );
  }, [location.pathname]);

  const getBackgroundForRoute = (path) => {
    const backgrounds = {
      "/": "url(/images/home.jpg)",
      "/asesoramiento": "url(/images/asesoramiento.jpg)",
      "/productos/mineria": "url(/images/mineria.jpg)",
      "/productos/agro": "url(/images/agro.jpg)",
      "/productos/textiles": "url(/images/textiles.jpg)",
      "/productos/destacados": "url(/images/destacados.jpg)",
      "/productos/geosinteticos": "url(/images/geosinteticos.jpg)",
      "/obras": "url(/images/obras.jpg)",
      "/quienes-somos": "url(/images/quienes.jpg)",
      "/contacto": "url(/images/contacto.jpg)",
      default: "url(/images/home.jpg)",
    };
    return backgrounds[path] || backgrounds.default;
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <div className="blank-space"></div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/asesoramiento" element={<Asesoramiento />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/productos/mineria" element={<Mineria />} />
          <Route path="/productos/agro" element={<Agrosinteticos />} />
          <Route path="/productos/textiles" element={<Textiles />} />
          <Route path="/productos/destacados" element={<Destacados />} />
          <Route path="/productos/geosinteticos" element={<Geosinteticos />} />
          <Route path="/obras" element={<Obras />} />
        </Routes>
      </div>
    </div>
  );
}

export default AppWrapper;
