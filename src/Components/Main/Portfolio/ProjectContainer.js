import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import nykaaSm from "../../../Assets/img/Portfolio items/Nykaaman.PNG";
import nykaaLg from "../../../Assets/img/Portfolio items/Nykaaman.PNG";
import shoppingmartsm from "../../../Assets/img/Portfolio items/shoppingmart.png";
import shoppingmartlg from "../../../Assets/img/Portfolio items/shoppingmart.png";
import weatherappimg from "../../../Assets/img/Portfolio items/weatherappimg.png";
import Myshoppingimgsm from "../../../Assets/img/Portfolio items/Myshoppingimg.png";
import Myshoppingimglg from "../../../Assets/img/Portfolio items/Myshoppingimg.png";


import ProjectItem from "./ProjectItem";

import styles from "./ProjectContainer.module.css";


import html from "../../../Assets/img/logos/html.svg";
import css from "../../../Assets/img/logos/css.svg";
import js from "../../../Assets/img/logos/js.svg";
import react from "../../../Assets/img/logos/react.svg";
import nodejs from "../../../Assets/img/logos/nodejs.svg";
import expressjs from "../../../Assets/img/logos/expressjs.svg";


const ProjectContainer = () => {
    const { isLight } = useContext(ThemeContext);
    const projects = [
      {
        image: [nykaaSm, nykaaLg],
        alt: "Nykaaman Clone",
        heading: "NykaaMan web clone",
        p1: "Here we have tried to optimize the previous project cloning of Nykaaman website by adding backend to it and some more functionality in the frontend.",
        l1: "https://github.com/stormyvikrant/Unit-4-NYKAAMAN-PROJECT/tree/main/NYKAAMAN-PROJECT-UNIT4",
        a1: "Github page for a Nykaaman project.",
        l2: "https://clone-ecommerce-app.netlify.app/",
        a2: "Nykaaman live website.",
        tech: [html, css, js, expressjs, nodejs],
      },
      {
        image: [Myshoppingimgsm, Myshoppingimglg],
        alt: "Myshoppingweb.com",
        heading: "MERN-MyShopping web-clone",
        p1: "This is a clone of Shopping E-commerce  website , where we have used HTML, CSS, and Javascript,React,Redux And Backend  to achieve this.",
        l1: "https://github.com/stormyvikrant/FullStack-MyShopping-web",
        a1: "Github page for a project.",
        l2: "https://frontend-828vtc1rg-stormyvikrant.vercel.app/login",
        a2: "MERN-MyShopping web-clone",
        tech: [html, css, js, expressjs, nodejs,react],
      },
     
      {
        image: [shoppingmartsm, shoppingmartlg],
        alt: "Shopping-Cart-React",
        heading: "Shopping-Cart-React",
        p1: "This is a clone of Shopping E-commerce  website , where we have used HTML, CSS, and Javascript,React,Redux to achieve this.",
        l1: "https://github.com/stormyvikrant/Shopping-mart-React-Redux",
        a1: "Github page for a project.",
        l2: "https://jovial-kelpie-bc0ce8.netlify.app/",
        a2: "Shopping-Cart-React",
        tech: [html, css, react, js],
      },
      {
        image: [weatherappimg, weatherappimg],
        alt: "Weather-App",
        heading: "Weather-App",
        p1: "This project is about building an getting the information about Weather in any city ",
        l1: "https://github.com/stormyvikrant/WheatherApp",
        a1: "Github page for a project.",
        l2: "https://weatherappmasai.netlify.app/",
        a2: "E Store App live website",
        tech: [html, css, js],
      }
     
    ];
    return (
        <div
            className={`${styles.projectContainer} ${!isLight && styles.dark}`}
        >
            {projects.map((data, index) => {
                return <ProjectItem data={data} index={index} key={index} />;
            })}
        </div>
    );
};

export default ProjectContainer;
