import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { initiatives } from "@/data/initiatives";

export default function WhatWeDo() {
  return (
    <section className="w-full bg-[#F7F9FC] py-12 sm:py-16 lg:py-20">
      <div className="site-container">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0B4F8A] sm:text-[11px]">
              हाम्रो कार्यक्षेत्र 
            </p>

            <h2 className="font-serif text-[34px] font-medium leading-[1.1] tracking-[-0.02em] text-[#17243B] sm:text-[40px] lg:text-[44px]">
              What We Do
            </h2>
          </div>

          <p className="max-w-[520px] text-[13px] leading-6 text-[#596574] sm:text-[14px] sm:leading-7 lg:pb-1">
            A multifaceted movement committed to preserving authentic
            soundscapes, material heritage, and living community solidarity.
          </p>

        </div>

        {/* =====================================================
            CARDS
        ===================================================== */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">

          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;

            return (
              <Link
                key={initiative.slug}
                href={`/initiatives/${initiative.slug}`}
                className="group relative flex min-h-[255px] flex-col rounded-lg border border-[#DDE4EB] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0B4F8A]/20 hover:shadow-[0_12px_30px_rgba(11,79,138,0.08)] sm:min-h-[270px] sm:p-6 lg:min-h-[285px] lg:p-7"
              >

                {/* =================================================
                    NUMBER
                ================================================= */}
                <div className="absolute right-5 top-5 font-serif text-[34px] font-medium leading-none text-[#0B4F8A]/10 transition-colors duration-300 group-hover:text-[#F28C28]/20 sm:right-6 sm:top-6 sm:text-[40px]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* =================================================
                    ICON
                ================================================= */}
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-[#E8F1F8] text-[#0B4F8A] transition-all duration-300 group-hover:bg-[#0B4F8A] group-hover:text-white">
                  <Icon
                    size={21}
                    strokeWidth={1.7}
                  />
                </div>

                {/* =================================================
                    TITLE
                ================================================= */}
                <h3 className="max-w-[270px] font-serif text-[20px] font-semibold leading-[1.2] text-[#17243B] transition-colors duration-300 group-hover:text-[#0B4F8A] sm:text-[21px] lg:text-[22px]">
                  {initiative.title}
                </h3>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}
                <p className="mt-2.5 max-w-[390px] text-[13px] leading-[1.65] text-[#5A6471] sm:text-[14px] lg:text-[15px]">
                  {initiative.description}
                </p>

                {/* =================================================
                    LINK
                ================================================= */}
                <div className="mt-auto pt-6">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.07em] text-[#0B4F8A] transition-colors duration-300 group-hover:text-[#F28C28] sm:text-[12px]">
                    {initiative.linkText}

                    <ArrowRight
                      size={15}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>

              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}