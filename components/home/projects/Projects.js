import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />
        <div className={styles.projects}>
          {projects.map((project) => {
            return <Project key={project.title} {...project} />;
          })}
        </div>
        <br></br>
        <p>-------------------------------------------------------------------</p>
        <p>more projects to be added</p>
    </section>
  );
};

const projects = [
  {
    title: "Attendify",
    imgSrc: "project-imgs/attendify.jpg",
    code: "https://github.com/moe-ko/Attendify",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["React Native", "Tailwind CSS", "Firebase", "Expo"],
    description:
      "A real-time event tracking app for an organization. Built for internal use only within the organization.",
    modalContent: (
      <>
        <p>
        Attendify is a revolutionary new mobile application that helps Infosys track attendance at in-person sessions and is the perfect solution for keeping track of employees' involvement in the sessions.
        </p>
        <p>
        The app features an intuitive user interface that allows users to quickly and easily check in and out of sessions. It also provides real-time attendance data, allowing users to quickly review attendance records and having the option to download the attendance reports.
        </p>
        <p>
          The tech stack is based on top of React Native for the mobile app, 
          with cloud data stored on Firebase,
          deployed on Expo.
        </p>
      </>
    ),
  },
  {
    title: "MK Portfolio",
    imgSrc: "project-imgs/MK-Portfolio.jpg",
    code: "https://github.com/moe-ko/MK-portfolio",
    projectLink: " ",
    tech: ["ReactJs", "Next.JS", "SCSS", "Vercel"],
    description:
      "My hobby and my portfolio project which is supporting to run this site",
    modalContent: (
      <>
        <p>
          MK Portfolio is a portfolio site for me where you learn all about me and my journey to tech.
        </p>
        <p>
          Also this is my first portfolio project using new techs and while learning React, Next.JS, SCSS.
          Then deployed on Vercel which primarily support all the techs used.
        </p>
        <p>
          Even tho it is not perfect but sure can say it comes out beautiful{" "}{":)"}
        </p>
      </>
    ),
  },
];
