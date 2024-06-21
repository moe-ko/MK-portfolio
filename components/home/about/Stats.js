import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Python</span>
            <span className="chip">PowerShell</span>
            <span className="chip">AWS</span>
            <span className="chip">Microsoft Azure</span>
            <span className="chip">Terraform</span>
            <span className="chip">Ansible</span>
            <span className="chip">Splunk</span>
            <span className="chip">Git</span>
            <span className="chip">SQL</span>
            <span className="chip">IaC</span>
            <span className="chip">CaaS</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">React JS</span>
            <span className="chip">Angular JS</span>
            <span className="chip">Tailwind</span>
            <span className="chip">Microsoft SQL Server</span>
            <span className="chip">GraphQL</span>
            <span className="chip">Java</span>
            <span className="chip">Spring Framework</span>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">React Native</span>
            <span className="chip">NodeJS</span>
            <span className="chip">MySQL</span>
            <span className="chip">Postgres</span>
            <span className="chip">Figma</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
