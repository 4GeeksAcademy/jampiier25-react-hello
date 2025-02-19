import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import CardContainer from "./CardContainer"; 

const Home = () => {
  return (
    <div className="text-center">
      <Navbar />
      <Jumbotron />
      <div className="container-fluid mb-4 p-4 mt-4 ">
        <div className="row">
          {CardContainer().map((item, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
              <Card cards={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;