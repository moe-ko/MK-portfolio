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
            <span className="chip">Azure DevOps</span>
            <span className="chip">AWS</span>
            <span className="chip">IaC</span>
            <span className="chip">CaaS</span>
            <span className="chip">Python</span>
            <span className="chip">PowerShell</span>
            <span className="chip">Bash</span>
            <span className="chip">YAML</span>
            <span className="chip">JSON</span>
            <span className="chip">Docker</span>
            <span className="chip">Kubernetes</span>
            <span className="chip">Terraform</span>
            <span className="chip">Ansible</span>
            <span className="chip">Splunk</span>
            <span className="chip">Sonarqube</span>
            <span className="chip">Grafana</span>
            <span className="chip">Git</span>
            <span className="chip">SQL</span>
            <span className="chip">No-SQL</span>
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
            <span className="chip">Java</span>
            <span className="chip">Spring Framework</span>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">React Native</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Tailwind</span>
            <span className="chip">MSSQL</span>
            <span className="chip">GraphQL</span>
            <span className="chip">MySQL</span>
            <span className="chip">Postgres</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
