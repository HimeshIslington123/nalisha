
"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    image: "/kisi.png",
    label: "येँया: पुन्हि  INDRA JĀTRĀ",
    quote: "A culture lives when its people continue to celebrate it.",
    description:
      "Through chariot cords, traditional rhythms, and sacred libations, our youth stand proudly at the epicentre of festival life.",
    button: "Discover Our Culture",
  },
  {
    image: "/bhairav.png",
    label: "धिमे  DHIME",
    quote: "The rhythm of our ancestors still beats within us.",
    description:
      "From generation to generation, traditional instruments and music keep the spirit of Newar culture alive.",
    button: "Explore Our Music",
  },
  {
    image: "/kumari.png",
    label: "जात्रा  JĀTRĀ",
    quote:
      "Tradition is not something we inherit. It is something we keep alive.",
    description:
      "Our festivals bring communities together through devotion, music, celebration, and generations of living tradition.",
    button: "Explore Our Festivals",
  },
  {
    image: "/dagi.png",
    label: "समुदाय  COMMUNITY",
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

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-[calc(100svh-72px)] min-h-[620px] w-full overflow-hidden bg-[#071827] sm:min-h-[600px]">

      {/* =====================================================
          BACKGROUND SLIDES
      ===================================================== */}

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
            className="h-full w-full object-cover object-center"
          />
        </div>
      ))}

      {/* =====================================================
          DESKTOP OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

      {/* =====================================================
          MOBILE BOTTOM OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 bg-gradient-to-t from-[#06131f]/90 via-[#06131f]/25 to-black/5 sm:hidden" />

      {/* Subtle blue tint */}
      <div className="absolute inset-0 bg-[#0B4F8A]/10" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#06131f]/80 to-transparent" />

      {/* =====================================================
          CONTENT
          Bottom aligned on BOTH mobile and desktop
      ===================================================== */}

      <div className="absolute inset-x-0 bottom-0 z-10 pb-24 sm:pb-28">
        <div className="site-container">

          <div className="max-w-[800px]">

            {/* =================================================
                LABEL
                Same transparent rounded style everywhere
            ================================================= */}

            <div
              key={`label-${current}`}
              className="mb-4 inline-flex animate-fade-up items-center rounded-full border border-white/25 bg-black/20 px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.13em] text-white shadow-lg backdrop-blur-md sm:mb-5 sm:px-4 sm:py-2 sm:text-xs"
            >
              {slide.label}
            </div>

            {/* =================================================
                QUOTE
            ================================================= */}

            <h1
              key={`quote-${current}`}
              className="max-w-[780px] animate-fade-up text-[34px] font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-[48px] md:text-[58px] lg:text-[66px]"
            >
              {slide.quote}
            </h1>

            {/* =================================================
                ORANGE LINE
            ================================================= */}

            <div
              key={`line-${current}`}
              className="mt-5 h-[3px] w-12 animate-fade-up rounded-full bg-[#F28C28] sm:mt-6 sm:w-14"
            />

            {/* =================================================
                DESCRIPTION
                Hidden on mobile
            ================================================= */}

            <p
              key={`description-${current}`}
              className="mt-6 hidden max-w-[700px] animate-fade-up text-[16px] leading-8 text-white/85 sm:block"
            >
              {slide.description}
            </p>

            {/* =================================================
                BUTTON
            ================================================= */}

            <button
              key={`button-${current}`}
              className="group mt-7 inline-flex animate-fade-up items-center gap-2 rounded-full border border-[#F28C28] bg-[#F28C28] px-5 py-3 text-[12px] font-semibold text-white shadow-lg transition-all duration-300 hover:bg-transparent hover:text-[#F28C28] active:scale-95 sm:mt-8 sm:px-7 sm:py-4 sm:text-sm"
            >
              {slide.button}

              <ArrowRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4"
              />
            </button>

          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM CONTROLS
      ===================================================== */}

      <div className="absolute bottom-5 left-0 right-0 z-20 sm:bottom-7">
        <div className="site-container">

          <div className="flex items-center justify-between">

            {/* =================================================
                SLIDE INDICATORS
            ================================================= */}

            <div className="flex items-center gap-1.5">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === current
                      ? "w-8 bg-[#F28C28] sm:w-12"
                      : "w-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>

            {/* =================================================
                ARROWS
            ================================================= */}

            <div className="flex items-center gap-1.5 sm:gap-2">

              <button
                onClick={previousSlide}
                aria-label="Previous slide"
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:border-[#F28C28] hover:bg-[#F28C28] sm:h-12 sm:w-12"
              >
                <ArrowLeft
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-x-0.5 sm:h-[18px] sm:w-[18px]"
                />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-md transition-all duration-300 hover:border-[#F28C28] hover:bg-[#F28C28] sm:h-12 sm:w-12"
              >
                <ArrowRight
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 sm:h-[18px] sm:w-[18px]"
                />
              </button>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
}

