
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
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[600px] w-full overflow-hidden bg-[#14213D]">

      {/* =====================================================
          BACKGROUND IMAGES
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
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      {/* =====================================================
          CONTROLLED OVERLAY

          Instead of putting black/45 over the entire image,
          the left side is darker for readability while the
          right side remains much more visible.
      ===================================================== */}

<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

      {/* Subtle overall tint */}

      <div className="absolute inset-0 bg-[#0B4F8A]/10" />

      {/* Bottom fade */}

      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#071827]/75 via-[#071827]/25 to-transparent" />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 flex h-full items-center">

        <div className="site-container">

          <div className="max-w-[800px]">

            {/* =================================================
                LABEL
            ================================================= */}

            <div
              key={`label-${current}`}
              className="mb-5 inline-flex animate-fade-up items-center gap-2 rounded-md border border-white/20 bg-[#0B4F8A]/75 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-lg backdrop-blur-md sm:text-xs"
            >
              {/* Orange accent */}

     

              {slide.label}
            </div>

            {/* =================================================
                QUOTE

                No font-serif.
                Uses the same global font as the rest of site.
            ================================================= */}

            <h1
              key={`quote-${current}`}
              className="max-w-[780px] animate-fade-up text-[38px] font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-[48px] md:text-[58px] lg:text-[66px]"
            >
              {slide.quote}
            </h1>

            {/* =================================================
                ORANGE UNDERLINE
            ================================================= */}

            <div
              key={`line-${current}`}
              className="mt-6 h-[3px] w-14 animate-fade-up rounded-full bg-[#F28C28]"
            />

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              key={`description-${current}`}
              className="mt-6 max-w-[700px] animate-fade-up text-[14px] leading-7 text-white/85 sm:text-[16px] sm:leading-8"
            >
              {slide.description}
            </p>

            {/* =================================================
                BUTTON
            ================================================= */}

            <button
              key={`button-${current}`}
              className="group mt-8 inline-flex items-center gap-2 animate-fade-up rounded-md bg-[#0B4F8A] px-6 py-3.5 text-[13px] font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#F28C28] hover:shadow-xl active:scale-95 sm:px-7 sm:py-4 sm:text-sm"
            >
              {slide.button}

              <ArrowRight
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

          </div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM CONTROLS
      ===================================================== */}

      <div className="absolute bottom-7 left-0 right-0 z-20">

        <div className="site-container">

          <div className="flex items-center justify-between">

            {/* =================================================
                INDICATORS
            ================================================= */}

            <div className="flex items-center gap-2">

              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === current
                      ? "w-12 bg-[#F28C28]"
                      : "w-3 bg-white/45 hover:bg-white/75"
                  }`}
                />
              ))}

            </div>

            {/* =================================================
                ARROWS
            ================================================= */}

            <div className="flex items-center gap-2">

              <button
                onClick={previousSlide}
                aria-label="Previous slide"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0B4F8A]/45 text-white backdrop-blur-md transition-all duration-300 hover:border-[#F28C28] hover:bg-[#F28C28] sm:h-12 sm:w-12"
              >
                <ArrowLeft
                  size={18}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-x-0.5"
                />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0B4F8A]/45 text-white backdrop-blur-md transition-all duration-300 hover:border-[#F28C28] hover:bg-[#F28C28] sm:h-12 sm:w-12"
              >
                <ArrowRight
                  size={18}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

