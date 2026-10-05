"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <div className="site-container">

        {/* =====================================================
            MAIN GRID
        ===================================================== */}

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-20">

          {/* =================================================
              LEFT — ABOUT CONTENT
          ================================================= */}

          <div className="animate-fade-up">

            {/* Eyebrow */}

            <div className="mb-4 flex items-center gap-2">
              <span className="h-[2px] w-7 bg-[#F28C28]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#A85413]">
                About Nah Lisah
              </span>
            </div>

            {/* Heading */}

            <h2 className="max-w-[700px] text-[38px] font-bold leading-[1.08] tracking-[-0.025em] text-[#14213D] sm:text-[46px] lg:text-[52px] xl:text-[58px]">
              Keeping Our Culture Alive
              <span className="block">
                Through Tradition,
              </span>

              <span className="block text-[#0B4F8A]">
                Community & Continuity.
              </span>
            </h2>

            {/* Description */}

            <div className="mt-6 max-w-[700px] space-y-4 text-[15px] leading-7 text-[#4B5563] sm:text-[16px]">

              <p>
                <strong className="font-semibold text-[#14213D]">
                  Nah Lisah
                </strong>{" "}
                represents a living bridge between ancestral traditions and
                modern generations. Rooted in the heart of the Kathmandu
                Valley, Nah Lisah was founded on the belief that intangible
                cultural heritage—its rhythms, rituals, dance forms, and
                communal spirit—thrives best when actively practiced, shared,
                and passed down.
              </p>

              <p>
                The organization brings together youth, traditional artists,
                and culture enthusiasts to keep indigenous Newa customs
                vibrant in contemporary public life.
              </p>

            </div>

            {/* =================================================
                STATS
            ================================================= */}

            <div className="mt-7 grid max-w-[650px] grid-cols-3">

              {/* 100% */}

              <div className="border-l-2 border-[#0B4F8A] pl-3 sm:pl-4">

                <div className="text-[25px] font-bold leading-none text-[#0B4F8A] sm:text-[30px]">
                  100%
                </div>

                <p className="mt-1.5 text-[9px] font-semibold uppercase leading-4 tracking-[0.07em] text-[#64748B] sm:text-[11px]">
                  Youth-Led
                  <span className="block">
                    Initiative
                  </span>
                </p>

              </div>

              {/* Established */}

              <div className="border-l border-[#D8E0E8] pl-3 sm:pl-5">

                <div className="text-[18px] font-bold leading-none text-[#A85413] sm:text-[25px]">
                  EST. 2026
                </div>

                <p className="mt-1.5 text-[9px] font-semibold uppercase leading-4 tracking-[0.07em] text-[#64748B] sm:text-[11px]">
                  Rooted in
                  <span className="block">
                    Newa Heritage
                  </span>
                </p>

              </div>

              {/* Kathmandu */}

              <div className="border-l border-[#D8E0E8] pl-3 sm:pl-5">

                <div className="text-[18px] font-bold leading-none text-[#0B4F8A] sm:text-[25px]">
                  Kathmandu
                </div>

                <p className="mt-1.5 text-[9px] font-semibold uppercase leading-4 tracking-[0.07em] text-[#64748B] sm:text-[11px]">
                  Valley
                  <span className="block">
                    Community
                  </span>
                </p>

              </div>

            </div>

            {/* =================================================
                BUTTON
            ================================================= */}

            <div className="mt-7">

              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-md bg-[#0B4F8A] px-5 py-3 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#F28C28] sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Discover Nah Lisah

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

            </div>

          </div>

          {/* =================================================
              RIGHT — IMAGE
          ================================================= */}

          <div className="relative mx-auto w-full max-w-[650px] lg:max-w-none">

            {/* Orange corner */}

            <div className="absolute -right-2 -top-2 h-20 w-20 rounded-tr-2xl border-r-2 border-t-2 border-[#F28C28] sm:-right-3 sm:-top-3" />

            {/* Blue corner */}

            <div className="absolute -bottom-2 -left-2 h-20 w-20 rounded-bl-2xl border-b-2 border-l-2 border-[#0B4F8A] sm:-bottom-3 sm:-left-3" />

            {/* Image frame */}

            <div className="relative z-10 overflow-hidden rounded-xl border border-[#0B4F8A]/10 bg-[#F4F7FA] p-2 shadow-sm sm:rounded-2xl sm:p-3">

              <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-lg bg-[#F4F7FA] sm:min-h-[350px] sm:rounded-xl lg:min-h-[430px]">

                <Image
                  src="/digital.png"
                  alt="Newa cultural heritage in Kathmandu Valley"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}