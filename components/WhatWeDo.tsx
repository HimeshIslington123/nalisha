import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { initiatives } from "@/data/initiatives";

export default function WhatWeDo() {
  return (
    <section className="bg-[#F8F7FC] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-7 lg:px-10">

        {/* HEADER */}
        <div className="mb-7 flex flex-col gap-3 sm:mb-9 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0B4F8A] sm:text-xs">
              हाम्रो कार्यक्षेत्र • CORE INITIATIVES
            </p>

            <h2 className="font-serif text-[30px] font-medium leading-tight text-[#17243B] sm:text-[38px] lg:text-[42px]">
              What We Do
            </h2>
          </div>

          <p className="max-w-[520px] text-[13px] leading-5 text-[#596574] sm:text-[15px] sm:leading-7 lg:pb-1">
            A multifaceted movement committed to preserving authentic
            soundscapes, material heritage, and living community solidarity.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {initiatives.map((initiative) => {
            const Icon = initiative.icon;

            return (
              <Link
                key={initiative.slug}
                href={`/initiatives/${initiative.slug}`}
                className="group flex min-h-[245px] flex-col rounded-md border border-[#E7E5EC] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#0B4F8A]/20 hover:shadow-[0_10px_30px_rgba(11,79,138,0.08)] sm:min-h-[275px] sm:rounded-lg sm:p-6 lg:min-h-[285px] lg:p-7"
              >
                {/* ICON */}
                <div className="mb-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-[4px] bg-[#DCECF6] text-[#0B4F8A] transition-all duration-300 group-hover:bg-[#0B4F8A] group-hover:text-white sm:mb-5 sm:h-11 sm:w-11">
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    className="sm:h-[21px] sm:w-[21px]"
                  />
                </div>

                {/* TITLE */}
                <h3 className="font-serif text-[16px] font-semibold leading-[1.2] text-[#17243B] transition-colors duration-300 group-hover:text-[#0B4F8A] sm:text-[21px] sm:leading-[1.2] lg:text-[22px]">
                  {initiative.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 text-[11px] leading-[1.55] text-[#5A6471] sm:mt-2.5 sm:text-[14px] sm:leading-6 lg:text-[15px] lg:leading-[1.65]">
                  {initiative.description}
                </p>

                {/* LINK */}
                <div className="mt-auto pt-4 sm:pt-5">
                  <span className="inline-flex items-center gap-1 text-[9px] font-semibold tracking-[0.04em] text-[#0B4F8A] sm:gap-1.5 sm:text-[12px] sm:tracking-[0.06em] lg:text-[13px]">
                    {initiative.linkText}

                    <ArrowRight
                      size={12}
                      className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:h-[15px] sm:w-[15px]"
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