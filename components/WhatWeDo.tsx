import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { initiatives } from "@/data/initiatives";

export default function WhatWeDo() {
  return (
    <section className="w-full bg-[#FAF8F5] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid gap-8 border-b border-[#DDC1B4] pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:pb-12">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[#D46726]" />

              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A7267]">
                हाम्रो कार्यक्षेत्र
              </span>
            </div>

            <h2 className="font-serif text-[38px] leading-[1.08] tracking-[-0.02em] text-[#1C1A17] sm:text-[48px] lg:text-[54px]">
              What We Do
              <span className="text-[#D46726]">.</span>
            </h2>
          </div>

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
            const Icon = initiative.icon;

            return (
              <Link
                key={initiative.slug}
                href={`/initiatives/${initiative.slug}`}
                className="group relative grid grid-cols-[42px_1fr] gap-5 border-b border-[#DDC1B4] py-8 transition-colors duration-300 sm:grid-cols-[60px_1fr_auto] sm:gap-7 sm:py-9 lg:grid-cols-[80px_1fr_280px_auto] lg:gap-10 lg:py-10"
              >
                {/* =================================================
                    NUMBER
                ================================================= */}

                <div className="pt-1">
                  <span className="font-serif text-[22px] text-[#D46726] sm:text-[25px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* =================================================
                    MAIN
                ================================================= */}

                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center border border-[#DDC1B4] bg-[#F5F0E8] text-[#4E76A3] transition-all duration-300 group-hover:border-[#D46726] group-hover:bg-[#D46726] group-hover:text-white">
                      <Icon size={17} strokeWidth={1.6} />
                    </div>

                    <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8A7267] sm:text-[10px]">
                      Na Lisah Initiative
                    </span>
                  </div>

                  <h3 className="font-serif text-[25px] leading-[1.2] text-[#1C1A17] transition-colors duration-300 group-hover:text-[#D46726] sm:text-[29px] lg:text-[31px]">
                    {initiative.title}
                  </h3>
                </div>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p className="col-start-2 mt-1 max-w-[600px] font-sans text-[13px] leading-6 text-[#574239] sm:col-start-2 sm:mt-0 sm:text-[14px] sm:leading-7 lg:col-start-3 lg:row-start-1 lg:mt-10 lg:max-w-[280px]">
                  {initiative.description}
                </p>

                {/* =================================================
                    ARROW
                ================================================= */}

                <div className="col-start-2 mt-3 flex items-center sm:col-start-3 sm:row-start-1 sm:mt-10 lg:col-start-4">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#DDC1B4] text-[#1C1A17] transition-all duration-300 group-hover:border-[#D46726] group-hover:bg-[#D46726] group-hover:text-white">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.6}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>

                {/* =================================================
                    HOVER LINE
                ================================================= */}

                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D46726] transition-all duration-500 group-hover:w-full" />
              </Link>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <div className="mt-12 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end lg:mt-16">
          <div>
            <p className="max-w-[700px] font-serif text-[24px] leading-[1.4] text-[#1C1A17] sm:text-[29px]">
              Keeping tradition alive by making it part of
              <span className="text-[#4E76A3]"> everyday community life.</span>
            </p>
          </div>

          <Link
            href="/initiatives"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#1C1A17] pb-2 font-sans text-[12px] font-semibold uppercase tracking-[0.08em] text-[#1C1A17] transition-colors duration-300 hover:border-[#D46726] hover:text-[#D46726]"
          >
            View All Initiatives

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}