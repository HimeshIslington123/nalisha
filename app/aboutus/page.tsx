
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  MapPin,
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
   CULTURAL QUOTES
   Each quote stays for approximately 5.5 seconds.
============================================================ */

const culturalQuotes = [
  "संस्कृति हाम्रो पहिचान हो।",
  "हाम्रो भाषा, हाम्रो गौरव हो।",
  "हाम्रो संस्कृति, हाम्रो जरा हो।",
  "परम्परा पुस्तादेखि पुस्तासम्म।",
  "हाम्रो सम्पदा, हाम्रो भविष्य हो।",
  "संस्कृति सम्झिने मात्र होइन, जिउने कुरा हो।",
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
    name: "Lasata Maharjan",
    role: "Treasurer",
    image: "/team-3.jpg",
  },
  {
    name: "Palistha Maharjan",
    role: "General Member",
    image: "/team-4.jpg",
  },
];

/* ============================================================
   VIDEOS
   Put these files inside /public.
============================================================ */

const videos = [
  {
    src: "/video1.mp4",
    title: "Culture in Motion",
    subtitle: "परम्परा, सहभागिता र नयाँ पुस्ता।",
    poster: "/about.jpg",
  },
  {
    src: "/video4.mp4",
    title: "Our Culture",
    subtitle: "हाम्रो संस्कृति, हाम्रो साझा यात्रा।",
    poster: "/about.jpg",
  },
  {
    src: "/video5.mp4",
    title: "Living Heritage",
    subtitle: "संस्कृतिलाई सम्झिने मात्र होइन, जिउने।",
    poster: "/about.jpg",
  },
];

/* ============================================================
   PAGE
============================================================ */

export default function AboutUsPage() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  /* ==========================================================
     QUOTE CHANGE
     5.5 seconds
  ========================================================== */

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((current) => {
        return (current + 1) % culturalQuotes.length;
      });
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <main className="w-full overflow-hidden bg-[#FAF8F5] text-[#1C1A17]">

        {/* ======================================================
            HERO
        ====================================================== */}

        <section className="relative flex min-h-[calc(100vh-76px)] items-center overflow-hidden bg-[#FAF8F5]">

          {/* Background orange glow */}

          <div className="pointer-events-none absolute -left-48 top-1/4 h-[500px] w-[500px] rounded-full bg-[#D46726]/[0.045] blur-3xl" />

          {/* Background blue glow */}

          <div className="pointer-events-none absolute -right-48 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#557BA5]/[0.05] blur-3xl" />

          {/* Small decorative lines */}

          <div className="pointer-events-none absolute left-0 top-1/2 h-px w-20 bg-[#D46726]/30" />

          <div className="pointer-events-none absolute right-0 top-[38%] h-px w-20 bg-[#557BA5]/30" />

          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-76px)] w-full max-w-[1050px] items-center justify-center px-5 py-16 text-center sm:px-8 sm:py-20">

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex w-full flex-col items-center"
            >

              {/* =================================================
                  LOGO
              ================================================= */}

              <div className="relative">

                <span className="absolute -left-5 -top-4 h-1.5 w-12 bg-[#D46726] sm:-left-7 sm:-top-5 sm:w-16" />

                <span className="absolute -bottom-4 -right-5 h-1.5 w-12 bg-[#557BA5] sm:-bottom-5 sm:-right-7 sm:w-16" />

                <Image
                  src="/digital.png"
                  alt="Na Lisah Sanskritik Pucha"
                  width={220}
                  height={220}
                  priority
                  className="h-[125px] w-[125px] object-contain sm:h-[165px] sm:w-[165px] lg:h-[190px] lg:w-[190px]"
                />

              </div>

              {/* =================================================
                  LABEL
              ================================================= */}

              <div className="mt-8 flex items-center gap-3 sm:mt-10 sm:gap-4">

                <span className="h-px w-8 bg-[#D46726] sm:w-12" />

                <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D46726] sm:text-[10px]">
                  About Na Lisah
                </span>

                <span className="h-px w-8 bg-[#557BA5] sm:w-12" />

              </div>

              {/* =================================================
                  MAIN HERO DESCRIPTION
              ================================================= */}

              <p className="mx-auto mt-6 max-w-[850px] font-sans text-[22px] font-medium leading-[1.5] tracking-[-0.015em] text-[#302B27] sm:mt-7 sm:text-[29px] sm:leading-[1.45] lg:text-[36px]">

                Na Lisah Sanskritik Pucha is a youth-led cultural initiative
                rooted in{" "}

                <span className="text-[#D46726]">
                  Newa heritage
                </span>
                , creating spaces to learn, participate, celebrate, and
                connect with{" "}

                <span className="text-[#557BA5]">
                  our culture.
                </span>

              </p>

              {/* =================================================
                  CHANGING NEPALI QUOTE
              ================================================= */}

              <div className="mt-6 flex min-h-[34px] items-center justify-center sm:mt-7 sm:min-h-[40px]">

                <motion.p
                  key={quoteIndex}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                  }}
                  className="font-sans text-[16px] font-medium text-[#557BA5] sm:text-[19px]"
                >
                  {culturalQuotes[quoteIndex]}
                </motion.p>

              </div>

              {/* =================================================
                  JOIN BUTTON
              ================================================= */}

              <Link
                href="/contact"
                className="group mt-7 inline-flex shrink-0 items-center gap-3 bg-[#D46726] px-6 py-3.5 font-sans text-[11px] font-semibold text-white transition-all duration-300 hover:bg-[#B9531E] sm:mt-8 sm:px-7 sm:py-4 sm:text-[13px]"
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
            STATS
        ====================================================== */}

  

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

                  <span className="h-px w-9 bg-[#D46726]" />

                  <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D46726]">
                    Who We Are
                  </span>

                </div>

                <p className="mt-5 font-sans text-[20px] leading-[1.4] text-[#557BA5] sm:text-[22px]">
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

                <h2 className="max-w-[760px] font-sans text-[34px] font-semibold leading-[1.1] tracking-[-0.035em] sm:text-[46px] lg:text-[52px]">

                  We are young people{" "}

                  <span className="text-[#D46726]">
                    connected
                  </span>{" "}

                  by{" "}

                  <span className="text-[#557BA5]">
                    culture.
                  </span>

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

                <div className="mt-8 border-l-2 border-[#D46726] pl-5 sm:mt-9 sm:pl-6">

                  <p className="font-sans text-[18px] font-medium leading-[1.6] text-[#302B27] sm:text-[22px]">

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

              <div className="mb-8 flex flex-col justify-between gap-6 sm:mb-10 sm:flex-row sm:items-end">

                <div>

                  <div className="mb-4 flex items-center gap-3">

                    <span className="h-px w-9 bg-[#D46726]" />

                    <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D46726]">
                      Experience Culture
                    </span>

                  </div>

                  <h2 className="max-w-[700px] font-sans text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-[46px] lg:text-[52px]">

                    Culture is not only{" "}

                    <span className="text-[#D46726]">
                      remembered.
                    </span>

                    <span className="block text-[#557BA5]">
                      It is lived.
                    </span>

                  </h2>

                </div>

              </div>

              <VideoCarousel />

            </motion.div>

          </div>
        </section>

        {/* ======================================================
            JOURNEY
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

                  <span className="h-px w-9 bg-[#D46726]" />

                  <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D46726]">
                    Our Journey
                  </span>

                </div>

                <h2 className="mt-5 font-sans text-[36px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[48px] lg:text-[52px]">

                  Growing with{" "}

                  <span className="text-[#557BA5]">
                    every generation.
                  </span>

                </h2>

                <p className="mt-6 max-w-[380px] font-sans text-[19px] leading-[1.45] text-[#8A766B] sm:text-[21px]">

                  समय बदलिन्छ,

                  <span className="block text-[#D46726]">
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
                                ? "bg-[#D46726]"
                                : "bg-[#557BA5]"
                            }`}
                          />

                        </div>

                        <div className="border-b border-[#DDD4CB] pb-7">

                          <div className="flex flex-wrap items-center gap-3">

                            <span
                              className={`font-sans text-[25px] font-semibold ${
                                isOrange
                                  ? "text-[#D46726]"
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

                          <h3 className="mt-1.5 font-sans text-[22px] font-semibold sm:text-[26px]">
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

                  <span className="h-px w-9 bg-[#D46726]" />

                  <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D46726]">
                    Our People
                  </span>

                </div>

                <h2 className="font-sans text-[36px] font-semibold leading-[1.06] tracking-[-0.035em] sm:text-[48px] lg:text-[52px]">

                  The people{" "}

                  <span className="text-[#557BA5]">
                    behind
                  </span>{" "}

                  <span className="text-[#D46726]">
                    Na Lisah.
                  </span>

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
                            ? "bg-[#D46726]"
                            : "bg-[#557BA5]"
                        }`}
                      />

                    </div>

                    <div className="mt-3 flex items-start justify-between gap-3">

                      <div>

                        <h3 className="font-sans text-[17px] font-semibold sm:text-[20px]">
                          {member.name}
                        </h3>

                        <p
                          className={`mt-1 font-sans text-[8px] font-semibold uppercase tracking-[0.14em] ${
                            isOrange
                              ? "text-[#D46726]"
                              : "text-[#557BA5]"
                          }`}
                        >
                          {member.role}
                        </p>

                      </div>

                      <span className="font-sans text-[10px] text-[#98877C]">
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

/* ============================================================
   STATS SECTION
============================================================ */

function StatsSection() {
  const [members, setMembers] = useState(0);
  const [year, setYear] = useState(0);

  useEffect(() => {
    let memberFrame: number;
    let yearFrame: number;

    const memberStart = performance.now();
    const memberDuration = 1800;

    const animateMembers = (time: number) => {
      const progress = Math.min(
        (time - memberStart) / memberDuration,
        1
      );

      const eased =
        1 - Math.pow(1 - progress, 3);

      setMembers(Math.floor(eased * 50));

      if (progress < 1) {
        memberFrame = requestAnimationFrame(
          animateMembers
        );
      }
    };

    const yearStart = performance.now();
    const yearDuration = 1600;

    const animateYear = (time: number) => {
      const progress = Math.min(
        (time - yearStart) / yearDuration,
        1
      );

      const eased =
        1 - Math.pow(1 - progress, 3);

      setYear(
        Math.floor(
          eased * (2024 - 2000) + 2000
        )
      );

      if (progress < 1) {
        yearFrame = requestAnimationFrame(
          animateYear
        );
      }
    };

    memberFrame =
      requestAnimationFrame(animateMembers);

    yearFrame =
      requestAnimationFrame(animateYear);

    return () => {
      cancelAnimationFrame(memberFrame);
      cancelAnimationFrame(yearFrame);
    };
  }, []);

  return (
    <section className="border-y border-[#DDD4CB] bg-[#FAF8F5]">

      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 sm:grid-cols-3">

          {/* MEMBERS */}

          <div className="flex items-center justify-center gap-4 border-b border-[#DDD4CB] py-7 sm:border-b-0 sm:border-r sm:py-8">

            <Users
              size={20}
              strokeWidth={1.5}
              className="text-[#D46726]"
            />

            <div>

              <div className="font-sans text-[26px] font-semibold leading-none text-[#D46726]">
                {members}+
              </div>

              <div className="mt-1 font-sans text-[8px] font-semibold uppercase tracking-[0.18em] text-[#81736A]">
                Members
              </div>

            </div>

          </div>

          {/* ESTABLISHED */}

          <div className="flex items-center justify-center gap-4 border-b border-[#DDD4CB] py-7 sm:border-b-0 sm:border-r sm:py-8">

            <CalendarDays
              size={20}
              strokeWidth={1.5}
              className="text-[#557BA5]"
            />

            <div>

              <div className="font-sans text-[26px] font-semibold leading-none text-[#557BA5]">
                {year}
              </div>

              <div className="mt-1 font-sans text-[8px] font-semibold uppercase tracking-[0.18em] text-[#81736A]">
                Established
              </div>

            </div>

          </div>

          {/* LOCATION */}

          <div className="flex items-center justify-center gap-4 py-7 sm:py-8">

            <MapPin
              size={20}
              strokeWidth={1.5}
              className="text-[#D46726]"
            />

            <div>

              <div className="font-sans text-[26px] font-semibold leading-none text-[#D46726]">
                Kathmandu
              </div>

              <div className="mt-1 font-sans text-[8px] font-semibold uppercase tracking-[0.18em] text-[#81736A]">
                Based In Nepal
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

/* ============================================================
   VIDEO CAROUSEL
============================================================ */

function VideoCarousel() {
  const [current, setCurrent] = useState(0);

  const nextVideo = () => {
    setCurrent(
      (previous) =>
        (previous + 1) % videos.length
    );
  };

  const previousVideo = () => {
    setCurrent(
      (previous) =>
        previous === 0
          ? videos.length - 1
          : previous - 1
    );
  };

  const currentVideo = videos[current];

  return (
    <div>

      {/* ======================================================
          VIDEO
      ====================================================== */}

      <motion.div
        key={currentVideo.src}
        initial={{
          opacity: 0,
          x: 20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
        className="relative mx-auto max-w-[1050px] overflow-hidden bg-[#292622]"
      >

        <div className="aspect-video">

          <video
            key={currentVideo.src}
            className="h-full w-full object-cover"
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={currentVideo.poster}
          >

            <source
              src={currentVideo.src}
              type="video/mp4"
            />

            Your browser does not support the video tag.

          </video>

        </div>

        {/* ORANGE CORNER */}

        <span className="pointer-events-none absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 border-[#D46726] sm:h-16 sm:w-16" />

        {/* BLUE CORNER */}

        <span className="pointer-events-none absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-[#557BA5] sm:h-16 sm:w-16" />

      </motion.div>

      {/* ======================================================
          VIDEO INFO
      ====================================================== */}

      <div className="mx-auto mt-5 flex max-w-[1050px] items-center justify-between gap-5">

        <div>

          <p className="font-sans text-[18px] font-semibold text-white sm:text-[22px]">
            {currentVideo.title}
          </p>

          <p className="mt-1 font-sans text-[13px] text-white/50 sm:text-[15px]">
            {currentVideo.subtitle}
          </p>

        </div>

        {/* ====================================================
            PREVIOUS / NEXT
        ==================================================== */}

        <div className="flex shrink-0 gap-2">

          <button
            type="button"
            aria-label="Previous video"
            onClick={previousVideo}
            className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-colors duration-300 hover:border-[#D46726] hover:bg-[#D46726] sm:h-11 sm:w-11"
          >
            <ArrowLeft size={16} />
          </button>

          <button
            type="button"
            aria-label="Next video"
            onClick={nextVideo}
            className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-colors duration-300 hover:border-[#557BA5] hover:bg-[#557BA5] sm:h-11 sm:w-11"
          >
            <ArrowRight size={16} />
          </button>

        </div>

      </div>

      {/* ======================================================
          VIDEO COUNTER
      ====================================================== */}

      <div className="mt-5 flex items-center justify-center gap-3">

        {videos.map((video, index) => (

          <button
            key={video.src}
            type="button"
            aria-label={`Show video ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`h-1.5 transition-all duration-300 ${
              index === current
                ? "w-8 bg-[#D46726]"
                : "w-2 bg-white/25 hover:bg-white/50"
            }`}
          />

        ))}

      </div>

    </div>
  );
}

