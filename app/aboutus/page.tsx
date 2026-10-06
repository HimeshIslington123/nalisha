"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Landmark,
  Music2,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ============================================================
   ANIMATIONS
============================================================ */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* ============================================================
   VALUES
============================================================ */

const values = [
  {
    number: "01",
    icon: Landmark,
    title: "Heritage",
    nepali: "सम्पदा",
    description:
      "We learn from the traditions, stories, art, language, music, rituals and places that have shaped Newa life.",
  },
  {
    number: "02",
    icon: Users,
    title: "Community",
    nepali: "समुदाय",
    description:
      "Culture becomes meaningful when people come together, share experiences and create spaces for one another.",
  },
  {
    number: "03",
    icon: Music2,
    title: "Participation",
    nepali: "सहभागिता",
    description:
      "We believe culture should be experienced and practiced, not simply watched from a distance.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Continuity",
    nepali: "निरन्तरता",
    description:
      "We want heritage to remain alive by giving the next generation a meaningful place within it.",
  },
];

/* ============================================================
   JOURNEY
============================================================ */

const journey = [
  {
    year: "2022",
    nepali: "सुरुवात",
    title: "The Beginning",
    description:
      "Na Lisah began with a simple idea — creating a space where young people could connect with their heritage.",
  },
  {
    year: "2023",
    nepali: "सँगै बढ्दै",
    title: "Growing Together",
    description:
      "Our community grew through conversations, cultural activities, learning spaces and shared experiences.",
  },
  {
    year: "2024",
    nepali: "आफ्नो आवाज",
    title: "Finding Our Voice",
    description:
      "We explored culture through music, traditions, creativity, community activities and collaboration.",
  },
  {
    year: "2025",
    nepali: "जरा बलियो बनाउँदै",
    title: "Building Stronger Roots",
    description:
      "We focused on creating stronger cultural spaces and making participation more accessible.",
  },
  {
    year: "2026",
    nepali: "अगाडि बढ्दै",
    title: "Moving Forward",
    description:
      "Today, we continue working toward a future where Newa heritage remains meaningful, active and alive.",
  },
];

/* ============================================================
   TEAM
============================================================ */

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
    name: "Team Member",
    role: "Community Lead",
    image: "/team-3.jpg",
  },
  {
    name: "Team Member",
    role: "Creative & Media",
    image: "/team-4.jpg",
  },
];

/* ============================================================
   PAGE
============================================================ */

export default function AboutUsPage() {
  return (
    <>
      <Navbar />

      <main className="w-full overflow-hidden bg-[#FAF8F5] text-[#1C1A17]">

        {/* ======================================================
            HERO
        ====================================================== */}


      
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

              {/* =================================================
                  BUTTONS — ALWAYS SAME LINE
              ================================================= */}

              <div className="mt-8 flex flex-nowrap items-center gap-3 sm:mt-9 sm:gap-5">
                {/* Primary button */}
                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    shrink-0
                    items-center
                    gap-2
                    bg-[#D46726]
                    px-4
                    py-3
                    font-sans
                    text-[10px]
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#B9531E]
                    sm:gap-3
                    sm:px-6
                    sm:py-3.5
                    sm:text-[13px]
                  "
                >
                  Connect With Us

                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4"
                  />
                </Link>

                {/* Secondary link */}
                <Link
                  href="/gallery"
                  className="
                    group
                    inline-flex
                    shrink-0
                    items-center
                    gap-2
                    border-b
                    border-[#1C1A17]
                    px-0.5
                    py-3
                    font-sans
                    text-[10px]
                    font-semibold
                    text-[#1C1A17]
                    transition-colors
                    duration-300
                    hover:border-[#4E76A3]
                    hover:text-[#4E76A3]
                    sm:gap-3
                    sm:px-1
                    sm:text-[13px]
                  "
                >
                  Explore Our Heritage

                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1 sm:h-[15px] sm:w-[15px]"
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


        {/* ======================================================
            WHO WE ARE
        ====================================================== */}

        <section className="bg-[#F2ECE4] py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-12">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20"
            >
              {/* LABEL */}

              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-[#C75B28]" />

                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C75B28]">
                    Who We Are
                  </span>
                </div>

                <p className="mt-7 font-serif text-[23px] leading-[1.45] text-[#8A766B]">
                  हामी को हौँ?
                </p>
              </div>

              {/* CONTENT */}

              <div>
                <h2 className="font-serif text-[37px] leading-[1.08] tracking-[-0.025em] sm:text-[54px]">
                  We are young people
                  <span className="text-[#C75B28]"> connected </span>
                  by culture.
                </h2>

                <div className="mt-8 grid gap-7 sm:grid-cols-2">

                  <p className="font-sans text-[14px] leading-7 text-[#5D5049] sm:text-[15px] sm:leading-8">
                    Na Lisah exists because culture is more than something we
                    inherit. It is something we experience, question, share
                    and continue to shape.
                  </p>

                  <p className="font-sans text-[14px] leading-7 text-[#5D5049] sm:text-[15px] sm:leading-8">
                    From festivals and music to stories, language, rituals,
                    food and everyday community life, we want to create spaces
                    where heritage feels close and relevant.
                  </p>

                </div>

                {/* QUOTE */}

                <div className="mt-10 border-l-2 border-[#C75B28] pl-6">
                  <p className="font-serif text-[21px] leading-[1.5] text-[#302B27] sm:text-[26px]">
                    “हामी विगतलाई मात्र सम्झिँदैनौँ,
                    <span className="text-[#557BA5]">
                      {" "}भविष्यसँग जोड्छौँ।
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ======================================================
            OUR VALUES
        ====================================================== */}

        <section className="bg-[#FAF8F5] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-12">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="mb-12 flex items-center gap-4">
                <span className="h-px w-10 bg-[#C75B28]" />

                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C75B28]">
                  What We Believe
                </span>
              </div>

              <h2 className="max-w-[750px] font-serif text-[40px] leading-[1.05] tracking-[-0.02em] sm:text-[56px]">
                Culture becomes stronger
                <span className="text-[#557BA5]"> when we carry it together.</span>
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="mt-14 grid border-t border-[#DDD4CB] sm:grid-cols-2 lg:grid-cols-4"
            >
              {values.map((item, index) => {
                const Icon = item.icon;
                const isOrange = index % 2 === 0;

                return (
                  <motion.div
                    key={item.number}
                    variants={fadeUp}
                    className="border-b border-[#DDD4CB] py-8 sm:px-7 lg:border-b-0 lg:border-r lg:px-8 lg:py-10 last:lg:border-r-0"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-serif text-[28px] ${
                          isOrange
                            ? "text-[#C75B28]"
                            : "text-[#557BA5]"
                        }`}
                      >
                        {item.number}
                      </span>

                      <Icon
                        size={20}
                        strokeWidth={1.3}
                        className={
                          isOrange
                            ? "text-[#C75B28]"
                            : "text-[#557BA5]"
                        }
                      />
                    </div>

                    <p className="mt-8 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-[#98877C]">
                      {item.nepali}
                    </p>

                    <h3 className="mt-2 font-serif text-[25px]">
                      {item.title}
                    </h3>

                    <p className="mt-3 font-sans text-[13px] leading-6 text-[#5D5049]">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </section>

        {/* ======================================================
            VIDEO
        ====================================================== */}

        <section className="bg-[#1D1B19] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-12">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="mb-10">

                <div className="mb-4 flex items-center gap-4">
                  <span className="h-px w-10 bg-[#C75B28]" />

                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C75B28]">
                    Experience Culture
                  </span>
                </div>

                <h2 className="max-w-[700px] font-serif text-[38px] leading-[1.05] text-white sm:text-[54px]">
                  Culture is not only
                  <span className="text-[#C75B28]"> remembered.</span>
                </h2>

              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={scaleIn}
                className="relative mx-auto max-w-[1000px] overflow-hidden bg-[#292622]"
              >
                <div className="aspect-video">
                  <video
                    className="h-full w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    poster="/about.jpg"
                  >
                    <source
                      src="/video1.mp4"
                      type="video/mp4"
                    />

                    Your browser does not support the video tag.
                  </video>
                </div>

                <span className="pointer-events-none absolute left-0 top-0 h-16 w-16 border-l-2 border-t-2 border-[#C75B28] sm:h-20 sm:w-20" />

                <span className="pointer-events-none absolute bottom-0 right-0 h-16 w-16 border-b-2 border-r-2 border-[#557BA5] sm:h-20 sm:w-20" />
              </motion.div>

              <div className="mt-5">
                <p className="font-serif text-[18px] text-white/70 sm:text-[22px]">
                  संस्कृति बाँचिरहन्छ।
                </p>
              </div>

            </motion.div>

          </div>
        </section>

        {/* ======================================================
            OUR JOURNEY
        ====================================================== */}

        <section className="bg-[#FAF8F5] py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-12">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20"
            >

              {/* LEFT */}

              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-[#C75B28]" />

                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C75B28]">
                    Our Journey
                  </span>
                </div>

                <h2 className="mt-6 font-serif text-[40px] leading-[1.02] tracking-[-0.02em] sm:text-[56px]">
                  Growing with
                  <span className="block text-[#557BA5]">
                    every generation.
                  </span>
                </h2>

                <p className="mt-7 max-w-[390px] font-serif text-[21px] leading-[1.45] text-[#8A766B]">
                  समय बदलिन्छ,
                  <span className="block text-[#C75B28]">
                    संस्कृति अगाडि बढ्छ।
                  </span>
                </p>
              </div>

              {/* TIMELINE */}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={stagger}
                className="relative"
              >
                <div className="absolute bottom-2 left-[18px] top-2 w-px bg-[#DDD4CB] sm:left-[22px]" />

                <div className="space-y-8">

                  {journey.map((item, index) => {
                    const isOrange = index % 2 === 0;

                    return (
                      <motion.div
                        key={item.year}
                        variants={fadeUp}
                        className="relative grid grid-cols-[38px_1fr] gap-5 sm:grid-cols-[46px_1fr] sm:gap-7"
                      >

                        <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF8F5] sm:h-11 sm:w-11">
                          <span
                            className={`h-2.5 w-2.5 rounded-full ${
                              isOrange
                                ? "bg-[#C75B28]"
                                : "bg-[#557BA5]"
                            }`}
                          />
                        </div>

                        <div className="border-b border-[#DDD4CB] pb-8">

                          <div className="flex flex-wrap items-center gap-3">

                            <span
                              className={`font-serif text-[27px] ${
                                isOrange
                                  ? "text-[#C75B28]"
                                  : "text-[#557BA5]"
                              }`}
                            >
                              {item.year}
                            </span>

                            <span className="h-px w-6 bg-[#DDD4CB]" />

                            <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-[#98877C]">
                              {item.nepali}
                            </span>

                          </div>

                          <h3 className="mt-2 font-serif text-[25px] sm:text-[29px]">
                            {item.title}
                          </h3>

                          <p className="mt-3 max-w-[620px] font-sans text-[13px] leading-6 text-[#5D5049] sm:text-[14px] sm:leading-7">
                            {item.description}
                          </p>

                        </div>

                      </motion.div>
                    );
                  })}

                </div>
              </motion.div>

            </motion.div>

          </div>
        </section>

        {/* ======================================================
            TEAM
        ====================================================== */}

        <section className="bg-[#F2ECE4] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-12">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="grid gap-8 border-b border-[#DDD4CB] pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
            >

              <div>

                <div className="mb-5 flex items-center gap-4">
                  <span className="h-px w-10 bg-[#C75B28]" />

                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C75B28]">
                    Our People
                  </span>
                </div>

                <h2 className="font-serif text-[39px] leading-[1.05] tracking-[-0.02em] sm:text-[54px]">
                  The people
                  <span className="text-[#557BA5]"> behind </span>
                  Na Lisah.
                </h2>

              </div>

              <div className="flex items-end">
                <p className="max-w-[510px] font-sans text-[14px] leading-7 text-[#5D5049]">
                  Na Lisah is built by people who care about culture,
                  community, creativity and the generations who will carry
                  these stories next.
                </p>
              </div>

            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 sm:gap-7"
            >
              {team.map((member, index) => {
                const isOrange = index % 2 === 0;

                return (
                  <motion.div
                    key={`${member.name}-${index}`}
                    variants={fadeUp}
                    className="group"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#DED3C9]">

                      <Image
                        src={member.image}
                        alt={`${member.name} — ${member.role}`}
                        fill
                        sizes="(max-width: 640px) 45vw, 260px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <span
                        className={`absolute left-0 top-0 h-[3px] w-10 transition-all duration-500 group-hover:w-16 ${
                          isOrange
                            ? "bg-[#C75B28]"
                            : "bg-[#557BA5]"
                        }`}
                      />

                    </div>

                    <div className="mt-4 flex items-start justify-between gap-3">

                      <div>

                        <h3 className="font-serif text-[19px] sm:text-[22px]">
                          {member.name}
                        </h3>

                        <p
                          className={`mt-1 font-sans text-[8px] font-semibold uppercase tracking-[0.14em] ${
                            isOrange
                              ? "text-[#C75B28]"
                              : "text-[#557BA5]"
                          }`}
                        >
                          {member.role}
                        </p>

                      </div>

                      <span className="font-serif text-[11px] text-[#98877C]">
                        0{index + 1}
                      </span>

                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </section>

        {/* ======================================================
            FINAL QUOTE
        ====================================================== */}

   
        {/* ======================================================
            CTA
        ====================================================== */}

        <section className="bg-[#1D1B19] py-20 text-white sm:py-24 lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="mx-auto max-w-[850px] px-5 text-center sm:px-8"
          >

            <div className="mx-auto h-1 w-12 bg-[#C75B28]" />

            <h2 className="mt-7 font-serif text-[38px] leading-[1.08] sm:text-[55px]">
              Be part of
              <span className="text-[#C75B28]"> living culture.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[600px] font-sans text-[14px] leading-7 text-white/55">
              Culture grows when people participate. Connect with Na Lisah
              and be part of a community carrying Newa heritage forward.
            </p>

            <div className="mt-8 flex justify-center">

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[#C75B28] px-7 py-3.5 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#A9471D]"
              >
                Connect With Us

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

          </motion.div>
        </section>

      </main>

      <Footer />
    </>
  );
}