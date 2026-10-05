"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Heart,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const cultureLinks = [
  { name: "Our Culture", href: "/culture" },
  { name: "Dhime Music", href: "/music" },
  { name: "Jatras & Festivals", href: "/events" },
  { name: "Our Community", href: "/community" },
  { name: "Gallery", href: "/gallery" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#082F52] text-white">

      {/* Decorative orange line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#0B4F8A] via-[#F28C28] to-[#0B4F8A]" />

      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/5" />

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-12">

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.25fr] lg:gap-10">

          {/* ================= BRAND ================= */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg bg-white p-1">
                <img
                  src="/logo.webp"
                  alt="Nilasha Nepal"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <div className="text-[24px] font-bold leading-none">
                  नः लिसः
                </div>

                <div className="mt-1 text-[12px] font-medium tracking-[0.2em] text-[#F28C28]">
                  NILASHA NEPAL
                </div>
              </div>
            </Link>

            <p className="mt-6 max-w-[400px] text-[15px] leading-7 text-white/65">
              A community dedicated to preserving, practicing, and promoting
              Newari culture, traditional music, festivals, instruments,
              heritage, and community participation.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">
              <SocialIcon
                href="#"
                label="Facebook"
                icon={<FaFacebookF size={18} />}
              />

              <SocialIcon
                href="#"
                label="Instagram"
                icon={<FaInstagram size={18} />}
              />

              <SocialIcon
                href="#"
                label="YouTube"
                icon={<FaYoutube size={18} />}
              />
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="relative inline-block text-[16px] font-semibold">
              Quick Links

              <span className="absolute -bottom-2 left-0 h-[2px] w-7 bg-[#F28C28]" />
            </h3>

            <ul className="mt-7 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex w-fit items-center gap-2 text-[14px] text-white/65 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-[1px] w-0 bg-[#F28C28] transition-all duration-300 group-hover:w-3" />

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CULTURE ================= */}
          <div>
            <h3 className="relative inline-block text-[16px] font-semibold">
              Explore

              <span className="absolute -bottom-2 left-0 h-[2px] w-7 bg-[#F28C28]" />
            </h3>

            <ul className="mt-7 space-y-3">
              {cultureLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex w-fit items-center gap-2 text-[14px] text-white/65 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-[1px] w-0 bg-[#F28C28] transition-all duration-300 group-hover:w-3" />

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h3 className="relative inline-block text-[16px] font-semibold">
              Get In Touch

              <span className="absolute -bottom-2 left-0 h-[2px] w-7 bg-[#F28C28]" />
            </h3>

            <div className="mt-7 space-y-5">

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white/5 text-[#F28C28]">
                  <MapPin size={17} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Location
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/70">
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white/5 text-[#F28C28]">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Phone
                  </p>

                  <a
                    href="tel:+9770000000000"
                    className="mt-1 block text-sm text-white/70 transition-colors hover:text-white"
                  >
                    +977 98XXXXXXXX
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white/5 text-[#F28C28]">
                  <Mail size={17} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Email
                  </p>

                  <a
                    href="mailto:info@nilashanepal.com"
                    className="mt-1 block text-sm text-white/70 transition-colors hover:text-white"
                  >
                    info@nilashanepal.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= COMMUNITY CTA ================= */}
        <div className="border-y border-white/10 py-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">

            <div>
              <p className="text-lg font-medium">
                Help us keep our culture alive.
              </p>

              <p className="mt-1 text-sm text-white/50">
                Participate, learn, celebrate, and pass it forward.
              </p>
            </div>

            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-md bg-[#F28C28] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#e77d17] hover:shadow-lg hover:shadow-orange-900/20"
            >
              Join Our Community

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col gap-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">

          <p className="text-white/45">
            © {new Date().getFullYear()} Nilasha Nepal. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-white/45 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-white/45 transition-colors hover:text-white"
            >
              Terms
            </Link>

            <p className="flex items-center gap-1 text-white/45">
              Made with
              <Heart
                size={13}
                className="fill-[#F28C28] text-[#F28C28]"
              />
              in Nepal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ================= SOCIAL ICON ================= */

function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-[#F28C28] hover:bg-[#F28C28] hover:text-white"
    >
      {icon}
    </Link>
  );
}