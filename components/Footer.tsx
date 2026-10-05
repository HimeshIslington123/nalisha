"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

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

const mobileLinks = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#082F52] text-white">

      {/* Top Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[#0B4F8A] via-[#F28C28] to-[#0B4F8A]" />

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-32 -top-32 hidden h-80 w-80 rounded-full border border-white/5 lg:block" />
      <div className="pointer-events-none absolute -right-20 -top-20 hidden h-56 w-56 rounded-full border border-white/5 lg:block" />

      {/* =======================================================
          DESKTOP FOOTER
      ======================================================= */}

      <div className="hidden lg:block">
        <div className="relative mx-auto max-w-[1500px] px-12">

          <div className="grid gap-10 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1.25fr]">

            {/* BRAND */}
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

            {/* QUICK LINKS */}
            <div>
              <FooterHeading title="Quick Links" />

              <ul className="mt-7 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-white/65 transition-opacity duration-300 hover:opacity-75"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* EXPLORE */}
            <div>
              <FooterHeading title="Explore" />

              <ul className="mt-7 space-y-3">
                {cultureLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-white/65 transition-opacity duration-300 hover:opacity-75"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <FooterHeading title="Get In Touch" />

              <div className="mt-7 space-y-5">

                {/* Location */}
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
                      className="mt-1 block text-sm text-white/70 transition-opacity hover:opacity-75"
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
                      className="mt-1 block text-sm text-white/70 transition-opacity hover:opacity-75"
                    >
                      info@nilashanepal.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* DESKTOP COPYRIGHT */}
          <div className="border-t border-white/10 py-5 text-center">
            <p className="text-sm text-white/45">
              © {new Date().getFullYear()} Nilasha Nepal. All rights reserved.
            </p>
          </div>

        </div>
      </div>

      {/* =======================================================
          MOBILE FOOTER
      ======================================================= */}

      <div className="block lg:hidden">
        <div className="relative px-5 py-9 sm:px-8">

          {/* LOGO */}
          <div className="flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg bg-white p-1">
                <img
                  src="/logo.webp"
                  alt="Nilasha Nepal"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="text-left">
                <div className="text-[21px] font-bold leading-none">
                  नः लिसः
                </div>

                <div className="mt-1 text-[10px] font-medium tracking-[0.18em] text-[#F28C28]">
                  NILASHA NEPAL
                </div>
              </div>
            </Link>
          </div>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-5 max-w-[500px] text-center text-[13px] leading-6 text-white/60">
            A community dedicated to preserving, practicing, and promoting
            Newari culture, traditional music, festivals, instruments,
            heritage, and community participation.
          </p>

          {/* SOCIAL ICONS */}
          <div className="mt-5 flex justify-center gap-2.5">
            <SocialIcon
              href="#"
              label="Facebook"
              icon={<FaFacebookF size={15} />}
            />

            <SocialIcon
              href="#"
              label="Instagram"
              icon={<FaInstagram size={15} />}
            />

            <SocialIcon
              href="#"
              label="YouTube"
              icon={<FaYoutube size={15} />}
            />
          </div>

          {/* MOBILE NAVIGATION */}
          <nav className="mt-7 flex items-center justify-center gap-5 text-[13px] text-white/65">
            {mobileLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition-opacity duration-300 hover:opacity-75"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CONTACT */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 text-[12px] text-white/55 sm:flex-row sm:gap-6">

            <a
              href="mailto:info@nilashanepal.com"
              className="flex items-center gap-2 transition-opacity hover:opacity-75"
            >
              <Mail
                size={14}
                className="text-[#F28C28]"
              />
              info@nilashanepal.com
            </a>

            <a
              href="tel:+9770000000000"
              className="flex items-center gap-2 transition-opacity hover:opacity-75"
            >
              <Phone
                size={14}
                className="text-[#F28C28]"
              />
              +977 98XXXXXXXX
            </a>

          </div>

          {/* COPYRIGHT */}
          <div className="mt-7 border-t border-white/10 pt-5 text-center">
            <p className="text-[11px] text-white/40">
              © {new Date().getFullYear()} Nilasha Nepal. All rights reserved.
            </p>
          </div>

        </div>
      </div>

    </footer>
  );
}

/* =======================================================
   FOOTER HEADING
======================================================= */

function FooterHeading({
  title,
}: {
  title: string;
}) {
  return (
    <h3 className="relative inline-block text-[16px] font-semibold">
      {title}

      <span className="absolute -bottom-2 left-0 h-[2px] w-7 bg-[#F28C28]" />
    </h3>
  );
}

/* =======================================================
   SOCIAL ICON
======================================================= */

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
      className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/60 transition-opacity duration-300 hover:opacity-75"
    >
      {icon}
    </Link>
  );
}