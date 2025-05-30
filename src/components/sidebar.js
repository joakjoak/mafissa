import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [showEmpresaOptions, setShowEmpresaOptions] = useState(false);
  const [showProductosOptions, setShowProductosOptions] = useState(false);

  return (
    <div className="sidebar">
      <Link to="/" className="sidebar-button">
        <button className="sidebar-btn logo-btn">
          <img
            src="/images/icon.png"
            alt="Company Logo"
            className="navbar-logo"
          />
        </button>
      </Link>

      <Link to="/asesoramiento" className="sidebar-button">
        <button className="sidebar-btn">
          <span className="material-icons">Asesoramiento</span>
        </button>
      </Link>

      <div
        className="sidebar-button-container"
        onMouseEnter={() => setShowProductosOptions(true)}
        onMouseLeave={() => setShowProductosOptions(false)}
      >
        <button className="sidebar-btn">
          <span className="material-icons">Productos</span>
        </button>

        {showProductosOptions && (
          <div className="dropdown-options">
            <Link to="/productos/mineria" className="dropdown-button">
              <button className="dropdown-btn">División Minería</button>
            </Link>
            <Link to="/productos/agro" className="dropdown-button">
              <button className="dropdown-btn">División Agro</button>
            </Link>
            <Link to="/productos/textiles" className="dropdown-button">
              <button className="dropdown-btn">División Textil</button>
            </Link>
            <Link to="/productos/destacados" className="dropdown-button">
              <button className="dropdown-btn">Productos Destacados</button>
            </Link>
            <Link to="/productos/geosinteticos" className="dropdown-button">
              <button className="dropdown-btn">Geosintéticos</button>
            </Link>
          </div>
        )}
      </div>

      <Link to="/obras" className="sidebar-button">
        <button className="sidebar-btn">
          <span className="material-icons">Obras</span>
        </button>
      </Link>

      <Link to="/quienes-somos" className="sidebar-button">
        <button className="sidebar-btn">
          <span className="material-icons">Quiénes Somos</span>
        </button>
      </Link>

      <Link to="/contacto" className="sidebar-button">
        <button className="sidebar-btn">
          <span className="material-icons">Contacto</span>
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
