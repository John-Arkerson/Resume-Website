"use client";

import styles from "../../styles/about.module.css";
import Image from "next/image";
import profile from "../../public/profile_photo.jpeg";
import fileSaver from "file-saver";
import { infoConfig } from "@/config/info";

export default function AboutPage() {
  const saveFile = () => {
    try {
      fileSaver.saveAs(
        "/2024_John_Arkerson_resume.pdf",
        "2025_John Arkerson Resume"
      );
    } catch (error) {
      console.error("Error downloading file", error);
    }
  };

  return (
    <div>
      <div className={styles.resume}>
        <div className={styles.resume_left}>
          <div className={styles.resume_profile}>
            <Image
              alt="Card background"
              height={280}
              width={280}
              src={profile}
            />
          </div>
          <div className={styles.resume_content}>
            <div className={`${styles.resume_item} ${styles.resume_info}`}>
              <div className={styles.title}>
                <p className={styles.bold}>John Arkerson</p>
                <p className={styles.regular}>Developer</p>
              </div>
              <ul>
                <li>
                  <div className={styles.data}>
                    Parsippany, NJ <br /> USA{" "}
                  </div>
                </li>
                <li>
                  <div className={styles.data}>(908)514-0518</div>
                </li>
                <li>
                  <div className={styles.data}>arkersonj1@gmail.com</div>
                </li>
                <li>
                  <div className={styles.data}>www.John-Arkerson.com</div>
                </li>
              </ul>
            </div>

            <div className={`${styles.resume_item} ${styles.resume_skills}`}>
              <div className={styles.title}>
                <p className={styles.bold}>Skills</p>
              </div>
              <ul>
                <li>
                  <div className={styles.skill_name}>HTML</div>
                  <div className={styles.skill_progress}>
                    <span style={{ width: "70%" }}></span>
                  </div>
                  <div className={styles.skill_per}>70%</div>
                </li>
                <li>
                  <div className={styles.skill_name}>CSS</div>
                  <div className={styles.skill_progress}>
                    <span style={{ width: "55%" }}></span>
                  </div>
                  <div className={styles.skill_per}>55%</div>
                </li>
                <li>
                  <div className={styles.skill_name}>JS</div>
                  <div className={styles.skill_progress}>
                    <span style={{ width: "70%" }}></span>
                  </div>
                  <div className={styles.skill_per}>70%</div>
                </li>
                <li>
                  <div className={styles.skill_name}>Python</div>
                  <div className={styles.skill_progress}>
                    <span style={{ width: "85%" }}></span>
                  </div>
                  <div className={styles.skill_per}>85%</div>
                </li>
              </ul>
            </div>

            <div className={`${styles.resume_item} ${styles.resume_social}`}>
              <div className={styles.title}>
                <p className={styles.bold}>Socials</p>
              </div>
              <ul>
                <li>
                  <div className={styles.data}>
                    <p className={styles.semi_bold}>LinkedIn</p>
                    <p>https://linkedin.com/in/john-arkerson</p>
                  </div>
                </li>
                <li>
                  <div className={styles.data}>
                    <p className={styles.semi_bold}>GitHub</p>
                    <p>https://github.com/John-Arkerson</p>
                  </div>
                </li>
                <button
                  onClick={saveFile}
                  className="my-2 ml-40 sm:ml-8 px-5 py-1.5 text-sm bg-red-500 rounded-full text-white"
                >
                  Download CV
                </button>
              </ul>
            </div>
          </div>
        </div>
        <div className={`dark:bg-slate-500 bg-white ${styles.resume_right}`}>
          <div className={`${styles.resume_item} ${styles.resume_about}`}>
            <div className={styles.title}>
              <p className={styles.bold}>About Me</p>
            </div>
            <p className="dark:text-white">{infoConfig.aboutInfo.About.desc}</p>
          </div>
          <div className={`${styles.resume_item} ${styles.resume_work}`}>
            <div className={styles.title}>
              <p className={styles.bold}>Volunteer Work</p>
            </div>
            <ul>
              <li>
                <div className={`dark:text-white ${styles.date}`}>
                  {infoConfig.aboutInfo.Volunteer.year}
                </div>
                <div className={styles.info}>
                  <p className={`dark:text-white ${styles.semi_bold}`}>
                    {infoConfig.aboutInfo.Volunteer.title}
                  </p>
                  <p className="dark:text-white">
                    {infoConfig.aboutInfo.Volunteer.desc}
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className={`${styles.resume_item} ${styles.resume_education}`}>
            <div className={styles.title}>
              <p className={styles.bold}>Education</p>
            </div>
            <ul>
              <li>
                <div className={`dark:text-white ${styles.date}`}>
                  {infoConfig.aboutInfo.Education.year}
                </div>
                <div className={styles.info}>
                  <p className={`dark:text-white ${styles.semi_bold}`}>
                    {infoConfig.aboutInfo.Education.title}
                  </p>
                  <p className="dark:text-white">
                    {infoConfig.aboutInfo.Education.desc}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
