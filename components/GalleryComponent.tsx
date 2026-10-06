
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const memories = [
  {
    src: "/kisi.png",
    alt: "Newa cultural event",
  },
  {
    src: "/gunla.png",
    alt: "Community gathering",
  },
  {
    src: "/group.png",
    alt: "Cultural celebration",
  },
  {
    src: "/praful.png",
    alt: "Traditional event",
  },
  {
    src: "/anuj.png",
    alt: "Community event",
  },
  {
    src: "/bhairav.png",
    alt: "Newa heritage celebration",
  },
  {
    src: "/dhime.png",
    alt: "Cultural gathering",
  },
  {
    src: "/dagi.png",
    alt: "Newa community",
  },
  {
    src: "/kumari.png",
    alt: "Heritage event",
  },
];

export default function MemoriesGallery() {
  /*
   * Duplicate the images so the mobile marquee
   * can loop continuously without a visible gap.
   */
  const rowOne = [...memories, ...memories];
  const rowTwo = [...memories.slice().reverse(), ...memories.slice().reverse()];
  const rowThree = [...memories, ...memories];

  return (
    <section className="w-full overflow-hidden bg-[#FAF8F5] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-10 sm:mb-12 lg:mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#D46726] sm:w-10" />

            

            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D46726] sm:text-[11px]">
              Our Memories
            </span>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <h2 className="max-w-[760px] font-serif text-[36px] leading-[1.06] tracking-[-0.025em] text-[#4E76A3] sm:text-[48px] lg:text-[56px]">
              Memories & Event Gallery
              <span className="text-[#D46726]">.</span>
            </h2>

            <p className="max-w-[450px] font-sans text-[14px] leading-7 text-[#574239] sm:text-[15px]">
              A collection of moments, celebrations, and gatherings that bring
              our heritage, community, and traditions to life.
            </p>
          </div>
        </div>

        {/* =====================================================
            DESKTOP GALLERY
        ===================================================== */}

        <div className="hidden md:grid md:auto-rows-[170px] md:grid-cols-4 md:gap-4 lg:auto-rows-[190px]">
          {/* Large image */}
          <GalleryImage
            memory={memories[0]}
            className="md:col-span-2 md:row-span-2"
          />

          {/* Small images */}
          <GalleryImage memory={memories[1]} />
          <GalleryImage memory={memories[2]} />

          <GalleryImage
            memory={memories[3]}
            className="md:row-span-2"
          />

          <GalleryImage memory={memories[4]} />
          <GalleryImage memory={memories[5]} />

          <GalleryImage memory={memories[6]} />
          <GalleryImage memory={memories[7]} />
        </div>

        {/* =====================================================
            MOBILE SLIDING GALLERY
        ===================================================== */}

        <div className="relative -mx-5 overflow-hidden md:hidden">
          {/* Soft left edge */}
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-20
              w-8
              bg-gradient-to-r
              from-[#FAF8F5]
              to-transparent
            "
          />

          {/* Soft right edge */}
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              z-20
              w-8
              bg-gradient-to-l
              from-[#FAF8F5]
              to-transparent
            "
          />

          <div className="flex flex-col gap-3">
            {/* =================================================
                ROW 1 — LEFT TO RIGHT
            ================================================= */}

            <div className="mobile-gallery-track gallery-left">
              {rowOne.map((memory, index) => (
                <MobileGalleryImage
                  key={`row-one-${index}`}
                  memory={memory}
                />
              ))}
            </div>

            {/* =================================================
                ROW 2 — RIGHT TO LEFT
            ================================================= */}

            <div className="mobile-gallery-track gallery-right">
              {rowTwo.map((memory, index) => (
                <MobileGalleryImage
                  key={`row-two-${index}`}
                  memory={memory}
                />
              ))}
            </div>

            {/* =================================================
                ROW 3 — LEFT TO RIGHT
            ================================================= */}

            <div className="mobile-gallery-track gallery-left-slow">
              {rowThree.map((memory, index) => (
                <MobileGalleryImage
                  key={`row-three-${index}`}
                  memory={memory}
                />
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="h-px w-10 bg-[#DDC1B4] sm:w-16" />

            <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.15em] text-[#8A7267] sm:text-[10px] sm:tracking-[0.18em]">
              Culture · Community · Celebration
            </p>
          </div>

          <Link
            href="/gallery"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-3
              border
              border-[#D46726]
              px-5
              py-3
              font-sans
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-[#D46726]
              transition-all
              duration-300
              hover:bg-[#D46726]
              hover:text-white
            "
          >
            View Gallery

            <ArrowUpRight
              size={15}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </div>
      </div>

      {/* =======================================================
          ANIMATIONS
      ======================================================= */}

      <style>{`
        /*
         * LEFT → RIGHT
         */
        @keyframes gallery-left-to-right {
          from {
            transform: translate3d(-50%, 0, 0);
          }

          to {
            transform: translate3d(0, 0, 0);
          }
        }

        /*
         * RIGHT → LEFT
         */
        @keyframes gallery-right-to-left {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        /*
         * Mobile track
         */
        .mobile-gallery-track {
          display: flex;
          width: max-content;
          will-change: transform;
        }

        /*
         * Row 1
         */
        .gallery-left {
          animation: gallery-left-to-right 24s linear infinite;
        }

        /*
         * Row 2
         */
        .gallery-right {
          animation: gallery-right-to-left 28s linear infinite;
        }

        /*
         * Row 3
         */
        .gallery-left-slow {
          animation: gallery-left-to-right 32s linear infinite;
        }

        /*
         * Pause animation when user touches
         * the gallery.
         */
        .mobile-gallery-track:active {
          animation-play-state: paused;
        }

        /*
         * Accessibility
         */
        @media (prefers-reduced-motion: reduce) {
          .mobile-gallery-track {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   DESKTOP IMAGE
============================================================ */

function GalleryImage({
  memory,
  className = "",
}: {
  memory: {
    src: string;
    alt: string;
  };
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden bg-[#EDE5DE] ${className}`}
    >
      <Image
        src={memory.src}
        alt={memory.alt}
        fill
        sizes="(max-width: 1024px) 25vw, 25vw"
        className="
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-[1.05]
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <span className="absolute left-0 top-0 h-[3px] w-10 bg-[#D46726] transition-all duration-500 group-hover:w-16" />

      <span className="absolute bottom-0 right-0 h-[3px] w-10 bg-[#4E76A3] transition-all duration-500 group-hover:w-16" />
    </div>
  );
}

/* ============================================================
   MOBILE IMAGE
============================================================ */

function MobileGalleryImage({
  memory,
}: {
  memory: {
    src: string;
    alt: string;
  };
}) {
  return (
    <div
      className="
        relative
        h-[145px]
        w-[205px]
        shrink-0
        overflow-hidden
        bg-[#EDE5DE]
      "
    >
      <Image
        src={memory.src}
        alt={memory.alt}
        fill
        sizes="205px"
        className="object-cover"
      />

      {/* Dark subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/25 via-transparent to-transparent" />

      {/* Orange accent */}
      <span className="absolute left-0 top-0 h-[2px] w-8 bg-[#D46726]" />

      {/* Blue accent */}
      <span className="absolute bottom-0 right-0 h-[2px] w-8 bg-[#4E76A3]" />
    </div>
  );
}
