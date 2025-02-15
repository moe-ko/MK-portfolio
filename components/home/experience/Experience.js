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
    title: "BP (contract)",
    position: "Enterprise Technology Engineer",
    time: "Oct 2023 - Present",
    location: "London",
    description: [
      " Contributing to designing and implementing robust Azure DevOps infrastructure management solutions, including autoscaling Windows/Linux agent pools and multi-stage YAML pipelines. Established comprehensive monitoring through Splunk and Grafana with automated remediation, optimizing pipeline performance and build processing across development teams. Orchestrated enterprise-wide DevOps toolchain implementation encompassing SonarQube, Artifactory, and Azure DevOps, enabling faster deployments and extensive automation of manual processes. Engineered an AI-powered chatbot system to streamline developer support, providing automated assistance for environment access, deployment troubleshooting, and pipeline issues through natural language interaction. Architected real-time monitoring solutions integrating Splunk and Grafana dashboards with ServiceNow and Slack, significantly improving incident detection and response times.",
      ],
    description2: [
      " Also developed the modules for the Ai Chatbot to assist the dev and support teams in obtaining support for various tasks such as accessing development environments URLs, addressing deployment concerns, troubleshooting pipeline issues, and much more by utilization of keywords or by posing questions to the user-friendly chatbot.",
      ],
    tech: [
      "AWS",
      "Azure DevOps",
      "Terraform",
      "Ansible",
      "Git",
      "Splunk",
      "Sonarqube",
      "Artifactory",
      "Grafana",
      "Containers",
      "Python",
      "PowerShell",
      "Bash",
      "YAML",
    ],
  },
  {
    title: "Infosys",
    position: "Senior Associate",
    time: "Aug 2022 - Present",
    location: "London",
    description: [
      "Helped build the app called Attendify, which helps record the attendance from the Bench Enablement program for all kinds of events. It helps the admins to schedule events and create events with Infosys secure networks. Also made it prettier design too.",
      ],
    description2: [
      " Other than that, obtained internal certifications such as Certified Software Programmer using Java, Associate Angular and have working knowledge on programming languages such as Python, SQL, JavaScript, HTML & CSS",
      ],
    tech: [
      "Python",
      "Java",
      "React Native",
      "Angular",
      "Git",
      "Spring Framework",
      "SQL",
      "No-SQL",
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
