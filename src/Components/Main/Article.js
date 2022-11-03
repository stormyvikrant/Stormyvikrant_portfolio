import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Fade from "react-reveal/Fade";
import styles from "./Article.module.css";
import ProjectContainer from "./Portfolio/ProjectContainer";
import ContactForm from "./Contact/ContactForm";
import { Skillset } from "./Skillset/Skill";

const Article = ({ data }) => {
    const { isLight } = useContext(ThemeContext);

    const setRoute = (d) => {
        const routeName = d.heading.split(" ")[0];
        return routeName.toLowerCase();
    };

    return (
        <article
            className={`${styles.container}`}
            id={setRoute(data)}
        >
            <Fade>
                <section className={`${styles.articleCard} ${!isLight && styles.dark}`}>
                    <div className={styles.headingContainer}>
                        <h2 className={styles.articleHeading}>
                            {data.heading}
                            <span className={styles.articleSpan}></span>
                        </h2>
                    </div>
                    {data.p1 && <p>{data.p1}</p>}
                    {data.p2 && <p>{data.p2}</p>}
            
                    {data.p3 && <p>{data.p3}</p>}
                    {data.projects && <ProjectContainer />}
                    {data.skills && <Skillset/>}
                    {data.form && <ContactForm />}
             </section>
            </Fade>
        </article>
    );
};

export default Article;
