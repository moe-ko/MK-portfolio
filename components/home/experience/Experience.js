import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Infosys",
    position: "Technical Associate",
    time: "2022 - Present",
    location: "London",
    description:
      "I helped build the app called Attendify, which help records the attendance from Bench Enablement program to use of all kinds of events. It helps the admins to schedule events and create events with Infosys secure networks. Also made it prettier design too.",
    tech: [
      "Java",
      "React Native",
      "Angular",
      "Git",
      "GitHub",
      "Spring Framework",
      "MSSQL",
      "MYSQL",
    ],
  },
  
];
