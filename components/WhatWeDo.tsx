import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { initiatives } from "@/data/initiatives";

export default function WhatWeDo() {
  return (
    <section className="bg-[#F8F7FC] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-12">

        {/* ================= HEADER ================= */}
        <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#0B4F8A]">
              हाम्रो कार्यक्षेत्र • CORE INITIATIVES
            </p>

            <h2 className="font-serif text-4xl font-medium tracking-tight text-[#17243B] sm:text-5xl lg:text-[52px]">
              What We Do
            </h2>
          </div>

          <p className="max-w-[600px] text-base leading-7 text-[#53606F] sm:text-lg sm:leading-8 lg:ml-auto">
            A multifaceted movement committed to preserving authentic
            soundscapes, material heritage, and living community solidarity.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((initiative) => {
            const Icon = initiative.icon;

            return (
              <Link
                key={initiative.slug}
                href={`/initiatives/${initiative.slug}`}
                className="group flex min-h-[330px] flex-col rounded-xl border border-[#E9E7EE] bg-white p-8 shadow-[0_2px_10px_rgba(23,36,59,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B4F8A]/20 hover:shadow-[0_15px_40px_rgba(11,79,138,0.10)] sm:p-9"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-[#DCECF6] text-[#0B4F8A] transition-all duration-300 group-hover:bg-[#0B4F8A] group-hover:text-white">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-[25px] font-semibold leading-tight text-[#17243B] transition-colors duration-300 group-hover:text-[#0B4F8A]">
                  {initiative.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-[16px] leading-7 text-[#5A6471]">
                  {initiative.description}
                </p>

                {/* Bottom link */}
                <div className="mt-auto pt-7">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.05em] text-[#0B4F8A]">
                    {initiative.linkText}

                    <ArrowRight
                      size={17}
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