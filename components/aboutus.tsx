
"use client";

import Link from "next/link";
import {
  ArrowRight,
  Music2,
  Landmark,
  Users,
  Heart,
  Quote,
} from "lucide-react";

const values = [
  {
    icon: Music2,
    number: "01",
    title: "Preserving Sound",
    description:
      "Traditional Newa instruments and musical traditions are an essential part of our cultural identity. We work to keep their sounds heard by generations to come.",
  },
  {
    icon: Landmark,
    number: "02",
    title: "Honouring Tradition",
    description:
      "From jatras and rituals to everyday cultural practices, we believe traditions remain alive when they are understood, practiced, and shared.",
  },
  {
    icon: Users,
    number: "03",
    title: "Empowering Youth",
    description:
      "Young people are not only the future of heritage. They are part of its present. We create space for youth to learn, participate, and lead.",
  },
  {
    icon: Heart,
    number: "04",
    title: "Building Community",
    description:
      "Culture becomes stronger when people come together. Na Lisah brings artists, musicians, youth, and culture enthusiasts together around a shared heritage.",
  },
];

const milestones = [
  {
    year: "2026",
    title: "Na Lisah Begins",
    text: "A youth-led cultural initiative rooted in Newa heritage and the Kathmandu Valley.",
  },
  {
    year: "01",
    title: "Our Community",
    text: "Connecting young people, artists, musicians, and cultural enthusiasts through shared traditions.",
  },
  {
    year: "∞",
    title: "The Journey Ahead",
    text: "Learning from the past while creating new ways for heritage to live in the future.",
  },
];

export default function AboutUs() {
  return (
    <main className="bg-[#FAF8F5] text-[#1C1A17]">
      {/* =====================================================
          HERO / ABOUT US
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-[#DDC1B4]">
        {/* Orange glow */}
        <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#D46726]/[0.06] blur-3xl" />

        {/* Blue glow */}
        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#4E76A3]/[0.06] blur-3xl" />

        <div className="relative mx-auto max-w-[1360px] px-5 pb-12 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div>
              {/* Section label */}
              <div className="mb-7 flex items-center gap-4 sm:mb-8">
                <span className="h-px w-10 bg-[#D46726] sm:w-12" />

                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D46726] sm:text-[11px] sm:tracking-[0.22em]">
                  About Na Lisah
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-[850px] font-serif text-[40px] leading-[1.06] tracking-[-0.02em] sm:text-[56px] lg:text-[70px]">
                Keeping our heritage
                <span className="block text-[#D46726]">
                  alive,
                  <span className="text-[#4E76A3]"> together.</span>
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-[680px] font-sans text-[15px] leading-7 text-[#574239] sm:mt-7 sm:text-[18px] sm:leading-8">
                Na Lisah Sanskritik Pucha is a youth-led cultural initiative
                rooted in the Kathmandu Valley, working to preserve and
                celebrate Newa music, traditional instruments, jatras, rituals,
                dance, and ancestral traditions.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-9 sm:gap-5">
                {/* Primary button */}
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-[#D46726] px-5 py-3.5 font-sans text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#B9531E] sm:px-6 sm:text-[13px]"
                >
                  Connect With Us

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                {/* Secondary link */}
                <Link
                  href="/gallery"
                  className="group inline-flex items-center gap-3 border-b border-[#1C1A17] px-1 py-3 font-sans text-[12px] font-semibold text-[#1C1A17] transition-colors duration-300 hover:border-[#4E76A3] hover:text-[#4E76A3] sm:text-[13px]"
                >
                  Explore Our Heritage

                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            {/* =================================================
                LOGO AREA
            ================================================= */}

            <div className="mx-auto w-full max-w-[420px]">
              {/* =================================================
                  DESKTOP / TABLET LOGO
              ================================================= */}

              <div className="relative hidden border border-[#DDC1B4] bg-[#F5F0E8] px-8 py-10 sm:block sm:px-12 sm:py-14">
                {/* Orange accent */}
                <div className="absolute left-0 top-0 h-1 w-24 bg-[#D46726]" />

                {/* Blue accent */}
                <div className="absolute bottom-0 right-0 h-1 w-24 bg-[#4E76A3]" />

                <img
                  src="/logo.webp"
                  alt="Na Lisah Sanskritik Pucha"
                  className="mx-auto w-full max-w-[300px] object-contain"
                />

                <div className="mt-8 border-t border-[#DDC1B4] pt-5 text-center">
                  <p className="font-serif text-[20px] text-[#1C1A17]">
                    संस्कृति हाम्रो पहिचान
                  </p>

                  <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.2em] text-[#8A7267]">
                    Our heritage. Our identity.
                  </p>
                </div>
              </div>

              {/* =================================================
                  MOBILE LOGO
              ================================================= */}

              <div className="mt-9 flex items-center justify-center gap-4 border-t border-[#DDC1B4] pt-6 sm:hidden">
                <div className="relative shrink-0">
                  {/* Orange accent */}
                  <div className="absolute -left-1 -top-1 h-2 w-5 bg-[#D46726]" />

                  {/* Blue accent */}
                  <div className="absolute -bottom-1 -right-1 h-2 w-5 bg-[#4E76A3]" />

                  <img
                    src="/logo.webp"
                    alt="Na Lisah Sanskritik Pucha"
                    className="h-[68px] w-[68px] object-contain"
                  />
                </div>

                <div>
                  <p className="font-serif text-[20px] leading-none text-[#1C1A17]">
                    Na Lisah
                  </p>

                  <p className="mt-2 font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8A7267]">
                    Sanskritik Pucha
                  </p>

                  <p className="mt-2 font-serif text-[13px] text-[#D46726]">
                    संस्कृति हाम्रो पहिचान
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR MISSION
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#F5F0E8] py-16 sm:py-24 lg:py-28">
        {/* subtle orange glow */}
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#D46726]/[0.045] blur-3xl" />

        {/* subtle blue glow */}
        <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#4E76A3]/[0.045] blur-3xl" />

        <div className="relative mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
            {/* =================================================
                LEFT — MISSION
            ================================================= */}

            <div>
              {/* Mission label */}
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#D46726] sm:w-12" />

                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D46726] sm:text-[11px] sm:tracking-[0.22em]">
                  Our Mission
                </span>
              </div>

              {/* Mission heading */}
              <h2 className="mt-5 max-w-[700px] font-serif text-[36px] leading-[1.1] tracking-[-0.015em] sm:text-[52px]">
                To keep Newa heritage
                <span className="block">
                  <span className="text-[#D46726]">moving</span>{" "}
                  <span className="text-[#4E76A3]">forward.</span>
                </span>
              </h2>

              {/* Mission paragraph */}
              <p className="mt-6 max-w-[650px] font-sans text-[15px] leading-7 text-[#574239] sm:mt-7 sm:text-[16px] sm:leading-8">
                We aim to create opportunities for people to learn, perform,
                document, and participate in the cultural traditions that
                shape our identity.
              </p>

              {/* Mission paragraph */}
              <p className="mt-4 max-w-[650px] font-sans text-[15px] leading-7 text-[#574239] sm:mt-5 sm:text-[16px] sm:leading-8">
                By connecting generations and creating meaningful cultural
                experiences, we hope to ensure that the traditions of our
                ancestors remain a living part of our future.
              </p>
            </div>

            {/* =================================================
                RIGHT — QUOTE
            ================================================= */}

            <div className="border-l-2 border-[#D46726] pl-6 sm:pl-10">
              {/* Quote icon */}
              <Quote
                size={30}
                strokeWidth={1.2}
                className="mb-5 text-[#D46726]"
              />

              {/* Quote */}
              <p className="font-serif text-[24px] leading-[1.45] text-[#1C1A17] sm:text-[32px]">
                “पुर्खाले दिएको सम्पदा, हाम्रो पहिचान; यसलाई जोगाउनु हाम्रो पुस्ताको दायित्व।”
              </p>

              {/* =================================================
                  NA LISAH SIGNATURE
              ================================================= */}

              <div className="mt-7 flex items-center gap-3">
                {/* Circular group photo */}
                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#DDC1B4] bg-[#FAF8F5]">
                  <img
                    src="/digital.png"
                    alt="Na Lisah community"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Name */}
                <div>
                  <p className="font-serif text-[16px] leading-none text-[#1C1A17]">
                    Na Lisah
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="h-px w-5 bg-[#4E76A3]" />

                    <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8A7267]">
                      Sanskritik Pucha
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          JOURNEY
      ===================================================== */}

      {/*
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12">
          <div className="mb-14">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#D46726]" />

              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D46726]">
                Our Journey
              </span>
            </div>

            <h2 className="mt-5 font-serif text-[36px] leading-[1.1] sm:text-[48px]">
              Beginning with a purpose.
            </h2>
          </div>

          <div className="grid border-t border-[#DDC1B4] lg:grid-cols-3">
            {milestones.map((item, index) => (
              <div
                key={item.title}
                className={`border-b border-[#DDC1B4] py-9 lg:border-b-0 lg:px-8 lg:py-10 ${
                  index !== 0 ? "lg:border-l" : "lg:pl-0"
                }`}
              >
                <div className="font-serif text-[38px] text-[#D46726]">
                  {item.year}
                </div>

                <h3 className="mt-5 font-serif text-[23px]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[330px] font-sans text-[14px] leading-7 text-[#574239]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      {/*
      <section className="bg-[#1C1A17] py-20 text-[#FAF8F5] sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[900px] px-5 text-center sm:px-8">
          <div className="mx-auto mb-7 h-1 w-12 bg-[#D46726]" />

          <h2 className="font-serif text-[36px] leading-[1.12] sm:text-[50px]">
            Be part of the
            <span className="text-[#D46726]"> living heritage.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[600px] font-sans text-[15px] leading-7 text-white/60">
            Whether you are a musician, artist, student, culture enthusiast,
            or simply someone who cares about our heritage, there is a place
            for you at Na Lisah.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-[#D46726] px-6 py-3.5 font-sans text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-[#B9531E]"
            >
              Join Our Community

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/events"
              className="inline-flex items-center gap-3 border border-white/20 px-6 py-3.5 font-sans text-[13px] font-semibold text-white transition-colors duration-300 hover:border-[#4E76A3] hover:text-[#4E76A3]"
            >
              See Our Events
            </Link>
          </div>
        </div>
      </section>
      */}
    </main>
  );
}
