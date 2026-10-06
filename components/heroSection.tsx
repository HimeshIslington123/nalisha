"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[calc(100svh-74px)] w-full overflow-hidden bg-[#1C1A17] sm:min-h-[calc(100svh-80px)]">
      {/* =========================================================
          BACKGROUND IMAGE
          ========================================================= */}
      <div className="absolute inset-0 -z-30">
        <img
          src="/bhairav.png"
          alt="Newa cultural heritage and traditional festival"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* =========================================================
          WARM EDITORIAL OVERLAY
          ========================================================= */}

      {/* Main overlay */}
      <div
        className="
          absolute
          inset-0
          -z-20
          bg-gradient-to-r
          from-[#1C1A17]/95
          via-[#1C1A17]/72
          to-[#1C1A17]/25

          md:from-[#1C1A17]/90
          md:via-[#1C1A17]/58
          md:to-transparent
        "
      />

      {/* Slight warm overlay over whole image */}
      <div className="absolute inset-0 -z-20 bg-[#D46726]/[0.025]" />

      {/* Bottom fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          -z-10
          h-72
          bg-gradient-to-t
          from-[#1C1A17]/80
          via-[#1C1A17]/30
          to-transparent
        "
      />

      {/* =========================================================
          CONTENT
          ========================================================= */}
      <div
        className="
          relative
          mx-auto
          flex
          min-h-[calc(100svh-74px)]
          max-w-[1360px]
          items-center
          px-5
          py-16

          sm:min-h-[calc(100svh-80px)]
          sm:px-8
          sm:py-20

          lg:px-12
          lg:py-24

          xl:px-16
        "
      >
        <div className="w-full max-w-[900px]">
          {/* =====================================================
              EYEBROW
              ===================================================== */}
          <div className="mb-6 flex items-center gap-4 sm:mb-8">
            <span className="h-px w-9 bg-[#D46726] sm:w-12" />

            <span
              className="
                font-sans
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white/75

                sm:text-[11px]
                sm:tracking-[0.24em]
              "
            >
              Na Lisah Sanskritik Pucha
            </span>
          </div>

          {/* =====================================================
              MAIN HEADLINE
              ===================================================== */}
          <h1
            className="
              max-w-[900px]
              font-serif
              text-[42px]
              font-medium
              leading-[1.08]
              tracking-[-0.025em]
              text-[#FAF8F5]

              sm:text-[56px]
              sm:leading-[1.04]

              md:text-[66px]

              lg:text-[76px]

              xl:text-[82px]
            "
          >
            <span className="block">Our culture.</span>

            <span className="block">
              Our{" "}
              <span className="text-[#D46726]">
                heritage.
              </span>
            </span>

            <span className="block text-[#4E76A3]">
              Our identity.
            </span>
          </h1>

          {/* =====================================================
              SHORT STATEMENT
              ===================================================== */}
          <div className="mt-7 sm:mt-8">
            <p
              className="
                max-w-[620px]
                font-sans
                text-[15px]
                leading-7
                text-white/78

                sm:text-[17px]
                sm:leading-8
              "
            >
              Preserving Newa culture, traditional music, sacred festivals,
              and ancestral traditions — keeping our heritage alive for
              generations to come.
            </p>
          </div>

          {/* =====================================================
              BUTTONS
              ===================================================== */}
          <div
            className="
              mt-8
              flex
              flex-col
              gap-3

              sm:mt-9
              sm:flex-row
              sm:items-center
              sm:gap-4
            "
          >
            {/* PRIMARY BUTTON */}
            <Link
              href="#culture"
              className="
                group
                inline-flex
                min-h-12
                items-center
                justify-center
                gap-3
                rounded
                bg-[#D46726]
                px-6
                py-3.5
                font-sans
                text-[12px]
                font-semibold
                tracking-[0.01em]
                text-white
                transition-all
                duration-300

                hover:bg-[#B9531E]
                hover:shadow-[0_10px_30px_rgba(212,103,38,0.22)]

                focus:outline-none
                focus:ring-2
                focus:ring-[#D46726]
                focus:ring-offset-2
                focus:ring-offset-[#1C1A17]
              "
            >
              Explore Our Culture

              <ArrowRight
                size={16}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

            {/* SECONDARY BUTTON */}
            <Link
              href="#heritage"
              className="
                group
                inline-flex
                min-h-12
                items-center
                justify-center
                gap-3
                rounded
                border
                border-white/30
                bg-white/[0.04]
                px-6
                py-3.5
                font-sans
                text-[12px]
                font-semibold
                tracking-[0.01em]
                text-white
                backdrop-blur-sm
                transition-all
                duration-300

                hover:border-white/70
                hover:bg-white/[0.10]

                focus:outline-none
                focus:ring-2
                focus:ring-white
              "
            >
              <Play
                size={13}
                fill="currentColor"
                strokeWidth={1.5}
              />

              Discover Our Heritage
            </Link>
          </div>

          {/* =====================================================
              CULTURAL LINE
              ===================================================== */}
          <div className="mt-10 flex items-center gap-4 sm:mt-12">
            <span className="h-px w-8 bg-[#4E76A3] sm:w-10" />

            <p
              className="
                font-serif
                text-[13px]
                tracking-[0.02em]
                text-white/65

                sm:text-[15px]
              "
            >
              संस्कृति हाम्रो पहिचान
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================
          SUBTLE CORNER ACCENTS
          ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-[3px]
          w-28
          bg-[#D46726]
          sm:w-40
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-[3px]
          w-20
          bg-[#4E76A3]
          sm:w-32
        "
      />
    </section>
  );
}