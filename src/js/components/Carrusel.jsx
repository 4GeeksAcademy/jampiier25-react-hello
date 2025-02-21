import React from "react";


const carrusel = () => {
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg" class="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src="https://www.youtube.com/watch?v=YpoUzo-CflQ" class="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src="https://www.youtube.com/watch?v=YpoUzo-CflQ" class="d-block w-100" alt="..."></img>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
};
export default carrusel;