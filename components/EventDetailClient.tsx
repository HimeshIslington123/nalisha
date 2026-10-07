"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import type { EventItem } from "@/data/events";

type EventDetailClientProps = {
  event: EventItem;
};

export default function EventDetailClient({
  event,
}: EventDetailClientProps) {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#FAF8F5] text-[#1D1B19]">
        {/* =====================================================
            BACK TO EVENTS
        ===================================================== */}

        <div className="mx-auto max-w-7xl px-6 pt-8 sm:px-8 sm:pt-10 lg:px-12">
          <Link
            href="/events"
            className="group inline-flex items-center gap-2 font-sans text-[11px] font-semibold text-[#5D5049] transition-colors hover:text-[#D46726]"
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back to Events
          </Link>
        </div>

        {/* =====================================================
            EVENT HERO
        ===================================================== */}

        <section>
          <div className="mx-auto max-w-7xl px-6 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-12 lg:pb-24 lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Category */}

              <div className="mb-7 flex items-center gap-4 sm:mb-8">
                <span className="h-px w-10 bg-[#D46726] sm:w-12" />

                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D46726] sm:text-[11px]">
                  {event.category}
                </span>
              </div>

              {/* Title */}

              <h1 className="max-w-[1000px] font-serif text-[40px] leading-[1.04] tracking-[-0.025em] sm:text-[56px] lg:text-[72px]">
                {event.title}
              </h1>

              {/* Nepali */}

              <p className="mt-3 font-sans text-[17px] font-medium text-[#D46726] sm:text-[20px]">
                {event.titleNepali}
              </p>

              {/* Intro */}

              <p className="mt-6 max-w-[720px] font-sans text-[14px] leading-7 text-[#574239] sm:text-[17px] sm:leading-8">
                {event.shortDescription}
              </p>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            LARGE EVENT IMAGE
        ===================================================== */}

        <section>
          <div className="mx-auto max-w-[1400px] px-0 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative aspect-[16/9] w-full overflow-hidden bg-[#F2ECE4] sm:aspect-[2/1]"
            >
              <Image
                src={event.image}
                alt={`${event.title} - ${event.titleNepali}`}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            EVENT INFORMATION
        ===================================================== */}

        <section className="border-b border-[#1D1B19]/10">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12 lg:py-24">
            {/* ==================================================
                INFORMATION
                ================================================== */}

            <motion.aside
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4E76A3]">
                Event Information
              </p>

              <div className="mt-8 space-y-7">
                {/* Date */}

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F2ECE4] text-[#D46726]">
                    <CalendarDays
                      size={18}
                      strokeWidth={1.7}
                    />
                  </div>

                  <div>
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em]">
                      Date
                    </p>

                    <p className="mt-1 font-sans text-[14px] text-[#5D5049]">
                      {event.date}
                    </p>

                    {event.dateNepali && (
                      <p className="mt-1 font-sans text-[12px] text-[#D46726]">
                        {event.dateNepali}
                      </p>
                    )}
                  </div>
                </div>

                {/* Time */}

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F2ECE4] text-[#4E76A3]">
                    <Clock3
                      size={18}
                      strokeWidth={1.7}
                    />
                  </div>

                  <div>
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em]">
                      Time
                    </p>

                    <p className="mt-1 font-sans text-[14px] text-[#5D5049]">
                      {event.time}
                    </p>
                  </div>
                </div>

                {/* Location */}

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F2ECE4] text-[#D46726]">
                    <MapPin
                      size={18}
                      strokeWidth={1.7}
                    />
                  </div>

                  <div>
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em]">
                      Location
                    </p>

                    <p className="mt-1 font-sans text-[14px] text-[#5D5049]">
                      {event.location}
                    </p>

                    {event.locationNepali && (
                      <p className="mt-1 font-sans text-[12px] text-[#D46726]">
                        {event.locationNepali}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Map link */}

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  event.location
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex items-center gap-2 border-b border-[#D46726] pb-1.5 font-sans text-[11px] font-semibold text-[#D46726]"
              >
                Open location in Google Maps

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </motion.aside>

            {/* ==================================================
                DESCRIPTION
                ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D46726]">
                About the Event
              </p>

              <h2 className="mt-4 font-serif text-[34px] leading-[1.1] tracking-[-0.02em] sm:text-[46px]">
                A space to
                <span className="text-[#4E76A3]"> connect.</span>
              </h2>

              <div className="mt-7 space-y-5">
                <p className="font-sans text-[14px] leading-7 text-[#5D5049] sm:text-[16px] sm:leading-8">
                  {event.description}
                </p>

                <p className="font-sans text-[14px] leading-7 text-[#5D5049] sm:text-[16px] sm:leading-8">
                  Through this event, we hope to create a welcoming space
                  where people can experience culture, meet one another, and
                  learn from the traditions that continue to shape our
                  community.
                </p>
              </div>

              {/* Details */}

              <div className="mt-10 border-t border-[#1D1B19]/10 pt-8">
                <h3 className="font-serif text-[25px]">
                  What to expect
                </h3>

                <ul className="mt-6 space-y-4">
                  {event.details.map((detail, index) => (
                    <li
                      key={detail}
                      className="flex items-start gap-4"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D46726]" />

                      <span className="font-sans text-[14px] leading-6 text-[#5D5049]">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            GALLERY
        ===================================================== */}

        {event.gallery && event.gallery.length > 0 && (
          <section>
            <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                {/* Label */}

                <div className="mb-7 flex items-center gap-4 sm:mb-8">
                  <span className="h-px w-10 bg-[#4E76A3] sm:w-12" />

                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4E76A3] sm:text-[11px]">
                    Event Moments
                  </span>
                </div>

                <h2 className="font-serif text-[36px] leading-[1.08] tracking-[-0.02em] sm:text-[48px]">
                  Culture in
                  <span className="text-[#D46726]"> motion.</span>
                </h2>

                {/* Gallery */}

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {event.gallery.map((image, index) => (
                    <motion.div
                      key={`${image}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{
                        once: true,
                        amount: 0.15,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.05,
                      }}
                      className={`relative overflow-hidden bg-[#F2ECE4] ${
                        index === 0
                          ? "aspect-[4/3] sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:aspect-auto"
                          : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${event.title} event moment ${index + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* =====================================================
            CULTURAL MESSAGE
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
                Na Lisah
              </p>

              <h2 className="mt-4 max-w-[850px] font-serif text-[34px] leading-[1.1] tracking-[-0.02em] sm:text-[48px] lg:text-[58px]">
                भेटौँ,
                <span className="text-[#D46726]"> सिकौँ,</span>
                <br />
                संस्कृतिसँगै
                <span className="text-[#4E76A3]"> जोडिऔँ।</span>
              </h2>

              <Link
                href="/events"
                className="group mt-8 inline-flex items-center gap-2 border-b border-white/30 pb-2 font-sans text-[11px] font-semibold text-white transition-colors hover:border-[#D46726] hover:text-[#D46726]"
              >
                Explore More Events

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}