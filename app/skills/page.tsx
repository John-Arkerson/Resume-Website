"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { WidgetList } from "@/components/widget";
import styles from "../../styles/skills.module.css";

export default function AboutPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className={`${styles.list}`}>
        <div className={`${styles.content}`}>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className={`${styles.title}`}
          >
            Skills
          </div>
        </div>
      </div>
      <div className="mt-24 mb-24 pb-24">
        <WidgetList />
      </div>
    </div>
  );
}
