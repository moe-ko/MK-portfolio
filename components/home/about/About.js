import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Moe, if you haven&apos;t already gathered that by
              now. I&apos;m a manager turned DevOps from London,
              UK. I specialize in the cloud technologies and Infrastructure as Code (IaC), but
              love building with whatever tools are right for the job.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I currently work for Infosys as an Enterprise Technology Engineer / DevOps role. Also enjoy working on
              some accelerate projects to sharpen my new skills and learn from it 💪.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I still love to play football ⚽️. Any given Sunday
              you&apos;ll find me scoring and doing some tricks on the pitch.
              If not i&apos;ll be on my console playing games 👾 with my friends.
              Or travelling around the world much as I can, you know, life is too short
              for sitting on the couch so 🗺️
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m looking for new oppourtunities where I can merge my
              love for architecting with my love for the cloud ☁️. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
