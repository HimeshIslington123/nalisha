import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
} from "lucide-react";

import {
  initiatives,
  getInitiative,
} from "@/data/initiatives";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return initiatives.map((initiative) => ({
    slug: initiative.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const initiative = getInitiative(slug);

  if (!initiative) {
    return {
      title: "Initiative Not Found | Na Lisah",
    };
  }

  return {
    title: `${initiative.title} | Na Lisah`,
    description: initiative.description,
  };
}

export default async function InitiativePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const initiative = getInitiative(slug);

  if (!initiative) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#FAF8F5] text-[#1C1A17]">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative overflow-hidden border-b border-[#DDC1B4] bg-[#1C1A17]">
          {/* subtle background glow */}
          <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#D46726]/[0.07] blur-3xl" />

          <div className="relative mx-auto max-w-[1360px] px-5 py-7 sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:px-16">
            {/* Back */}
            <Link
              href="/#what-we-do"
              className="
                group
                mb-10
                inline-flex
                items-center
                gap-2
                font-sans
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-white/55
                transition-colors
                duration-300
                hover:text-white

                sm:mb-14
              "
            >
              <ArrowLeft
                size={15}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />

              Back to What We Do
            </Link>

            {/* Hero grid */}
            <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
              {/* Text */}
              <div className="pb-2">
                {/* eyebrow */}
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-px w-10 bg-[#D46726] sm:w-12" />

                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D46726] sm:text-[11px]">
                    Na Lisah Initiative
                  </span>
                </div>

                {/* number */}
                <p className="mb-4 font-serif text-[15px] text-white/35">
                  {String(
                    initiatives.findIndex(
                      (item) => item.slug === initiative.slug
                    ) + 1
                  ).padStart(2, "0")}
                </p>

                <h1
                  className="
                    max-w-[800px]
                    font-serif
                    text-[42px]
                    font-medium
                    leading-[1.04]
                    tracking-[-0.025em]
                    text-[#FAF8F5]

                    sm:text-[56px]

                    md:text-[64px]

                    lg:text-[70px]

                    xl:text-[78px]
                  "
                >
                  {initiative.title}
                </h1>

                <p
                  className="
                    mt-7
                    max-w-[690px]
                    font-sans
                    text-[15px]
                    leading-7
                    text-white/65

                    sm:mt-8
                    sm:text-[17px]
                    sm:leading-8
                  "
                >
                  {initiative.fullDescription}
                </p>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F0E8]">
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />

                  {/* image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/35 via-transparent to-transparent" />

                  {/* orange accent */}
                  <div className="absolute left-0 top-0 h-[4px] w-20 bg-[#D46726] sm:w-28" />

                  {/* blue accent */}
                  <div className="absolute bottom-0 right-0 h-[4px] w-16 bg-[#4E76A3] sm:w-24" />
                </div>

                <p className="mt-3 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-white/35">
                  Culture • Community • Heritage
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#F5F0E8] py-16 sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#D46726]/[0.035] blur-3xl" />

          <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-14 lg:grid-cols-[1fr_330px] lg:gap-20">
              {/* =================================================
                  MAIN CONTENT
              ================================================= */}

              <div>
                <div className="mb-10">
                  <div className="flex items-center gap-4">
                    <span className="h-px w-10 bg-[#D46726]" />

                    <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D46726]">
                      About This Initiative
                    </span>
                  </div>
                </div>

                <div className="space-y-12">
                  {initiative.sections.map((section, index) => (
                    <article
                      key={section.title}
                      className="relative"
                    >
                      <div className="flex gap-5 sm:gap-7">
                        {/* Number */}
                        <div className="hidden shrink-0 pt-1 sm:block">
                          <span className="font-serif text-[15px] text-[#4E76A3]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <div className="max-w-[720px]">
                          <h2
                            className="
                              font-serif
                              text-[28px]
                              leading-[1.15]
                              tracking-[-0.01em]
                              text-[#1C1A17]

                              sm:text-[34px]
                            "
                          >
                            {section.title}
                          </h2>

                          <div className="mt-4 h-px w-10 bg-[#D46726]" />

                          <p
                            className="
                              mt-5
                              font-sans
                              text-[15px]
                              leading-7
                              text-[#574239]

                              sm:text-[16px]
                              sm:leading-8
                            "
                          >
                            {section.text}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* =================================================
                  ACTIVITIES
              ================================================= */}

              <aside className="h-fit lg:sticky lg:top-28">
                <div className="border border-[#DDC1B4] bg-[#FAF8F5]">
                  <div className="border-b border-[#DDC1B4] px-6 py-6 sm:px-7">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-7 bg-[#D46726]" />

                      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D46726]">
                        What We Do
                      </p>
                    </div>

                    <h2 className="mt-3 font-serif text-[26px] text-[#1C1A17]">
                      Our Activities
                    </h2>
                  </div>

                  <div className="px-6 py-5 sm:px-7 sm:py-6">
                    <div className="space-y-5">
                      {initiative.activities.map(
                        (activity, index) => (
                          <div
                            key={activity}
                            className="flex items-start gap-3"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-[#DDC1B4] bg-[#F5F0E8] text-[#D46726]">
                              <Check
                                size={12}
                                strokeWidth={2.2}
                              />
                            </span>

                            <p className="font-sans text-[13px] leading-6 text-[#574239]">
                              {activity}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="h-[3px] w-full bg-[#D46726]" />
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* =====================================================
            CULTURAL QUOTE
        ===================================================== */}

        <section className="border-t border-[#DDC1B4] bg-[#FAF8F5] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-[950px] px-5 text-center sm:px-8">
            <div className="mx-auto flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#D46726]" />

              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D46726]">
                Our Purpose
              </span>

              <span className="h-px w-10 bg-[#4E76A3]" />
            </div>

            <blockquote
              className="
                mt-7
                font-serif
                text-[29px]
                leading-[1.35]
                tracking-[-0.01em]
                text-[#1C1A17]

                sm:text-[38px]

                lg:text-[44px]
              "
            >
              “पुर्खाले दिएको सम्पदा, हाम्रो पहिचान;
              <span className="text-[#4E76A3]">
                {" "}
                यसलाई जोगाउनु हाम्रो पुस्ताको दायित्व।
              </span>
              ”
            </blockquote>
          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="border-t border-[#DDC1B4] bg-[#F5F0E8] py-20 sm:py-24">
          <div className="mx-auto max-w-[950px] px-5 text-center sm:px-8">
            <div className="mx-auto flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#D46726]" />

              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D46726]">
                Be Part of the Movement
              </span>

              <span className="h-px w-10 bg-[#4E76A3]" />
            </div>

            <h2
              className="
                mt-5
                font-serif
                text-[34px]
                leading-[1.1]
                tracking-[-0.02em]
                text-[#1C1A17]

                sm:text-[46px]
              "
            >
              Help us keep our
              <span className="text-[#D46726]"> culture alive.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-[650px] font-sans text-[15px] leading-7 text-[#574239] sm:text-[16px] sm:leading-8">
              Culture remains alive when people participate. Join us in
              learning, celebrating, practicing, and passing our traditions
              forward.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-3
                  bg-[#D46726]
                  px-6
                  py-3.5
                  font-sans
                  text-[12px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300

                  hover:bg-[#B9531E]
                  hover:shadow-[0_10px_30px_rgba(212,103,38,0.18)]
                "
              >
                Get Involved

                <ArrowRight
                  size={16}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/initiatives"
                className="
                  group
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-3
                  border
                  border-[#1C1A17]/20
                  px-6
                  py-3.5
                  font-sans
                  text-[12px]
                  font-semibold
                  text-[#1C1A17]
                  transition-all
                  duration-300

                  hover:border-[#4E76A3]
                  hover:text-[#4E76A3]
                "
              >
                Explore More Initiatives

                <ArrowRight
                  size={16}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}