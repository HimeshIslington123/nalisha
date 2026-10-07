"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { events } from "@/data/events";

export default function EventsClient() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#FAF8F5] text-[#1D1B19]">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="border-b border-[#1D1B19]/10">
          <div className="mx-auto max-w-7xl px-6 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Label */}

              <div className="mb-7 flex items-center gap-4 sm:mb-8">
                <span className="h-px w-10 bg-[#D46726] sm:w-12" />

                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D46726] sm:text-[11px]">
                  Our Events
                </span>
              </div>

              {/* Heading */}

              <h1 className="max-w-[850px] font-serif text-[40px] leading-[1.05] tracking-[-0.02em] sm:text-[56px] lg:text-[70px]">
                Culture comes
                <span className="block text-[#D46726]">
                  alive,
                  <span className="text-[#4E76A3]"> together.</span>
                </span>
              </h1>

              {/* Description */}

              <p className="mt-6 max-w-[650px] font-sans text-[14px] leading-7 text-[#574239] sm:mt-7 sm:text-[17px] sm:leading-8">
                Explore our gatherings, heritage walks, workshops, and
                community programs celebrating the living heritage of the
                Kathmandu Valley.
              </p>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            EVENT LIST
        ===================================================== */}

        <section>
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            {/* Section heading */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mb-10 flex items-end justify-between gap-5 sm:mb-14"
            >
              <div>
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4E76A3]">
                  Discover
                </p>

                <h2 className="mt-3 font-serif text-[34px] leading-tight tracking-[-0.02em] sm:text-[46px]">
                  Upcoming &amp;
                  <span className="text-[#D46726]"> recent events.</span>
                </h2>
              </div>

              <span className="hidden font-sans text-[11px] text-[#7A7069] sm:block">
                {events.length} events
              </span>
            </motion.div>

            {/* =================================================
                EVENT GRID
                ================================================= */}

            <div className="space-y-10">
              {events.map((event, index) => (
                <motion.article
                  key={event.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: Math.min(index * 0.05, 0.2),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group border-b border-[#1D1B19]/10 pb-10 last:border-b-0"
                >
                  <div className="grid gap-7 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:gap-12">
                    {/* Image */}

                    <Link
                      href={`/events/${event.slug}`}
                      className="relative block aspect-[16/10] overflow-hidden bg-[#F2ECE4]"
                    >
                      <Image
                        src={event.image}
                        alt={`${event.title} - ${event.titleNepali}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />

                      {/* Category */}

                      <div className="absolute left-4 top-4 bg-[#FAF8F5] px-3 py-2">
                        <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D46726]">
                          {event.category}
                        </span>
                      </div>
                    </Link>

                    {/* Content */}

                    <div>
                      {/* Date */}

                      <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                        <div className="flex items-center gap-2">
                          <CalendarDays
                            size={15}
                            strokeWidth={1.7}
                            className="text-[#D46726]"
                          />

                          <span className="font-sans text-[11px] font-semibold text-[#5D5049]">
                            {event.date}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Clock3
                            size={15}
                            strokeWidth={1.7}
                            className="text-[#4E76A3]"
                          />

                          <span className="font-sans text-[11px] text-[#5D5049]">
                            {event.time}
                          </span>
                        </div>
                      </div>

                      {/* English title */}

                      <h3 className="font-serif text-[30px] leading-[1.1] tracking-[-0.02em] sm:text-[38px]">
                        {event.title}
                      </h3>

                      {/* Nepali title */}

                      <p className="mt-2 font-sans text-[15px] font-medium text-[#D46726]">
                        {event.titleNepali}
                      </p>

                      {/* Description */}

                      <p className="mt-5 max-w-[600px] font-sans text-[14px] leading-7 text-[#5D5049] sm:text-[15px]">
                        {event.shortDescription}
                      </p>

                      {/* Location */}

                      <div className="mt-5 flex items-center gap-2 text-[#5D5049]">
                        <MapPin
                          size={15}
                          strokeWidth={1.7}
                          className="text-[#4E76A3]"
                        />

                        <span className="font-sans text-[12px]">
                          {event.location}
                        </span>
                      </div>

                      {/* Link */}

                      <Link
                        href={`/events/${event.slug}`}
                        className="group/link mt-7 inline-flex items-center gap-2 border-b border-[#D46726] pb-1.5 font-sans text-[11px] font-semibold text-[#D46726]"
                      >
                        View Event

                        <ArrowRight
                          size={15}
                          className="transition-transform duration-300 group-hover/link:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTTOM CULTURAL MESSAGE
        ===================================================== */}

        <section className="bg-[#1D1B19] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D46726]">
                Our purpose
              </p>

              <h2 className="mt-4 max-w-[850px] font-serif text-[34px] leading-[1.1] tracking-[-0.02em] sm:text-[48px] lg:text-[58px]">
                संस्कृति केवल सम्झिने कुरा होइन,
                <span className="text-[#D46726]">
                  {" "}
                  जिउने कुरा हो।
                </span>
              </h2>

              <p className="mt-6 max-w-[650px] font-sans text-[14px] leading-7 text-white/60 sm:text-[16px]">
                Culture is not only something we remember. It is something we
                live, share, and carry forward together.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}