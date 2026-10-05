"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/kisi.png",
    label: "येँया: पुन्हि • INDRA JĀTRĀ",
    quote: "A culture lives when its people continue to celebrate it.",
    description:
      "Through chariot cords, traditional rhythms, and sacred libations, our youth stand proudly at the epicentre of festival life.",
    button: "Discover Our Culture",
  },
  {
    image: "/bhairav.png",
    label: "धिमे • DHIME",
    quote: "The rhythm of our ancestors still beats within us.",
    description:
      "From generation to generation, traditional instruments and music keep the spirit of Newar culture alive.",
    button: "Explore Our Music",
  },
  {
    image: "/kumari.png",
    label: "जात्रा • JĀTRĀ",
    quote: "Tradition is not something we inherit. It is something we keep alive.",
    description:
      "Our festivals bring communities together through devotion, music, celebration, and generations of living tradition.",
    button: "Explore Our Festivals",
  },
  {
    image: "/dagi.png",
    label: "समुदाय • COMMUNITY",
    quote: "Our culture connects generations, communities, and hearts.",
    description:
      "We celebrate our heritage by creating opportunities for young people to learn, participate, and carry tradition forward.",
    button: "Meet Our Community",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[600px] w-full overflow-hidden bg-black">
      {/* Background Images */}
      {slides.map((item, index) => (
        <div
          key={item.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={item.image}
            alt={item.label}
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Extra left-to-right gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-14">
          <div className="max-w-[800px]">

            {/* Label */}
            <div
              key={`label-${current}`}
              className="mb-5 inline-flex animate-fade-up rounded-md border border-white/10 bg-sky-600/80 px-4 py-2 text-sm font-medium tracking-wide text-white backdrop-blur-sm sm:text-base"
            >
              {slide.label}
            </div>

            {/* Quote */}
            <h1
              key={`quote-${current}`}
              className="animate-fade-up font-serif text-4xl font-medium italic leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl lg:text-[64px]"
            >
              "{slide.quote}"
            </h1>

            {/* Paragraph */}
            <p
              key={`description-${current}`}
              className="mt-6 max-w-[760px] animate-fade-up text-base leading-7 text-white/80 sm:text-lg sm:leading-8"
            >
              {slide.description}
            </p>

            {/* Button */}
            <button
              key={`button-${current}`}
              className="mt-8 animate-fade-up rounded-md bg-sky-500 px-7 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/20 active:scale-95"
            >
              {slide.button}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-6 right-6 z-20 mx-auto flex max-w-[1400px] items-center justify-between sm:left-10 sm:right-10 lg:left-14 lg:right-14">

        {/* Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === current
                  ? "w-12 bg-white"
                  : "w-3 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={previousSlide}
            aria-label="Previous slide"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-2xl text-white backdrop-blur-md transition-all duration-300 hover:bg-white/35"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-2xl text-white backdrop-blur-md transition-all duration-300 hover:bg-white/35"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}