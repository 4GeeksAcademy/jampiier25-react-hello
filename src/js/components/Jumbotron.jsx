import React from "react";
import "../../styles/Jumbotron.css"

const Jumbotron = () => {
    return (
        <div id="jumbo" className="mb-4 bg-light rounded-3 mx-5 mt-4">
            <div className="container-fluid py-5 text-start">
                <h1 className="display-5 fw-bold">Que es ser un Full Stack Developer!</h1>
                <p className="fs-4">
                Si estás leyendo esto, ¡estás en el sitio correcto! Como Full Stack Developer, tienes la capacidad de trabajar tanto en el frontend como en el backend de las aplicaciones web, dominando tecnologías como JavaScript, React, Node.js y bases de datos. Esta habilidad te permite crear soluciones completas y funcionales, desde la interfaz hasta el servidor. ¡La aventura de ser un Full Stack Developer comienza aquí!
                </p>
                <button id="btnjumbo" className="btn btn-primary btn-lg" type="button">
                    +INFO!
                </button>
            </div>
        </div>
    );
};

export default Jumbotron;
