import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import CardContainer from "./CardContainer"; 
import Footer from "./footer.jsx";
import Carrusel from "./Carrusel.jsx";
import Inicio from "./Inicio.jsx";




const Home = () => {
  return (
    <div  className="text-center">
      <Navbar />
      <div id="bodyy">
        <Jumbotron />
        <div className="container-fluid mb-4 mt-4  p-5  ">
          <div className="row">
            {CardContainer().map((item, index) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                <Card cards={item} />
              </div>
            ))}
            </div>
            <Carrusel/>
            <Inicio/>
          </div>
        </div>
        <div id="contactoo" className="classes"><p>Para más información puedes contactarme a traves del siguiente enlace
           <a className="allmylinks" href=" https://getallmylinks.com/jampiier25" target="blank"><b>CLICK AQUI</b></a></p></div>
        <Footer />
      </div>
    );
  };
  
  export default Home;