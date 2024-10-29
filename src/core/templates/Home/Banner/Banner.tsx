"use client";
import { ImageConstant } from "@/core/constants";
import {
  AwaitedReactNode,
  Fragment,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  SetStateAction,
  useState,
} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, CarouselItem } from "@/core/components";

export const Banner = () => {
  const { BANNER1, BANNER2, BANNER3, BANNER4 } = ImageConstant;
  const [currentSlide, setCurrentSlide] = useState(0);
  const activeDotColor = "#B8135D";
  const inactiveDotColor = "white";
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: (
      dots:
        | string
        | number
        | bigint
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | Iterable<ReactNode>
        | ReactPortal
        | Promise<AwaitedReactNode>
        | null
        | undefined
    ) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          opacity: 0,
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor:
            currentSlide === i ? activeDotColor : inactiveDotColor,
          borderRadius: "50%",
          display: "inline-block",
        }}
      ></div>
    ),
    beforeChange: (oldIndex: any, newIndex: SetStateAction<number>) => {
      setCurrentSlide(newIndex);
    },
  };
  const slides = [
    { url: BANNER1, alt: "slide1" },
    { url: BANNER2, alt: "slide2" },
    { url: BANNER3, alt: "slide3" },
    { url: BANNER4, alt: "slide4" },
  ];
  return (
    <section className="mt-12">
      <div className="text-center">
        <h1 className="text-[72px] font-bold">El-Patron Security</h1>
        <p>
          Proudly specializing and providing unarmed and armed security services
          in the Greater
        </p>
        <p>Los Angeles Areas.</p>
      </div>

      <div className="overflow-hidden mt-6">
        <Carousel>
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <Fragment key={index}>
                <CarouselItem
                  className="aspect-2/1 carousel-item h-[560px] md:aspect-3/1 bg-center bg-no-repeat bg-cover relative flex items-center justify-center"
                  style={{ backgroundImage: `url(${slide.url})` }}
                ></CarouselItem>
              </Fragment>
            ))}
          </Slider>
        </Carousel>
      </div>
    </section>
  );
};
