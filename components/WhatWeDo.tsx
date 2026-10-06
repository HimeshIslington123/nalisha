
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { initiatives } from "@/data/initiatives";

export default function WhatWeDo() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF8F5] pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12">
      {/* =====================================================
          SUBTLE THEME GLOWS
      ===================================================== */}

      {/* Orange glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#D46726]/[0.045] blur-3xl" />

      {/* Blue glow */}
      <div className="pointer-events-none absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-[#4E76A3]/[0.045] blur-3xl" />

      <div className="relative mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-8 border-b border-[#DDC1B4] pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:pb-12">
          {/* =================================================
              LEFT — TITLE
          ================================================= */}

          <div>
            {/* Section label */}
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[#D46726]" />

              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D46726]">
                हाम्रो कार्यक्षेत्र
              </span>
            </div>

            {/* =================================================
                SAME SIZE AS MISSION HEADING
            ================================================= */}

            <h2 className="mt-5 max-w-[700px] font-serif text-[36px] leading-[1.1] tracking-[-0.015em] text-[#1C1A17] sm:text-[52px]">
              <span className="text-black">What</span>{" "}
              <span className="text-[#D46726]">We </span>
                  <span className="text-[#4E76A3]"> Do</span>
              <span className="text-[#4E76A3]">.</span>
            </h2>
          </div>

          {/* =================================================
              RIGHT — DESCRIPTION
          ================================================= */}

          <div className="lg:ml-auto lg:max-w-[580px]">
            <p className="font-sans text-[15px] leading-7 text-[#574239] sm:text-[16px] sm:leading-8">
              We create spaces for Newa culture to be learned, practiced,
              experienced, and carried forward — from traditional sounds and
              instruments to living rituals and community traditions.
            </p>
          </div>
        </div>

        {/* =====================================================
            INITIATIVES
        ===================================================== */}

        <div className="mt-2">
          {initiatives.map((initiative, index) => {
            const isEven = index % 2 === 0;

            return (
              <Link
                key={initiative.slug}
                href={`/initiatives/${initiative.slug}`}
                className="
                  group
                  relative
                  grid
                  grid-cols-[42px_1fr]
                  gap-5
                  border-b
                  border-[#DDC1B4]
                  py-8
                  transition-colors
                  duration-300

                  sm:grid-cols-[60px_150px_1fr_auto]
                  sm:gap-7
                  sm:py-9

                  lg:grid-cols-[80px_220px_1fr_auto]
                  lg:gap-10
                  lg:py-10
                "
              >
                {/* =================================================
                    NUMBER
                ================================================= */}

                <div className="pt-1">
                  <span
                    className={`
                      font-serif
                      text-[22px]
                      transition-colors
                      duration-300
                      sm:text-[25px]
                      ${
                        isEven
                          ? "text-[#D46726] group-hover:text-[#4E76A3]"
                          : "text-[#4E76A3] group-hover:text-[#D46726]"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* =================================================
                    IMAGE
                ================================================= */}

                <div
                  className="
                    relative
                    col-start-2
                    row-start-1
                    h-[110px]
                    w-full
                    overflow-hidden
                    bg-[#F5F0E8]

                    sm:h-[120px]

                    lg:h-[145px]
                  "
                >
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    fill
                    sizes="(max-width: 640px) 150px, (max-width: 1024px) 220px, 220px"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/30 via-transparent to-transparent opacity-60" />

                  {/* Orange corner */}
                  <span
                    className={`
                      absolute
                      left-0
                      top-0
                      h-[3px]
                      w-10
                      transition-all
                      duration-500
                      group-hover:w-16
                      ${
                        isEven
                          ? "bg-[#D46726]"
                          : "bg-[#4E76A3]"
                      }
                    `}
                  />

                  {/* Blue / Orange bottom corner */}
                  <span
                    className={`
                      absolute
                      bottom-0
                      right-0
                      h-[3px]
                      w-10
                      transition-all
                      duration-500
                      group-hover:w-16
                      ${
                        isEven
                          ? "bg-[#4E76A3]"
                          : "bg-[#D46726]"
                      }
                    `}
                  />
                </div>

                {/* =================================================
                    MAIN CONTENT
                ================================================= */}

                <div
                  className="
                    col-start-2
                    mt-4

                    sm:col-start-3
                    sm:row-start-1
                    sm:mt-0
                    sm:self-center
                  "
                >
                  {/* Small label */}
                  <div className="mb-3">
                    <span
                      className={`
                        font-sans
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        transition-colors
                        duration-300
                        sm:text-[10px]
                        ${
                          isEven
                            ? "text-[#D46726]"
                            : "text-[#4E76A3]"
                        }
                      `}
                    >
                      Na Lisah Initiative
                    </span>
                  </div>

                  {/* Initiative title */}
                  <h3
                    className="
                      font-serif
                      text-[24px]
                      leading-[1.2]
                      text-[#1C1A17]
                      transition-colors
                      duration-300
                      group-hover:text-[#D46726]

                      sm:text-[27px]

                      lg:text-[31px]
                    "
                  >
                    {initiative.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      max-w-[600px]
                      font-sans
                      text-[13px]
                      leading-6
                      text-[#574239]

                      sm:text-[14px]
                      sm:leading-7

                      lg:max-w-[650px]
                    "
                  >
                    {initiative.description}
                  </p>
                </div>

                {/* =================================================
                    ARROW
                ================================================= */}

                <div
                  className="
                    col-start-2
                    mt-4
                    flex
                    items-center

                    sm:col-start-4
                    sm:row-start-1
                    sm:mt-0
                    sm:self-center
                  "
                >
                  <div
                    className={`
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      border
                      text-[#1C1A17]
                      transition-all
                      duration-300

                      sm:h-11
                      sm:w-11

                      ${
                        isEven
                          ? "border-[#DDC1B4] group-hover:border-[#D46726] group-hover:bg-[#D46726]"
                          : "border-[#DDC1B4] group-hover:border-[#4E76A3] group-hover:bg-[#4E76A3]"
                      }

                      group-hover:text-white
                    `}
                  >
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.6}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </div>
                </div>

                {/* =================================================
                    HOVER LINE
                ================================================= */}

                <span
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    transition-all
                    duration-500
                    group-hover:w-full
                    ${
                      isEven
                        ? "bg-[#D46726]"
                        : "bg-[#4E76A3]"
                    }
                  `}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

