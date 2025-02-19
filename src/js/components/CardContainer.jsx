import React from "react";
import Card from "./Card";

const CardContainer = () => {
  const cardsData = [
    {
      image: "https://digitalfuturesociety.com/app/uploads/2021/06/BDT_logo_becas_geeks_v2.jpg", 
      title: "4Gekks",
      description: "4Geeks: aprende tecnologías de vanguardia y transforma tu futuro profesional.",
    },
    {
      image: "https://www.datocms-assets.com/48401/1628644950-javascript.png",
      title: "Javascript",
      description: "JavaScript: crea experiencias web interactivas y aplicaciones dinámicas con facilidad y rapidez.",
    },
    {
      image: "https://miro.medium.com/v2/resize:fit:1100/1*f2i47G95nVCx71KzM1iXlg.png",
      title: "CSS",
      description: "CSS: controla el diseño responsivo, animaciones y tipografía para interfaces modernas.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp6KKXhAH3_cO5rSe7lnoRwRJtqMwP4FEFcw&s", 
      title: "HTML5",
      description: "HTML5: potencia aplicaciones web con multimedia, gráficos y almacenamiento local sin plugins.",
    },
    {
      image: "https://www.linuxadictos.com/wp-content/uploads/python-logo.jpg", 
      title: "Python",
      description: "Python: lenguaje fácil de aprender, versátil y potente para todo tipo de proyectos.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5O9VF_gl5gExy_--7EGKP_0q3IyeAMI9VTg&s", 
      title: "React",
      description: "React: crea interfaces de usuario interactivas y dinámicas con facilidad y rendimiento.",
    },
    {
      image: "https://lh3.googleusercontent.com/csXm00pBuJvmhsXcI1XauxFGrE66sHBbWI9QyKY0lt2h55a1VaKl6F5TrlH0wBC_aijloKw9lh8a=e14-rj-sc0xffffff-w1270", 
      title: "Node",
      description: "Node.js: desarrolla aplicaciones rápidas y escalables con JavaScript en el servidor.",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuoQjSfxnvF21LWhHqgMOTFOCqfRwqE2MLyg&s", 
      title: "SQL",
      description: "Domina SQL: organiza, consulta y gestiona datos de manera eficiente y poderosa.",
    },
  ];

  return cardsData; 
};

export default CardContainer;