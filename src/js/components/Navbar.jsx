import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand ms-5" href="https://github.com/Jampiier25" target="_blank"  ><strong>Jean Pierre</strong> Full Stack Developer </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ml-5 ms-auto me-5">
            <a className="nav-link active" aria-current="page" href="#inicio">Home</a>
            <a className="nav-link" href="#acercade">About</a>
            <a className="nav-link" href="#servicios">System</a>
            <a className="nav-link" href="#contactme">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;