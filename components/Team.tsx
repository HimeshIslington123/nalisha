"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const team = [
  {
    name: "Ritesh Shrestha",
    role: "Founder",
    image: "/ritesh.png",
  },
  {
    name: "Ujjwal Shrestha",
    role: "President",
    image: "/ujjwal.png",
  },
  {
    name: "Lasata Maharjan",
    role: "Treasurer",
    image: "/team/member-3.jpg",
  },
  {
    name: "Palistha Maharjan",
    role: "General Member",
    image: "/team/member-4.jpg",
  },
];

export default function MeetOurTeam() {
  return (
    <section className="w-full bg-[#F5F0E8] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="mb-12 flex flex-col gap-7 border-b border-[#DDC1B4] pb-10 sm:mb-14 sm:pb-12 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[#D46726]" />

              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A7267] sm:text-[11px]">
                The People Behind Nah Lisah
              </span>
            </div>

            <h2 className="font-serif text-[38px] leading-[1.08] tracking-[-0.02em] text-[#1C1A17] sm:text-[48px] lg:text-[56px]">
              Meet Our Team
              <span className="text-[#D46726]">.</span>
            </h2>
          </div>

          <p className="max-w-[500px] font-sans text-[14px] leading-7 text-[#574239] sm:text-[15px] sm:leading-8">
            A young and passionate group working together to preserve Newa
            culture, support our community, and carry our heritage forward.
          </p>
        </div>

        {/* =====================================================
            TEAM GRID
        ===================================================== */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-10">
          {team.map((member, index) => (
            <div key={`${member.name}-${index}`} className="group">
              {/* Photo */}
              <div className="relative">
                {/* Orange frame accent */}
                <div className="absolute -right-2 -top-2 h-16 w-16 border-r-2 border-t-2 border-[#D46726] transition-all duration-500 group-hover:h-20 group-hover:w-20" />

                {/* Blue frame accent */}
                <div className="absolute -bottom-2 -left-2 h-16 w-16 border-b-2 border-l-2 border-[#4E76A3] transition-all duration-500 group-hover:h-20 group-hover:w-20" />

                <div className="relative aspect-[4/5] overflow-hidden bg-[#E9DED5]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Bottom subtle overlay */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1C1A17]/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Number */}
                  <span className="absolute left-4 top-4 font-serif text-[18px] text-white opacity-0 drop-shadow-md transition-opacity duration-300 group-hover:opacity-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Member information */}
              <div className="pt-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-7 bg-[#D46726]" />

                  <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8A7267]">
                    Nah Lisah
                  </span>
                </div>

                <h3 className="font-serif text-[23px] leading-tight text-[#1C1A17] transition-colors duration-300 group-hover:text-[#D46726] sm:text-[24px]">
                  {member.name}
                </h3>

                <p className="mt-2 font-sans text-[12px] leading-5 text-[#574239]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}
        <div className="mt-14 flex flex-col gap-6 border-t border-[#DDC1B4] pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between lg:mt-20 lg:pt-10">
          <div>
            <p className="font-serif text-[22px] leading-tight text-[#1C1A17] sm:text-[26px]">
              Meet the people keeping our heritage moving.
            </p>

            <p className="mt-2 font-sans text-[12px] text-[#8A7267]">
              Discover the people, stories, and passion behind Nah Lisah.
            </p>
          </div>

          <Link
            href="/team"
            className="group inline-flex w-fit shrink-0 items-center gap-3 border border-[#1C1A17] px-6 py-3.5 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1C1A17] transition-all duration-300 hover:border-[#D46726] hover:bg-[#D46726] hover:text-white"
          >
            View All Team

            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}