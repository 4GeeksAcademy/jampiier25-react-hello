import React from "react";


const carrusel = () => {
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade img-fluid">
        <div className="carousel-inner img-fluid ">
          <div className="carousel-item active">
            <img src="https://i.blogs.es/a939eb/trabajo-en-remoto-en-verano/1366_2000.jpeg" class="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2022/07/hombre-trabajando-playa-2763975.jpg?tf=3840x" class="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src="https://nomadwebs.com/wp-content/uploads/2024/02/6521720.jpg" class="d-block w-100" alt="..."></img>
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
