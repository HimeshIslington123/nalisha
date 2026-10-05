"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        isolate
        min-h-[calc(100svh-74px)]
        w-full
        overflow-hidden
        bg-[#1d1b18]

        sm:min-h-[calc(100svh-80px)]
      "
    >
      {/* =========================================================
          BACKGROUND IMAGE
          ========================================================= */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/bhairav.png"
          alt="Newari cultural heritage, traditional instruments and festival"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </div>

      {/* =========================================================
          EDITORIAL OVERLAY
          ========================================================= */}

      {/* Main left-to-right overlay */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-r
          from-[#1d1b18]/95
          via-[#1d1b18]/72
          to-[#1d1b18]/20

          md:from-[#1d1b18]/90
          md:via-[#1d1b18]/60
          md:to-transparent
        "
      />

      {/* Bottom fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          -z-10
          h-56
          bg-gradient-to-t
          from-[#1d1b18]/70
          to-transparent
        "
      />

      {/* =========================================================
          CONTENT
          ========================================================= */}
      <div
        className="
          mx-auto
          flex
          min-h-[calc(100svh-74px)]
          max-w-[1360px]
          items-center
          px-5
          py-20

          sm:min-h-[calc(100svh-80px)]
          sm:px-8

          lg:px-12
          lg:py-24

          xl:px-16
        "
      >
        <div className="w-full max-w-[850px]">

          {/* =====================================================
              EYEBROW
              ===================================================== */}
          <div className="mb-6 flex items-center gap-3 sm:mb-7">
            <span className="h-px w-8 bg-[#C29B38] sm:w-12" />

            <span
              className="
                font-sans
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#ffdbcb]

                sm:text-[11px]
                sm:tracking-[0.2em]
              "
            >
              Na Lisah Sanskritik Pucha
            </span>
          </div>

          {/* =====================================================
              NEPALI HEADLINE
              ===================================================== */}
          <h1
            className="
              font-serif
              text-[40px]
              font-semibold
              leading-[1.12]
              tracking-[-0.02em]
              text-[#fff8f3]

              sm:text-[52px]
              sm:leading-[1.08]

              md:text-[60px]

              lg:text-[70px]
              lg:leading-[1.04]

              xl:text-[76px]
            "
          >
            नेपालको मौलिक बाजा,
            <br />

            <span className="text-[#ffdbcb]">
              जात्रा र नेवाः
            </span>

            <br />

            <span className="text-[#D46726]">
              परम्पराको संरक्षण
            </span>
          </h1>

          {/* =====================================================
              ENGLISH STATEMENT
              ===================================================== */}
          <div className="mt-6 sm:mt-7">
            <p
              className="
                font-serif
                text-[25px]
                font-medium
                leading-tight
                text-[#fff8f3]

                sm:text-[31px]

                lg:text-[36px]
              "
            >
              Preserving Culture.
            </p>

            <p
              className="
                mt-1
                font-serif
                text-[25px]
                font-medium
                italic
                leading-tight
                text-[#ffdbcb]

                sm:text-[31px]

                lg:text-[36px]
              "
            >
              Celebrating Our Heritage.
            </p>
          </div>

          {/* =====================================================
              DESCRIPTION
              ===================================================== */}
          <p
            className="
              mt-6
              max-w-[650px]
              font-sans
              text-[14px]
              leading-6
              text-white/75

              sm:mt-7
              sm:text-[16px]
              sm:leading-7

              lg:text-[17px]
              lg:leading-8
            "
          >
            Na Lisah Sanskritik Pucha is a community-driven cultural
            organization dedicated to preserving, practicing, and
            promoting Nepal&apos;s rich Newari heritage, sacred festival
            rhythms, traditional instruments, and ancestral traditions
            for generations to come.
          </p>

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
            "
          >
            {/* PRIMARY */}
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
                py-3
                font-sans
                text-[13px]
                font-semibold
                text-[#fff8f3]
                transition-all
                duration-300

                hover:bg-[#E27D38]
                hover:shadow-[0_8px_24px_rgba(28,26,23,0.18)]

                focus:outline-none
                focus:ring-2
                focus:ring-[#ffdbcb]
              "
            >
              Explore Our Culture

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

            {/* SECONDARY */}
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
                border-white/45
                bg-white/[0.06]
                px-6
                py-3
                font-sans
                text-[13px]
                font-semibold
                text-white
                backdrop-blur-sm
                transition-all
                duration-300

                hover:border-white
                hover:bg-white
                hover:text-[#1d1b18]

                focus:outline-none
                focus:ring-2
                focus:ring-white
              "
            >
              <Play
                size={14}
                fill="currentColor"
                strokeWidth={1.5}
              />

              Discover Our Heritage
            </Link>
          </div>

          {/* =====================================================
              BOTTOM LABEL
              ===================================================== */}
       
        </div>
      </div>

     
    </section>
  );
}