
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ============================================================
   ANIMATIONS
============================================================ */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.985,
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
      staggerChildren: 0.1,
    },
  },
};

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
            FULL SCREEN HERO
        ====================================================== */}

        <section className="relative flex min-h-[calc(100vh-76px)] items-center justify-center overflow-hidden bg-[#FAF8F5]">

          {/* subtle background glow */}

          <div className="pointer-events-none absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full bg-[#D46726]/[0.045] blur-3xl" />

          <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#4E76A3]/[0.045] blur-3xl" />

          <div className="relative z-10 mx-auto flex w-full max-w-[950px] flex-col items-center px-5 py-20 text-center sm:px-8">

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col items-center"
            >

              {/* =================================================
                  LOGO
              ================================================= */}

              <div className="relative">

                {/* Orange accent */}

                <span className="absolute -left-5 -top-4 h-1.5 w-12 bg-[#D46726] sm:-left-7 sm:-top-5 sm:w-16" />

                {/* Blue accent */}

                <span className="absolute -bottom-4 -right-5 h-1.5 w-12 bg-[#4E76A3] sm:-bottom-5 sm:-right-7 sm:w-16" />

                <Image
                  src="/digital.png"
                  alt="Na Lisah Sanskritik Pucha"
                  width={220}
                  height={220}
                  priority
                  className="h-[145px] w-[145px] object-contain sm:h-[185px] sm:w-[185px] lg:h-[210px] lg:w-[210px]"
                />

              </div>

              {/* =================================================
                  LABEL
              ================================================= */}

              <div className="mt-10 flex items-center gap-3 sm:mt-12 sm:gap-4">

                <span className="h-px w-8 bg-[#D46726] sm:w-12" />

                <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D46726] sm:text-[10px]">
                  About Na Lisah
                </span>

                <span className="h-px w-8 bg-[#4E76A3] sm:w-12" />

              </div>

              {/* =================================================
                  MAIN DESCRIPTION
              ================================================= */}

              <p className="mx-auto mt-7 max-w-[760px] font-serif text-[23px] leading-[1.5] text-[#302B27] sm:mt-8 sm:text-[31px] sm:leading-[1.45] lg:text-[36px]">
                Na Lisah Sanskritik Pucha is a youth-led cultural initiative
                rooted in Newa heritage, creating spaces to learn, participate,
                celebrate, and connect with our culture.
              </p>

              {/* =================================================
                  NEPALI LINE
              ================================================= */}

              <p className="mt-6 font-serif text-[18px] text-[#D46726] sm:mt-7 sm:text-[21px]">
                संस्कृति हाम्रो पहिचान हो।
              </p>

              {/* =================================================
                  JOIN US
              ================================================= */}

              <Link
                href="/contact"
                className="group mt-9 inline-flex items-center gap-3 bg-[#D46726] px-6 py-3.5 font-sans text-[11px] font-semibold text-white transition-all duration-300 hover:bg-[#B9531E] sm:mt-10 sm:px-7 sm:py-4 sm:text-[13px]"
              >
                Join Us

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </motion.div>

          </div>

   

        </section>

        {/* ======================================================
            WHO WE ARE
        ====================================================== */}

        <section className="bg-[#F2ECE4] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-12">

            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

              {/* LEFT */}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                variants={fadeLeft}
              >

                <div className="flex items-center gap-3">
                  <span className="h-px w-9 bg-[#C75B28]" />

                  <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-[#C75B28]">
                    Who We Are
                  </span>
                </div>

                <p className="mt-5 font-serif text-[21px] leading-[1.4] text-[#8A766B] sm:text-[23px]">
                  हामी को हौँ?
                </p>

              </motion.div>

              {/* RIGHT */}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                variants={fadeRight}
              >

                <h2 className="max-w-[760px] font-serif text-[34px] leading-[1.1] tracking-[-0.025em] sm:text-[48px] lg:text-[52px]">
                  We are young people
                  <span className="text-[#C75B28]"> connected </span>
                  by culture.
                </h2>

                <div className="mt-7 grid gap-6 sm:grid-cols-2 sm:gap-8">

                  <p className="font-sans text-[13px] leading-7 text-[#5D5049] sm:text-[14px] sm:leading-7">
                    Na Lisah exists because culture is more than something we
                    inherit. It is something we experience, question, share
                    and continue to shape.
                  </p>

                  <p className="font-sans text-[13px] leading-7 text-[#5D5049] sm:text-[14px] sm:leading-7">
                    From festivals and music to stories, language, rituals,
                    food and everyday community life, we want to create spaces
                    where heritage feels close and relevant.
                  </p>

                </div>

                <div className="mt-8 border-l-2 border-[#C75B28] pl-5 sm:mt-9 sm:pl-6">

                  <p className="font-serif text-[19px] leading-[1.5] text-[#302B27] sm:text-[24px]">
                    “हामी विगतलाई मात्र सम्झिँदैनौँ,
                    <span className="text-[#557BA5]">
                      {" "}भविष्यसँग जोड्छौँ।
                    </span>
                  </p>

                </div>

              </motion.div>

            </div>

          </div>
        </section>

        {/* ======================================================
            VIDEO
        ====================================================== */}

        <section className="bg-[#1D1B19] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-12">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={fadeUp}
            >

              {/* VIDEO HEADER */}

              <div className="mb-8 sm:mb-10">

                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-9 bg-[#C75B28]" />

                  <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-[#C75B28]">
                    Experience Culture
                  </span>
                </div>

                <h2 className="max-w-[700px] font-serif text-[34px] leading-[1.06] text-white sm:text-[46px] lg:text-[52px]">
                  Culture is not only
                  <span className="text-[#C75B28]"> remembered.</span>
                </h2>

              </div>

              {/* =================================================
                  VIDEO PLAYER
              ================================================= */}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                variants={scaleIn}
                className="relative mx-auto max-w-[1050px] overflow-hidden bg-[#292622]"
              >

                <div className="aspect-video">

                  <video
                    className="h-full w-full object-cover"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster="/about.jpg"
                  >
                    <source
                      src="/video1.mp4"
                      type="video/mp4"
                    />

                    Your browser does not support the video tag.
                  </video>

                </div>

                {/* Orange corner */}

                <span className="pointer-events-none absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 border-[#C75B28] sm:h-16 sm:w-16" />

                {/* Blue corner */}

                <span className="pointer-events-none absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-[#557BA5] sm:h-16 sm:w-16" />

              </motion.div>

              <p className="mt-4 font-serif text-[17px] text-white/60 sm:text-[20px]">
                संस्कृति बाँचिरहन्छ।
              </p>

            </motion.div>

          </div>
        </section>

        {/* ======================================================
            OUR JOURNEY
        ====================================================== */}

        <section className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-12">

            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">

              {/* LEFT */}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                variants={fadeLeft}
              >

                <div className="flex items-center gap-3">
                  <span className="h-px w-9 bg-[#C75B28]" />

                  <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-[#C75B28]">
                    Our Journey
                  </span>
                </div>

                <h2 className="mt-5 font-serif text-[36px] leading-[1.05] tracking-[-0.02em] sm:text-[48px] lg:text-[52px]">
                  Growing with
                  <span className="block text-[#557BA5]">
                    every generation.
                  </span>
                </h2>

                <p className="mt-6 max-w-[380px] font-serif text-[19px] leading-[1.45] text-[#8A766B] sm:text-[21px]">
                  समय बदलिन्छ,
                  <span className="block text-[#C75B28]">
                    संस्कृति अगाडि बढ्छ।
                  </span>
                </p>

              </motion.div>

              {/* TIMELINE */}

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                variants={stagger}
                className="relative"
              >

                <div className="absolute bottom-2 left-[17px] top-2 w-px bg-[#DDD4CB] sm:left-[21px]" />

                <div className="space-y-7">

                  {journey.map((item, index) => {
                    const isOrange = index % 2 === 0;

                    return (
                      <motion.div
                        key={item.year}
                        variants={fadeUp}
                        className="relative grid grid-cols-[36px_1fr] gap-5 sm:grid-cols-[44px_1fr] sm:gap-7"
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

                        <div className="border-b border-[#DDD4CB] pb-7">

                          <div className="flex flex-wrap items-center gap-3">

                            <span
                              className={`font-serif text-[25px] ${
                                isOrange
                                  ? "text-[#C75B28]"
                                  : "text-[#557BA5]"
                              }`}
                            >
                              {item.year}
                            </span>

                            <span className="h-px w-5 bg-[#DDD4CB]" />

                            <span className="font-sans text-[8px] font-semibold uppercase tracking-[0.17em] text-[#98877C]">
                              {item.nepali}
                            </span>

                          </div>

                          <h3 className="mt-1.5 font-serif text-[23px] sm:text-[27px]">
                            {item.title}
                          </h3>

                          <p className="mt-2.5 max-w-[620px] font-sans text-[13px] leading-6 text-[#5D5049] sm:text-[14px] sm:leading-7">
                            {item.description}
                          </p>

                        </div>

                      </motion.div>
                    );
                  })}

                </div>

              </motion.div>

            </div>

          </div>
        </section>

        {/* ======================================================
            TEAM
        ====================================================== */}

        <section className="bg-[#F2ECE4] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-12">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={fadeUp}
              className="grid gap-7 border-b border-[#DDD4CB] pb-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
            >

              <div>

                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-9 bg-[#C75B28]" />

                  <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-[#C75B28]">
                    Our People
                  </span>
                </div>

                <h2 className="font-serif text-[36px] leading-[1.06] tracking-[-0.02em] sm:text-[48px] lg:text-[52px]">
                  The people
                  <span className="text-[#557BA5]"> behind </span>
                  Na Lisah.
                </h2>

              </div>

              <div className="flex items-end">

                <p className="max-w-[510px] font-sans text-[13px] leading-7 text-[#5D5049] sm:text-[14px]">
                  Na Lisah is built by people who care about culture,
                  community, creativity and the generations who will carry
                  these stories next.
                </p>

              </div>

            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              variants={stagger}
              className="mt-8 grid grid-cols-2 gap-x-5 gap-y-8 sm:mt-10 sm:grid-cols-4 sm:gap-7"
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
                        className={`absolute left-0 top-0 h-[3px] w-9 transition-all duration-500 group-hover:w-14 ${
                          isOrange
                            ? "bg-[#C75B28]"
                            : "bg-[#557BA5]"
                        }`}
                      />

                    </div>

                    <div className="mt-3 flex items-start justify-between gap-3">

                      <div>

                        <h3 className="font-serif text-[18px] sm:text-[21px]">
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

                      <span className="font-serif text-[10px] text-[#98877C]">
                        0{index + 1}
                      </span>

                    </div>

                  </motion.div>
                );
              })}

            </motion.div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

