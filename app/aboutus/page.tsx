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

/* ============================================================
   ANIMATION
============================================================ */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
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
    x: -35,
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
    x: 35,
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
    name: "Team Member",
    role: "Founder / Coordinator",
    image: "/team-1.jpg",
  },
  {
    name: "Team Member",
    role: "Cultural Coordinator",
    image: "/team-2.jpg",
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

        <section className="border-b border-[#DDD4CB]">
          <div className="mx-auto max-w-[1280px] px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-12 lg:pb-28 lg:pt-20">

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-12 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-[#C75B28]" />

              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C75B28]">
                हाम्रो बारेमा
              </span>
            </motion.div>

            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

              {/* TEXT */}

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeLeft}
              >
                <p className="mb-6 font-serif text-[21px] leading-[1.45] text-[#8A766B] sm:text-[25px]">
                  संस्कृति हाम्रो जरा हो।
                </p>

                <h1 className="max-w-[760px] font-serif text-[48px] leading-[0.98] tracking-[-0.035em] sm:text-[68px] lg:text-[78px]">
                  Who we are,
                  <span className="block">
                    <span className="text-[#C75B28]">what</span>{" "}
                    <span className="text-[#557BA5]">we carry.</span>
                  </span>
                </h1>

                <p className="mt-8 max-w-[600px] font-sans text-[14px] leading-7 text-[#5D5049] sm:text-[16px] sm:leading-8">
                  Na Lisah Sanskritik Pucha is a youth-led cultural initiative
                  creating spaces to learn, participate, celebrate and connect
                  with Newa heritage.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 bg-[#C75B28] px-6 py-3.5 font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#A9471D]"
                  >
                    Connect With Us

                    <ArrowRight
                      size={15}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/gallery"
                    className="group inline-flex items-center gap-2 border border-[#D8CCC2] px-6 py-3.5 font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-[#1C1A17] transition-all duration-300 hover:border-[#557BA5] hover:bg-[#557BA5] hover:text-white"
                  >
                    Explore Heritage

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </motion.div>

              {/* SMALLER IMAGE */}

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeRight}
                className="relative mx-auto w-full max-w-[520px] lg:ml-auto"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#E8DED5]">
                  <Image
                    src="/group.png"
                    alt="Na Lisah Sanskritik Pucha community"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 520px"
                    className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>

                <div className="absolute -bottom-7 -left-5 max-w-[270px] border border-[#E0D5CB] bg-[#FAF8F5] p-5 shadow-[0_15px_40px_rgba(28,26,23,0.08)] sm:-left-8 sm:p-6">
                  <span className="font-serif text-[28px] leading-none text-[#C75B28]">
                    “
                  </span>

                  <p className="mt-1 font-serif text-[18px] leading-[1.45]">
                    आफ्नो संस्कृति,
                    <span className="text-[#557BA5]">
                      {" "}आफ्नो पहिचान।
                    </span>
                  </p>

                  <p className="mt-3 font-sans text-[8px] font-semibold uppercase tracking-[0.18em] text-[#98877C]">
                    Our culture · Our identity
                  </p>
                </div>
              </motion.div>
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
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-[#557BA5]" />

                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#557BA5]">
                    Who We Are
                  </span>
                </div>

                <p className="mt-7 font-serif text-[23px] leading-[1.45] text-[#8A766B]">
                  हामी को हौँ?
                </p>
              </div>

              <div>
                <h2 className="font-serif text-[36px] leading-[1.08] tracking-[-0.025em] sm:text-[53px]">
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

                <div className="mt-10 border-l-2 border-[#557BA5] pl-6">
                  <p className="font-serif text-[21px] leading-[1.5] text-[#302B27] sm:text-[25px]">
                    “हामी विगतलाई मात्र सम्झिँदैनौँ,
                    <span className="text-[#C75B28]">
                      {" "}भविष्यसँग जोड्छौँ।
                    </span>
                  </p>
                </div>
              </div>
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
              <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

                <div>
                  <div className="mb-4 flex items-center gap-4">
                    <span className="h-px w-10 bg-[#C75B28]" />

                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C75B28]">
                      Experience Culture
                    </span>
                  </div>

                  <h2 className="font-serif text-[38px] leading-[1.05] text-white sm:text-[54px]">
                    Culture is not only
                    <span className="text-[#C75B28]"> remembered.</span>
                  </h2>
                </div>

                <p className="max-w-[390px] font-sans text-[13px] leading-6 text-white/50">
                  It lives in the people, sounds, celebrations and everyday
                  moments we choose to carry forward.
                </p>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={scaleIn}
                className="relative mx-auto max-w-[980px] overflow-hidden bg-[#292622]"
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

              <div className="mt-5 flex items-center justify-between">
                <p className="font-serif text-[18px] text-white/70 sm:text-[22px]">
                  संस्कृति बाँचिरहन्छ।
                </p>

                <span className="font-sans text-[8px] font-semibold uppercase tracking-[0.18em] text-white/30">
                  Na Lisah Sanskritik Pucha
                </span>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ======================================================
            WHAT GUIDES US
        ====================================================== */}

        <section className="bg-[#FAF8F5] py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-12">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="grid gap-10 border-b border-[#DDD4CB] pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
            >
              <div>
                <div className="mb-5 flex items-center gap-4">
                  <span className="h-px w-10 bg-[#557BA5]" />

                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#557BA5]">
                    What Guides Us
                  </span>
                </div>

                <h2 className="font-serif text-[38px] leading-[1.05] tracking-[-0.02em] sm:text-[54px]">
                  What we
                  <span className="text-[#C75B28]"> believe </span>
                  in.
                </h2>
              </div>

              <div className="flex items-end">
                <p className="max-w-[520px] font-sans text-[14px] leading-7 text-[#5D5049]">
                  Our work is shaped by a few simple ideas: respect what came
                  before us, make room for people today, and create a future
                  where culture can continue to grow.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="mt-10 grid border-l border-[#DDD4CB] sm:grid-cols-2 lg:grid-cols-4"
            >
              {values.map((value, index) => {
                const Icon = value.icon;
                const isOrange = index % 2 === 0;

                return (
                  <motion.div
                    key={value.number}
                    variants={fadeUp}
                    className="group border-b border-r border-[#DDD4CB] p-6 transition-colors duration-300 hover:bg-[#F2ECE4] sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className={`font-serif text-[21px] ${
                          isOrange
                            ? "text-[#C75B28]"
                            : "text-[#557BA5]"
                        }`}
                      >
                        {value.number}
                      </span>

                      <Icon
                        size={22}
                        strokeWidth={1.4}
                        className={
                          isOrange
                            ? "text-[#C75B28]"
                            : "text-[#557BA5]"
                        }
                      />
                    </div>

                    <p className="mt-12 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-[#98877C]">
                      {value.nepali}
                    </p>

                    <h3 className="mt-2 font-serif text-[28px]">
                      {value.title}
                    </h3>

                    <p className="mt-4 font-sans text-[13px] leading-6 text-[#5D5049]">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </section>

        {/* ======================================================
            SMALL IMAGE STORY
        ====================================================== */}

        <section className="bg-[#F2ECE4] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-12">

            <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeLeft}
                className="relative mx-auto w-full max-w-[410px]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/about-1.jpg"
                    alt="Newa cultural gathering"
                    fill
                    sizes="(max-width: 1024px) 90vw, 410px"
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                  />
                </div>

                <div className="absolute -bottom-5 -right-5 w-[55%] overflow-hidden border-[6px] border-[#F2ECE4]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/about-2.jpg"
                      alt="Newa cultural celebration"
                      fill
                      sizes="220px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeRight}
              >
                <div className="mb-5 flex items-center gap-4">
                  <span className="h-px w-10 bg-[#C75B28]" />

                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C75B28]">
                    Why We Exist
                  </span>
                </div>

                <h2 className="max-w-[680px] font-serif text-[38px] leading-[1.06] tracking-[-0.02em] sm:text-[55px]">
                  Some things are too important to be
                  <span className="text-[#C75B28]"> forgotten.</span>
                </h2>

                <p className="mt-7 max-w-[620px] font-sans text-[14px] leading-7 text-[#5D5049] sm:text-[15px] sm:leading-8">
                  Every generation receives something from the generation
                  before it. Our responsibility is to understand it, value it,
                  and find our own way of carrying it forward.
                </p>

                <p className="mt-5 max-w-[620px] font-sans text-[14px] leading-7 text-[#5D5049] sm:text-[15px] sm:leading-8">
                  We do not believe preservation means freezing culture in
                  time. It means keeping its meaning alive while allowing new
                  generations to participate in their own way.
                </p>

                <div className="mt-9 border-l-2 border-[#557BA5] pl-6">
                  <p className="font-serif text-[21px] leading-[1.5] sm:text-[25px]">
                    “हिजोको सम्पदा,
                    <span className="text-[#C75B28]">
                      {" "}आजको जिम्मेवारी,
                    </span>
                    <span className="block text-[#557BA5]">
                      भोलिको भविष्य।
                    </span>
                  </p>
                </div>
              </motion.div>

            </div>
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
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-10 bg-[#C75B28]" />

                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C75B28]">
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
                  <span className="h-px w-10 bg-[#557BA5]" />

                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#557BA5]">
                    Our People
                  </span>
                </div>

                <h2 className="font-serif text-[39px] leading-[1.05] tracking-[-0.02em] sm:text-[54px]">
                  The people
                  <span className="text-[#C75B28]"> behind </span>
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

        <section className="bg-[#FAF8F5] py-20 sm:py-24 lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="mx-auto max-w-[900px] px-5 text-center sm:px-8"
          >
            <span className="font-serif text-[46px] leading-none text-[#C75B28]">
              “
            </span>

            <h2 className="mt-3 font-serif text-[35px] leading-[1.1] tracking-[-0.02em] sm:text-[53px]">
              A culture stays alive when people
              <span className="text-[#C75B28]"> choose </span>
              to carry it.
            </h2>

            <p className="mt-7 font-serif text-[20px] leading-[1.5] text-[#8A766B] sm:text-[25px]">
              हाम्रो संस्कृति हाम्रो पहिचान हो।
              <span className="block text-[#557BA5]">
                यसको भविष्य हाम्रो हातमा छ।
              </span>
            </p>
          </motion.div>
        </section>

        {/* ======================================================
            CTA
        ====================================================== */}

        <section className="bg-[#C75B28] py-16 sm:py-20 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:px-12"
          >
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-white/60" />

                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                  Be Part of the Story
                </span>
              </div>

              <h2 className="max-w-[700px] font-serif text-[40px] leading-[1.03] text-white sm:text-[56px]">
                Culture belongs to all of us.
                <span className="block text-[#F2ECE4]">
                  Let&apos;s carry it together.
                </span>
              </h2>

              <p className="mt-5 max-w-[560px] font-serif text-[19px] leading-[1.5] text-white/75">
                संस्कृति बचाउने होइन,
                <span className="text-white">
                  {" "}संस्कृति बाँच्ने हो।
                </span>
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-3 border border-white bg-white px-7 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-[#C75B28] transition-all duration-300 hover:border-[#557BA5] hover:bg-[#557BA5] hover:text-white sm:px-8 sm:text-[11px]"
            >
              Connect With Us

              <ArrowRight
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </section>

      </main>
    </>
  );
}