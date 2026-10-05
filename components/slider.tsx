"use client";

import Image from "next/image";

const partners = [
  {
    name: "Organization 1",
    image: "/mob.png",
  },
  {
    name: "Organization 2",
    image: "/silai.png",
  },
  {
    name: "Organization 3",
    image: "/logo.webp",
  },
  {
    name: "Organization 4",
    image: "/newapasa.png",
  },
  {
    name: "Organization 5",
    image: "/newar.png",
  },
  {
    name: "Organization t",
    image: "/ktm.png",
  },
];

export default function Partnerships() {
  const sliderItems = [...partners, ...partners];

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF8F5] py-16 sm:py-20 lg:py-24">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <div className="mb-12 sm:mb-14 lg:mb-16">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-[#D46726]" />

            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A7267] sm:text-[11px]">
              Our Network
            </span>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 className="max-w-[760px] font-serif text-[36px] leading-[1.08] tracking-[-0.02em] text-[#1C1A17] sm:text-[46px] lg:text-[54px]">
              Partnerships & Organizations
              <span className="text-[#D46726]">.</span>
            </h2>

            <p className="max-w-[470px] font-sans text-[14px] leading-7 text-[#574239] sm:text-[15px]">
              Together with communities and organizations, we work to preserve
              and carry Newa heritage forward.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          CONTINUOUS SLIDER
      ===================================================== */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#FAF8F5] to-transparent sm:w-24 lg:w-36"
          aria-hidden="true"
        />

        {/* Right fade */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#FAF8F5] to-transparent sm:w-24 lg:w-36"
          aria-hidden="true"
        />

        {/* Moving track */}
        <div className="flex w-max animate-partner-slider">
          {sliderItems.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="group flex h-[120px] w-[200px] shrink-0 items-center justify-center px-7 sm:h-[145px] sm:w-[240px] sm:px-9 lg:h-[165px] lg:w-[280px] lg:px-12"
            >
              <div className="relative h-[80px] w-full transition-transform duration-500 ease-out group-hover:scale-[1.06] sm:h-[95px] lg:h-[110px]">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  sizes="280px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          BOTTOM
      ===================================================== */}
      <div className="mx-auto mt-10 max-w-[1360px] px-5 sm:mt-12 sm:px-8 lg:mt-14 lg:px-12">
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="h-px flex-1 bg-[#DDC1B4]" />

          <span className="shrink-0 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8A7267] sm:text-[10px]">
            Together · Our Heritage · Our Community
          </span>

          <span className="h-px flex-1 bg-[#DDC1B4]" />
        </div>
      </div>

      {/* =====================================================
          ANIMATION
      ===================================================== */}
      <style jsx>{`
        @keyframes partner-slider {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .animate-partner-slider {
          animation: partner-slider 30s linear infinite;
          will-change: transform;
        }

        @media (max-width: 640px) {
          .animate-partner-slider {
            animation-duration: 22s;
          }
        }

        @media (min-width: 1024px) {
          .animate-partner-slider {
            animation-duration: 34s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-partner-slider {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}