import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
      <div>
          <p>* more experience on resume</p>
        </div>
    </section>
  );
};

const experience = [
  {
    title: "Infosys",
    position: "Site Reliability Engineer",
    time: "Sep 2023 - Present",
    location: "London",
    description: [
      " Contributing in building and maintaining a robust and high-performance infrastructure, enabling organisation to deliver reliable services to customers while continuously improving system reliability and availability.",
      ],
    description2: [
      " Also developing the modules for the chatbot to assist the dev teams in obtaining support for various tasks such as accessing development environments URLs, addressing deployment concerns, troubleshooting pipeline issues, and much more. This can be achieved through the utilization of keywords or by posing questions to the user-friendly chatbot.",
      ],
    tech: [
      "Python",
      "PowerShell",
      "AWS",
      "Azure DevOps",
      "Terraform",
      "Ansible",
      "Git",
      "Splunk",
    ],
  },
  {
    title: "Infosys",
    position: "Technical Associate",
    time: "Aug 2022 - Sep 2023",
    location: "London",
    description: [
      "I helped build the app called Attendify, which help records the attendance from Bench Enablement program to use of all kinds of events. It helps the admins to schedule events and create events with Infosys secure networks. Also made it prettier design too.",
      ],
    description2: [
      " Also obtained internal certifications such as Certified Software Programmer using Java, Associate Angular and have working knowledge on programming languages such as Python, JavaScript, Typescript, HTML  & CSS",
      ],
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

  {
    title: "Tech Talent Academy",
    position: "AWS re/Start Program",
    time: "Feb 2022 - Aug 2022",
    location: "London",
    description: [
      "Completed intensive full-time, classroom-based skills development and training program on IT fundamentals, AWS Cloud, and professional skills.",
    ],
    description2: [
      "Built IT fundamental skills, including: working knowledge of Linux OS, writing scripts in Python and Shell. Learned how to apply core AWS services in the areas of compute, storage and networking; including EC2, S3, IAM, VPC, Lambda, Cloud Formation, RDS and Route 53.",
    ],
    tech: [
      "AWS",
      "Python",
      "Linux",
      "Networking",
      "Cloud",
    ],
  },
  
];
