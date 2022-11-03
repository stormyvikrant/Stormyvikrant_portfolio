import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import styles from "./Footer.module.css";

const Footer = () => {
    const { isLight } = useContext(ThemeContext);
    const theme = !isLight ? styles.dark : "";
 return (
        <footer className={`${styles.footer} ${theme}`}>
         
            <h4> Developed by Vikrant Prajapati &copy;</h4>
          
     </footer>
    );
};

export default Footer;
