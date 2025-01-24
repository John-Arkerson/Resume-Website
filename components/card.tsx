"use client";
import { Card } from "@heroui/card";
import { useEffect } from "react";
import { Image } from "@heroui/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomeCard() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="max-w-[1400px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card
        className="w-full h-full col-span-12 sm:col-span-7"
        data-aos="flip-left"
        data-aos-duration="1500"
      >
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/photos/all_hands.jpg"
        />
      </Card>
      <Card
        className="col-span-12 sm:col-span-4 h-full"
        data-aos="flip-right"
        data-aos-duration="1500"
      >
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/photos/pompii.jpg"
        />
      </Card>
      <Card
        className="col-span-12 sm:col-span-4 h-full"
        data-aos="flip-left"
        data-aos-duration="1500"
      >
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/photos/chateau.jpg"
        />
      </Card>
      <Card
        className="w-full h-full col-span-12 sm:col-span-7"
        data-aos="flip-right"
        data-aos-duration="1500"
      >
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="/photos/cliff.jpg"
        />
      </Card>
      <Card
        className="w-full h-full col-span-12 sm:col-span-7"
        data-aos="flip-left"
        data-aos-duration="1500"
      >
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="/photos/coliseum.jpg"
        />
      </Card>
      <Card
        className="col-span-12 sm:col-span-4 h-full"
        data-aos="flip-right"
        data-aos-duration="1500"
      >
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/photos/sunset.jpg"
        />
      </Card>
      <Card
        className="col-span-12 sm:col-span-4 h-full"
        data-aos="flip-left"
        data-aos-duration="1500"
      >
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/photos/island.jpg"
        />
      </Card>
      <Card
        className="w-full h-full col-span-12 sm:col-span-7"
        data-aos="flip-right"
        data-aos-duration="1500"
      >
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/photos/flag.jpg"
        />
      </Card>
      <Card
        className="w-full h-full col-span-12 sm:col-span-7"
        data-aos="flip-left"
        data-aos-duration="1500"
      >
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/photos/garden.jpg"
        />
      </Card>
      <Card
        className="col-span-12 sm:col-span-4 h-full"
        data-aos="flip-right"
        data-aos-duration="1500"
      >
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="/photos/grass.jpg"
        />
      </Card>
      <Card
        className="col-span-12 sm:col-span-4 h-full"
        data-aos="flip-left"
        data-aos-duration="1500"
      >
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="/photos/spanish_castle.jpg"
        />
      </Card>
      <Card
        className="w-full h-full col-span-12 sm:col-span-7"
        data-aos="flip-right"
        data-aos-duration="1500"
      >
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="/photos/one_way.jpg"
        />
      </Card>
      <Card
        className="w-full h-full col-span-12 sm:col-span-7"
        data-aos="flip-left"
        data-aos-duration="1500"
      >
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/photos/dove.jpg"
        />
      </Card>
      <Card
        className="col-span-12 sm:col-span-4 h-full"
        data-aos="flip-right"
        data-aos-duration="1500"
      >
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/photos/vines.jpg"
        />
      </Card>
    </div>
  );
}
