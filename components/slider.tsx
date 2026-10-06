
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
    name: "Organization 6",
    image: "/ktm.png",
  },
];

export default function Partnerships() {
  const sliderItems = [...partners, ...partners];

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF8F5] pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        <div className="mb-10 sm:mb-12 lg:mb-14">
          {/* Section label */}
          <div className="mb-5 flex items-center gap-3">
            {/* Orange accent */}
            <span className="h-[2px] w-8 bg-[#D46726] sm:w-10" />

       

            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D46726] sm:text-[11px]">
              Our Network
            </span>
          </div>

          {/* Heading + description */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 className="max-w-[760px]  text-[#1C1A17] font-serif text-[36px] leading-[1.1] tracking-[-0.015em] sm:text-[52px]">
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
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#FAF8F5] to-transparent sm:w-20 lg:w-32"
          aria-hidden="true"
        />

        {/* Right fade */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#FAF8F5] to-transparent sm:w-20 lg:w-32"
          aria-hidden="true"
        />

        {/* Moving track */}
        <div className="partner-slider flex w-max">
          {sliderItems.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="
                group
                flex
                h-[82px]
                w-[125px]
                shrink-0
                items-center
                justify-center
                px-3

                sm:h-[120px]
                sm:w-[190px]
                sm:px-6

                lg:h-[150px]
                lg:w-[250px]
                lg:px-10
              "
            >
              <div
                className="
                  relative
                  h-[52px]
                  w-full
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-[1.06]

                  sm:h-[75px]

                  lg:h-[100px]
                "
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 640px) 125px, (max-width: 1024px) 190px, 250px"
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

      <div className="mx-auto mt-8 max-w-[1360px] px-5 sm:mt-10 sm:px-8 lg:mt-12 lg:px-12">
        <div className="flex items-center gap-3 sm:gap-6">
          <span className="h-px flex-1 bg-[#DDC1B4]" />

          <span className="shrink-0 font-sans text-[8px] font-semibold uppercase tracking-[0.15em] text-[#8A7267] sm:text-[10px] sm:tracking-[0.18em]">
            Together · Our Heritage · Our Community
          </span>

          <span className="h-px flex-1 bg-[#DDC1B4]" />
        </div>
      </div>

      {/* =====================================================
          ANIMATION
      ===================================================== */}

      <style>{`
        @keyframes partner-slider {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .partner-slider {
          animation: partner-slider 30s linear infinite;
          will-change: transform;
        }

        @media (max-width: 640px) {
          .partner-slider {
            animation-duration: 20s;
          }
        }

        @media (min-width: 641px) and (max-width: 1023px) {
          .partner-slider {
            animation-duration: 26s;
          }
        }

        @media (min-width: 1024px) {
          .partner-slider {
            animation-duration: 34s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .partner-slider {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}

