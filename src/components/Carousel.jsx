import React, { useState, useEffect, useRef } from "react";

const Carousel = () => {
  const slides = [
    {
      title: "Construye con nosotros",
      description: "Solidez y precisión para proyectos que trascienden",
      image: "/images/bg1.jpg",
      buttonLabel: "Conócenos",
      path: "/about",
    },
    {
      title: "Conoce nuestros servicios",
      description: "Innovación y calidad para tu proyecto",
      image: "/images/bg2.jpg",
      buttonLabel: "Ver servicios",
      path: "/services",
    },
    {
      title: "Contacta con nosotros",
      description: "Estamos para ayudarte",
      image: "/images/bg3.jpg",
      buttonLabel: "Contáctanos",
      path: "/contact",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const autoSlideInterval = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const nextSlide = () => {
    if (animating) return;
    resetAutoSlide();
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setAnimating(false);
    }, isMobile ? 500 : 1000);
  };

  const prevSlide = () => {
    if (animating) return;
    resetAutoSlide();
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
      );
      setAnimating(false);
    }, isMobile ? 500 : 1000);
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideInterval.current);
    autoSlideInterval.current = setInterval(nextSlide, 5000);
  };

  useEffect(() => {
    autoSlideInterval.current = setInterval(nextSlide, 5000);
    return () => clearInterval(autoSlideInterval.current);
  }, []);

  return (
    <section className="relative h-screen bg-black">
      <div
        className={`h-screen bg-black relative bg-cover bg-center bg-no-repeat shadow-lg overflow-hidden transition-all ${
          isMobile ? "duration-500 ease-in-out" : "duration-1000 ease-in-out"
        }`}
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-6 flex flex-col justify-center md:mx-10 items-start h-full text-white">
          <h3
            className={`text-6xl font-semibold mb-4 transform transition-all ${
              isMobile ? "duration-500" : "duration-1000"
            } ease-in-out ${animating ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"}`}
          >
            {slides[currentIndex].title}
          </h3>
          <p
            className={`text-xl transform transition-all ${
              isMobile ? "duration-500" : "duration-1000"
            } ease-in-out delay-200 ${animating ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"}`}
          >
            {slides[currentIndex].description}
          </p>
          <a
            href={slides[currentIndex].path}
            className={`transition-all ${
              isMobile ? "duration-500" : "duration-1000"
            } ease-in-out delay-300 transform ${animating ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"}`}
          >
            <button className="mt-4 bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
              {slides[currentIndex].buttonLabel}
            </button>
          </a>
        </div>
      </div>

      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black w-10 h-10 max-md:hidden"
        aria-label="Previous Slide"
        onClick={prevSlide}
      >
        &larr;
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black w-10 h-10 max-md:hidden"
        aria-label="Next Slide"
        onClick={nextSlide}
      >
        &rarr;
      </button>
    </section>
  );
};

export default Carousel;
