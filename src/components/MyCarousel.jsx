// data.js içinden data değişkenini import et
// https://reactstrap.github.io/?path=/docs/components-carousel--carousel adresinde çalışan bir carousel kodu var.
// Örneği incele ve kullan. İleri ve Geri componentlarının ve fonksiyonlarının nasıl kullanıldığına dikkat et.

import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import { data } from "../data";

function MyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = data.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <h3>{item.title}</h3>
        <img
          src={item.src}
          alt={item.title}
          className="d-block w-100"
          style={{ maxHeight: "450px", objectFit: "cover" }}
        />
        <CarouselCaption captionText={item.text}>
          <p>{item.text}</p>
        </CarouselCaption>
      </CarouselItem>
    );
  });

  return (
    <div data-testid="myCarouselWrapper">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={data}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />

        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}
export default MyCarousel;
