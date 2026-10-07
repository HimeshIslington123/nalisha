"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ============================================================
   REAL CONTACT INFORMATION
   ============================================================ */

const CONTACT = {
  phone: "+977 984-9755937",
  email: "nalisahofficial@gmail.com",
  location: "Paknajol, Kathmandu, Nepal",

  instagram:
    "https://www.instagram.com/nah_lisah_sanskritik_pucha?stkn=MXB3NXliYmhzNzh0cg==",

  instagramHandle: "@nah_lisah_sanskritik_pucha",

  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Paknajol%2C%20Kathmandu%2C%20Nepal",
};

/* ============================================================
   INSTAGRAM ICON
   Lucide does not include Instagram brand icons,
   so this is a lightweight inline SVG.
   ============================================================ */

function InstagramIcon({
  size = 20,
}: {
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="17.4"
        cy="6.7"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

/* ============================================================
   PAGE
   ============================================================ */

export default function ContactClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  /* ============================================================
     FORM SUBMIT
     ============================================================ */

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailSubject =
      form.subject.trim() ||
      `Website inquiry from ${form.name || "Visitor"}`;

    const emailBody = `Hello Na Lisah Sanskritik Pucha,

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone || "Not provided"}

Message:
${form.message}

Sent from the Na Lisah website.`;

    const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailto;
  };

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#FAF8F5] text-[#1D1B19]">
        {/* ======================================================
            INTRO
        ====================================================== */}

        <section className="border-b border-[#1D1B19]/10">
          <div className="mx-auto max-w-7xl px-6 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Section label */}

              <div className="mb-7 flex items-center gap-4 sm:mb-8">
                <span className="h-px w-10 bg-[#D46726] sm:w-12" />

                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D46726] sm:text-[11px] sm:tracking-[0.22em]">
                  Contact Us
                </span>
              </div>

              {/* Heading */}

              <h1 className="max-w-[850px] font-serif text-[38px] leading-[1.06] tracking-[-0.02em] sm:text-[52px] lg:text-[68px]">
                Let&apos;s connect and
                <span className="block text-[#D46726]">
                  create
                  <span className="text-[#4E76A3]"> together.</span>
                </span>
              </h1>

              {/* Short meaningful line */}

              <p className="mt-5 max-w-[650px] font-sans text-[14px] leading-7 text-[#574239] sm:mt-6 sm:text-[16px]">
                संस्कृति जोडौँ, सम्पदा जोगाऔँ, सँगै अघि बढौँ।
              </p>

              {/* Button */}

              <div className="mt-8 flex flex-nowrap items-center gap-3 sm:mt-9 sm:gap-5">
                <a
                  href="#contact-form"
                  className="group inline-flex shrink-0 items-center gap-2 bg-[#D46726] px-4 py-3 font-sans text-[10px] font-semibold text-white transition-all duration-300 hover:bg-[#B9531E] sm:gap-3 sm:px-6 sm:py-3.5 sm:text-[13px]"
                >
                  Send a Message

                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ======================================================
            CONTACT INFORMATION + FORM
        ====================================================== */}

        <section
          id="contact-form"
          className="scroll-mt-20"
        >
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12 lg:py-24">
            {/* ==================================================
                LEFT
                ================================================== */}

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Section label */}

              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-[#D46726]" />

                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em]  text-[#D46726]">
                  Get in touch
                </span>
              </div>

              {/* Heading */}

              <h2 className="max-w-[500px] font-serif text-[34px] leading-[1.08] tracking-[-0.02em] sm:text-[44px]">
                We&apos;d love to
                <span className="text-[#D46726]"> hear </span>
                from you.
              </h2>

              <p className="mt-5 max-w-[500px] font-sans text-[14px] leading-7 text-[#5D5049] sm:text-[16px]">
                Have a question, an idea, or something you would like to share?
                Reach out to us and let&apos;s start a conversation.
              </p>

              {/* ==================================================
                  DETAILS
                  ================================================== */}

              <div className="mt-10 space-y-7">
                {/* Location */}

                <a
                  href={CONTACT.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F2ECE4] text-[#D46726]">
                    <MapPin
                      size={18}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em]">
                      Location
                    </p>

                    <p className="mt-1 font-sans text-[14px] text-[#5D5049] transition-colors group-hover:text-[#D46726]">
                      {CONTACT.location}
                    </p>

                    <p className="mt-1 font-sans text-[10px] font-medium text-[#4E76A3]">
                      Open in Google Maps
                    </p>
                  </div>
                </a>

                {/* Phone */}

                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F2ECE4] text-[#D46726]">
                    <Phone
                      size={18}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em]">
                      Phone
                    </p>

                    <p className="mt-1 font-sans text-[14px] text-[#5D5049] transition-colors group-hover:text-[#D46726]">
                      {CONTACT.phone}
                    </p>
                  </div>
                </a>

                {/* Email */}

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F2ECE4] text-[#D46726]">
                    <Mail
                      size={18}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em]">
                      Email
                    </p>

                    <p className="mt-1 break-all font-sans text-[14px] text-[#5D5049] transition-colors group-hover:text-[#D46726]">
                      {CONTACT.email}
                    </p>
                  </div>
                </a>

                {/* Instagram */}

                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F2ECE4] text-[#D46726]">
                    <InstagramIcon size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em]">
                      Instagram
                    </p>

                    <p className="mt-1 break-all font-sans text-[14px] text-[#5D5049] transition-colors group-hover:text-[#D46726]">
                      {CONTACT.instagramHandle}
                    </p>
                  </div>
                </a>
              </div>

              {/* Small cultural line */}

              <div className="mt-12 border-l-2 border-[#D46726] pl-5">
                <p className="max-w-[420px] font-sans text-[13px] leading-6 text-[#5D5049]">
                  संस्कृति हाम्रो पहिचान हो, र यसलाई पुस्तासम्म पुर्‍याउने
                  यात्रामा तपाईं पनि हाम्रो साथ बन्न सक्नुहुन्छ।
                </p>
              </div>
            </motion.div>

            {/* ==================================================
                FORM
                ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="border border-[#1D1B19]/10 bg-white p-6 sm:p-8 lg:p-10">
                {/* Form heading */}

                <div className="mb-8">
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D46726]">
                    Send a message
                  </p>

                  <h2 className="mt-3 font-serif text-[30px] leading-tight tracking-[-0.02em] sm:text-[38px]">
                    Tell us what&apos;s on your mind.
                  </h2>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Name + Phone */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block font-sans text-[12px] font-semibold"
                      >
                        Name
                        <span className="ml-1 text-[#D46726]">*</span>
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={(event) =>
                          setForm({
                            ...form,
                            name: event.target.value,
                          })
                        }
                        placeholder="Your name"
                        className="w-full border border-[#1D1B19]/15 bg-[#FAF8F5] px-4 py-3.5 font-sans text-[13px] text-[#1D1B19] outline-none transition placeholder:text-[#9A918B] focus:border-[#D46726]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block font-sans text-[12px] font-semibold"
                      >
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(event) =>
                          setForm({
                            ...form,
                            phone: event.target.value,
                          })
                        }
                        placeholder="+977 984-9755937"
                        className="w-full border border-[#1D1B19]/15 bg-[#FAF8F5] px-4 py-3.5 font-sans text-[13px] text-[#1D1B19] outline-none transition placeholder:text-[#9A918B] focus:border-[#D46726]"
                      />
                    </div>
                  </div>

                  {/* Email */}

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-sans text-[12px] font-semibold"
                    >
                      Email
                      <span className="ml-1 text-[#D46726]">*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          email: event.target.value,
                        })
                      }
                      placeholder="you@example.com"
                      className="w-full border border-[#1D1B19]/15 bg-[#FAF8F5] px-4 py-3.5 font-sans text-[13px] text-[#1D1B19] outline-none transition placeholder:text-[#9A918B] focus:border-[#D46726]"
                    />
                  </div>

                  {/* Subject */}

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block font-sans text-[12px] font-semibold"
                    >
                      Subject
                      <span className="ml-1 text-[#D46726]">*</span>
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          subject: event.target.value,
                        })
                      }
                      placeholder="How can we help?"
                      className="w-full border border-[#1D1B19]/15 bg-[#FAF8F5] px-4 py-3.5 font-sans text-[13px] text-[#1D1B19] outline-none transition placeholder:text-[#9A918B] focus:border-[#D46726]"
                    />
                  </div>

                  {/* Message */}

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block font-sans text-[12px] font-semibold"
                    >
                      Message
                      <span className="ml-1 text-[#D46726]">*</span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          message: event.target.value,
                        })
                      }
                      placeholder="Write your message..."
                      className="w-full resize-none border border-[#1D1B19]/15 bg-[#FAF8F5] px-4 py-3.5 font-sans text-[13px] leading-6 text-[#1D1B19] outline-none transition placeholder:text-[#9A918B] focus:border-[#D46726]"
                    />
                  </div>

                  {/* Submit */}

                  <button
                    type="submit"
                    className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 bg-[#D46726] px-6 py-4 font-sans text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#B9531E] sm:text-[13px]"
                  >
                    <Send
                      size={16}
                      strokeWidth={1.8}
                    />

                    Send Message

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>

                  <p className="text-center font-sans text-[10px] leading-5 text-[#8A817B]">
                    Clicking send will open your default email application
                    with your message prepared.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ======================================================
            MAP
        ====================================================== */}

        <section className="border-t border-[#1D1B19]/10">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Section label */}

              <div className="mb-7 flex items-center gap-4 sm:mb-8">
                <span className="h-px w-10 bg-[#D46726] sm:w-12" />

                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D46726] sm:text-[11px]">
                  Find Us
                </span>
              </div>

              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div>
                  <h2 className="font-serif text-[36px] leading-[1.08] tracking-[-0.02em] sm:text-[48px]">
                    Come say
                    <span className="text-[#D46726]"> ज्वजलपा।</span>
                  </h2>

                  <p className="mt-3 font-sans text-[14px] text-[#5D5049] sm:text-[15px]">
                    Paknajol, Kathmandu, Nepal
                  </p>
                </div>

                <a
                  href={CONTACT.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-fit shrink-0 items-center gap-2 border border-[#1D1B19]/15 px-5 py-3 font-sans text-[11px] font-semibold transition-all duration-300 hover:border-[#D46726] hover:text-[#D46726]"
                >
                  Open in Google Maps

                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>

              {/* Map */}

              <div className="mt-8 h-[320px] w-full overflow-hidden border border-[#1D1B19]/10 bg-[#F2ECE4] sm:mt-10 sm:h-[440px]">
                <iframe
                  title="Na Lisah Sanskritik Pucha location in Paknajol Kathmandu"
                  src="https://www.google.com/maps?q=Paknajol%2C%20Kathmandu%2C%20Nepal&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ======================================================
            INSTAGRAM
        ====================================================== */}

        <section className="bg-[#1D1B19] text-white">
          <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center"
            >
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <InstagramIcon size={18} />

                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D46726]">
                    Instagram
                  </span>
                </div>

                <h2 className="font-serif text-[34px] leading-tight tracking-[-0.02em] sm:text-[44px]">
                  Follow our
                  <span className="text-[#D46726]"> journey.</span>
                </h2>

                <p className="mt-3 max-w-xl font-sans text-[13px] leading-6 text-white/60 sm:text-[14px]">
                  Follow us for cultural activities, events, community
                  moments, and updates from Na Lisah.
                </p>
              </div>

              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit shrink-0 items-center gap-3 border border-white/20 px-5 py-3.5 font-sans text-[12px] font-semibold transition-all duration-300 hover:border-[#D46726] hover:bg-[#D46726]"
              >
                <InstagramIcon size={18} />

                Instagram

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}