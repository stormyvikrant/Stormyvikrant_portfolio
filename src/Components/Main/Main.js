import React from "react";
import Article from "./Article";

const Main = () => {
    const articles = [
        {
            heading: "ABOUT ME",
            p1: `Adaptable and highly motivated aspiring full stack developer with a significant amount of coding experience. Sense of accountability and striving for perfection through the implementation of user-oriented web applications. Eager to contribute in an environment that promotes learning and professional growth. `,
            p2: `I specialize in MERN stack with having great knowledge in JavaScript, HTML, CSS & Data Structures and Algorithms.`,
            p3: `Keep scrolling to see some of my latest work!`,
            technologies: true,
        },
        {
            heading: "PROJECTS",
            projects: true,
        },
        {
            heading:"SKILLS",
            skills:true,
        },
        {
            heading: "CONTACT",
            p1: `If you have any questions or would like to chat, feel free to reach out !`,
            form: true,
        },
      
    ];
    return (
        <main>
            {articles.map((data, index) => {
                return <Article data={data} index={index} key={index} />;
            })}
        </main>
    );
};

export default Main;
