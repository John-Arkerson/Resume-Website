"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Image } from "@heroui/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { useState } from "react";
import { useTheme } from "next-themes";

import { infoConfig } from "@/config/info";
import styles from "../styles/skills.module.css";

export const WidgetList = () => {
  interface data {
    label: string;
    data: string;
  }
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalData, setModalData] = useState<data>({ label: "", data: ""});
  const { theme } = useTheme();

  useEffect(() => {
    AOS.init();
  }, []);

  const handleOpenModal = (item: {
    id: string;
    key: string;
    label: string;
    year: string;
    data: string;
    image: string;
  }) => {
    setModalData(item);
    onOpen();
  };

  return (
    <div className="grid lg:grid-flow-col gap-3 items-center justify-center md:grid-flex sm:grid-cols-1 flex-grow">
      {infoConfig.widgetInfo.map((item) => (
        <div
          data-aos="flip-right"
          data-aos-duration={item.duration}
          className={`dark:bg-default-100 dark:border-gray-700 col-span-2 ${styles.card_wrap}`}
          key={item.key}
          onClick={() => handleOpenModal(item)}
        >
          <div className={`p-10 ${styles[item.header_style]}`}>
            <Image
              alt="Album cover"
              className={`${styles.card_header_image}`}
              height={100}
              width={100}
              key={item.id}
              src={item.image}
              style={{ filter: theme === "light" ? "invert(1)" : "none" }}
            />
          </div>
          <div className={styles.card_content}>
            <h1 className={`dark:text-white ${styles.card_title}`}>
              {item.year}
            </h1>
            <button className={`${styles[item.button_style]}`}>
              {item.label}
            </button>
          </div>
        </div>
      ))}
      <Modal
        className="max-w-7xl"
        isOpen={isOpen}
        scrollBehavior="inside"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {modalData.label}
              </ModalHeader>
              <ModalBody>
                <p className="whitespace-pre-line">{modalData.data}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
