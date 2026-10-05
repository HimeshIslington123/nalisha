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
      title: "Initiative Not Found | Nilasha Nepal",
    };
  }

  return {
    title: `${initiative.title} | Nilasha Nepal`,
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

  const Icon = initiative.icon;

  return (<>
  <Navbar></Navbar>
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#082F52]">

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/5" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/5" />

        <div className="mx-auto max-w-[1500px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

          <Link
            href="/#what-we-do"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-[#F28C28]"
          >
            <ArrowLeft size={17} />
            Back to What We Do
          </Link>

          <div className="max-w-[900px]">

            {/* Icon */}
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-lg bg-[#DCECF6] text-[#0B4F8A]">
              <Icon size={30} strokeWidth={1.8} />
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#F28C28]">
              Core Initiative
            </p>

            <h1 className="font-serif text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
              {initiative.title}
            </h1>

            <p className="mt-7 max-w-[800px] text-lg leading-8 text-white/70 sm:text-xl">
              {initiative.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="bg-[#F8F7FC] py-20 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">

          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">

            {/* Main content */}
            <div className="space-y-10">
              {initiative.sections.map((section) => (
                <article key={section.title}>
                  <h2 className="font-serif text-3xl font-semibold text-[#17243B]">
                    {section.title}
                  </h2>

                  <div className="mt-4 h-[2px] w-10 bg-[#F28C28]" />

                  <p className="mt-5 text-base leading-8 text-[#596574] sm:text-lg">
                    {section.text}
                  </p>
                </article>
              ))}
            </div>

            {/* Activities */}
            <aside className="h-fit rounded-xl border border-[#E6E8EC] bg-white p-7 shadow-sm sm:p-8">

              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0B4F8A]">
                What We Do
              </p>

              <h2 className="mt-3 font-serif text-2xl font-semibold text-[#17243B]">
                Our Activities
              </h2>

              <div className="mt-6 space-y-4">
                {initiative.activities.map((activity) => (
                  <div
                    key={activity}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DCECF6] text-[#0B4F8A]">
                      <Check size={13} strokeWidth={2.5} />
                    </div>

                    <p className="text-sm leading-6 text-[#596574]">
                      {activity}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1000px] px-6 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0B4F8A]">
            Be Part of the Movement
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#17243B] sm:text-4xl">
            Help us keep our culture alive.
          </h2>

          <p className="mx-auto mt-4 max-w-[650px] text-base leading-7 text-[#66717F]">
            Culture remains alive when people participate. Join us in
            learning, celebrating, practicing, and passing our traditions
            forward.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0B4F8A] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#F28C28]"
            >
              Get Involved
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/initiatives"
              className="inline-flex items-center justify-center rounded-md border border-[#0B4F8A]/20 px-6 py-3.5 text-sm font-semibold text-[#0B4F8A] transition-all hover:border-[#F28C28] hover:text-[#F28C28]"
            >
              Explore More Initiatives
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer></Footer>
    </>
  );
}