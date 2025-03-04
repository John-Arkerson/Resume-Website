"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Hero from "@/components/hero";
import home_styles from "../styles/home.module.css";
import styles from "../styles/timeline.module.css";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section data-aos="zoom-in-down" data-aos-duration="1500">
        <Hero />
      </section>
      <section className={`p-10 bg-[url(../public/stars.jpg)]`}>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className={home_styles.name}
        >
          Welcome!
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className={home_styles.desc}
        >
          I am a Full-Stack Developer based in the North East!
          <br />
          Although I am an avid Rock climber, I am a programmer at heart.
          <br />
          I love solving problems both on the wall as well as in
          development.
        </div>
      </section>
      <section
        className={`dark:bg-[url(../public/black_polygons.jpg)] bg-[url(../public/white_polygons.jpg)] ${styles.timeline_section}`}
      >
        <div className={`pb-5 dark:text-white ${styles.timeline_title}`}>
          Experience
        </div>
        <div className={`${styles.timeline_items}`}>
          <div
            data-aos="flip-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
            className={`${styles.timeline_item}`}
          >
            <div className={styles.timeline_dot}></div>
            <div
              data-aos="flip-up"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-center"
              className={styles.timeline_date}
            >
              2022 - 2024
            </div>
            <div
              className={`dark:bg-slate-800 bg-slate-600 ${styles.timeline_content}`}
            >
              <h2>Coherent - Software Developer</h2>
              <p>
                Developed multiple internal production React websites used by
                10,000+ employees across manufacturing locations around the
                world
                <br />
                <br />
                Developed python programs to automate upload of tool measurement
                data to SQL server database for employee use across site
                locations
                <br />
                <br />
                Administrated employee account permissions
                <br />
                <br />
                Developed dispatch screens for production floor to visualize SPC
                (Statistical Process Control) charts for operator use in the factory
                <br />
                <br />
                Developed internal production React website to generate
                spreadsheets with product measurement data as well as Zebra
                shipping and warehouse labels for customer use and product
                tracking
              </p>
            </div>
          </div>
          <div
            data-aos="flip-up"
            data-aos-duration="1000"
            className={`${styles.timeline_item}`}
          >
            <div className={styles.timeline_dot}></div>
            <div
              data-aos="flip-up"
              data-aos-duration="1000"
              className={styles.timeline_date}
            >
              2022 - 2022
            </div>
            <div
              className={`dark:bg-slate-800 bg-slate-600 ${styles.timeline_content}`}
            >
              <h2>Coherent - Production Planner</h2>
              <p>
                Responsible for creating production schedule of operations
                throughout the factory and ensuring that the factory makes
                shipments on time
                <br />
                <br />
                Responsible for creating and confirming production orders in SAP
              </p>
            </div>
          </div>
          <div
            data-aos="flip-up"
            data-aos-duration="1000"
            className={`${styles.timeline_item}`}
          >
            <div className={styles.timeline_dot}></div>
            <div
              data-aos="flip-up"
              data-aos-duration="1000"
              className={styles.timeline_date}
            >
              2021 - 2022
            </div>
            <div
              className={`dark:bg-slate-800 bg-slate-600 ${styles.timeline_content}`}
            >
              <h2>Coherent - Fabrication Operator</h2>
              <p>Ran and maintained fabrication tools</p>
            </div>
          </div>
          <div
            data-aos="flip-up"
            data-aos-duration="1000"
            className={`${styles.timeline_item}`}
          >
            <div className={styles.timeline_dot}></div>
            <div
              data-aos="flip-up"
              data-aos-duration="1000"
              className={styles.timeline_date}
            >
              2019
            </div>
            <div
              className={`dark:bg-slate-800 bg-slate-600 ${styles.timeline_content}`}
            >
              <h2>Dr. Shea/Dr. Garcia - Research Assistant</h2>
              <p>
                Created python script to reformat transcripts and clean data
              </p>
            </div>
          </div>
          <div
            data-aos="flip-up"
            data-aos-duration="1000"
            className={`${styles.timeline_item}`}
          >
            <div className={styles.timeline_dot}></div>
            <div
              data-aos="flip-up"
              data-aos-duration="1000"
              className={styles.timeline_date}
            >
              2018
            </div>
            <div
              className={`dark:bg-slate-800 bg-slate-600 ${styles.timeline_content}`}
            >
              <h2>Coherent - Wafer Inspector</h2>
              <p>
                Inspected semiconductor wafers for defects to send inventory for
                potential manufacture or to scrap
              </p>
            </div>
          </div>
          <div
            data-aos="flip-up"
            data-aos-duration="1000"
            className={`${styles.timeline_item}`}
          >
            <div className={styles.timeline_dot}></div>
            <div
              data-aos="flip-up"
              data-aos-duration="1000"
              className={styles.timeline_date}
            >
              2017
            </div>
            <div
              className={`dark:bg-slate-800 bg-slate-600 ${styles.timeline_content}`}
            >
              <h2>Coherent - Summer Intern</h2>
              <p>
                Debugged and revised Python programs for factory operational
                metrics as issues in the code were discovered
                <br />
                <br />
                Designed a C++ / Excel Macro program that automated the creation
                of a master sheet that compiled clean room data from multiple
                directories and facilities
                <br />
                <br />
                Designed the front page of the Coherent IT department website
                <br />
                <br />
                Worked on the facility server and network system configurations
                at the sister site in Easton, PA
                <br />
                <br />
                Debugged and rewired network servers in the Warren, NJ facility
                <br />
                <br />
                Developed Warren facility office space floor plan to reconfigure
                and optimize department efficiency using CAD software
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
