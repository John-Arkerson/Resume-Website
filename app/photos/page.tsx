import styles from "../../styles/photos.module.css";

import HomeCard from "@/components/card";

export default function PhotosPage() {
  return (
    <div className="max-w-full">
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className={`${styles.content}`}>
          <div
            className={`${styles.title}`}
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Photo Gallery
          </div>
        </div>
        <div className="text-center justify-center lg:ml-16">
          <HomeCard />
        </div>
      </section>
    </div>
  );
}
