
"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
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
    <footer className="relative overflow-hidden bg-[#1C1A17] text-[#FAF8F5]">

      {/* =======================================================
          TOP ACCENT
      ======================================================= */}
      <div className="h-[3px] w-full bg-[#D46726]" />

      {/* Subtle editorial background detail */}
      <div className="pointer-events-none absolute -right-24 -top-24 hidden h-72 w-72 rounded-full border border-[#C29B38]/10 lg:block" />
      <div className="pointer-events-none absolute -right-12 -top-12 hidden h-48 w-48 rounded-full border border-[#C29B38]/10 lg:block" />

      {/* =======================================================
          DESKTOP FOOTER
      ======================================================= */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-[1360px] px-12">

          <div className="grid gap-14 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

            {/* =================================================
                BRAND
            ================================================= */}
            <div>
              <Link
                href="/"
                className="group inline-flex items-center gap-4"
              >
                {/* Logo */}
                <div className="flex h-[62px] w-[62px] items-center justify-center overflow-hidden rounded-[4px] bg-[#FAF8F5] p-1">
                  <img
                    src="/logo.webp"
                    alt="Na Lisah Sanskritik Pucha"
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Brand Name */}
                <div>
                  <div className="font-serif text-[25px] leading-none text-[#FAF8F5]">
                    नः लिसः
                  </div>

                  <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#D46726]">
                    Na Lisah Sanskritik Pucha
                  </div>
                </div>
              </Link>

              <p className="mt-7 max-w-[410px] font-sans text-[14px] leading-7 text-[#FAF8F5]/60">
                A community dedicated to preserving, practicing, and
                promoting Newari culture, traditional music, festivals,
                instruments, heritage, and ancestral traditions.
              </p>

              {/* Social */}
              <div className="mt-7 flex items-center gap-2.5">
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
            </div>

            {/* =================================================
                QUICK LINKS
            ================================================= */}
            <div>
              <FooterHeading title="Explore" />

              <ul className="mt-7 space-y-3.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 font-sans text-[14px] text-[#FAF8F5]/60 transition-colors duration-300 hover:text-[#D46726]"
                    >
                      {link.name}

                      <ArrowUpRight
                        size={12}
                        className="translate-y-[1px] opacity-0 transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* =================================================
                CULTURE
            ================================================= */}
            <div>
              <FooterHeading title="Our Heritage" />

              <ul className="mt-7 space-y-3.5">
                {cultureLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 font-sans text-[14px] text-[#FAF8F5]/60 transition-colors duration-300 hover:text-[#D46726]"
                    >
                      {link.name}

                      <ArrowUpRight
                        size={12}
                        className="translate-y-[1px] opacity-0 transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* =================================================
                CONTACT
            ================================================= */}
            <div>
              <FooterHeading title="Get In Touch" />

              <div className="mt-7 space-y-5">

                {/* Location */}
                <ContactItem
                  icon={<MapPin size={16} />}
                  label="Location"
                >
                  <p className="text-[14px] leading-6 text-[#FAF8F5]/65">
                    Kathmandu, Nepal
                  </p>
                </ContactItem>

                {/* Phone */}
                <ContactItem
                  icon={<Phone size={16} />}
                  label="Phone"
                >
                  <a
                    href="tel:+9770000000000"
                    className="text-[14px] text-[#FAF8F5]/65 transition-colors hover:text-[#D46726]"
                  >
                    +977 98XXXXXXXX
                  </a>
                </ContactItem>

                {/* Email */}
                <ContactItem
                  icon={<Mail size={16} />}
                  label="Email"
                >
                  <a
                    href="mailto:info@nilashanepal.com"
                    className="break-all text-[14px] text-[#FAF8F5]/65 transition-colors hover:text-[#D46726]"
                  >
                    info@nilashanepal.com
                  </a>
                </ContactItem>

              </div>
            </div>
          </div>

          {/* =================================================
              DESKTOP BOTTOM
          ================================================= */}
          <div className="flex items-center justify-between border-t border-[#FAF8F5]/10 py-5">

            <p className="font-sans text-[12px] text-[#FAF8F5]/40">
              © {new Date().getFullYear()} Na Lisah Sanskritik Pucha.
              All rights reserved.
            </p>

            <p className="font-serif text-[12px] italic text-[#C29B38]/70">
              Preserving heritage. Carrying tradition forward.
            </p>

          </div>
        </div>
      </div>

      {/* =======================================================
          MOBILE FOOTER
      ======================================================= */}
      <div className="block lg:hidden">
        <div className="px-5 py-9 sm:px-8">

          {/* Brand */}
          <div className="text-center">

            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-[4px] bg-[#FAF8F5] p-1">
                <img
                  src="/logo.webp"
                  alt="Na Lisah Sanskritik Pucha"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="text-left">
                <div className="font-serif text-[21px] leading-none text-[#FAF8F5]">
                  नः लिसः
                </div>

                <div className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.18em] text-[#D46726]">
                  Na Lisah Sanskritik Pucha
                </div>
              </div>
            </Link>

          </div>

          {/* Short description */}
          <p className="mx-auto mt-5 max-w-[420px] text-center font-sans text-[12.5px] leading-6 text-[#FAF8F5]/55">
            Preserving Newari culture, traditional music,
            festivals, heritage, and ancestral traditions
            for generations to come.
          </p>

          {/* Social */}
          <div className="mt-6 flex justify-center gap-2">
            <SocialIcon
              href="#"
              label="Facebook"
              icon={<FaFacebookF size={14} />}
              small
            />

            <SocialIcon
              href="#"
              label="Instagram"
              icon={<FaInstagram size={14} />}
              small
            />

            <SocialIcon
              href="#"
              label="YouTube"
              icon={<FaYoutube size={14} />}
              small
            />
          </div>

          {/* Simple mobile navigation */}
          <nav className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans text-[12px] text-[#FAF8F5]/55 transition-colors hover:text-[#D46726]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="mt-7 flex flex-col items-center gap-2.5">

            <a
              href="mailto:info@nilashanepal.com"
              className="flex items-center gap-2 text-[11.5px] text-[#FAF8F5]/50 transition-colors hover:text-[#D46726]"
            >
              <Mail
                size={13}
                className="text-[#C29B38]"
              />
              info@nilashanepal.com
            </a>

            <a
              href="tel:+9770000000000"
              className="flex items-center gap-2 text-[11.5px] text-[#FAF8F5]/50 transition-colors hover:text-[#D46726]"
            >
              <Phone
                size={13}
                className="text-[#C29B38]"
              />
              +977 98XXXXXXXX
            </a>

            <div className="flex items-center gap-2 text-[11.5px] text-[#FAF8F5]/50">
              <MapPin
                size={13}
                className="text-[#C29B38]"
              />
              Kathmandu, Nepal
            </div>

          </div>

          {/* Copyright */}
          <div className="mt-7 border-t border-[#FAF8F5]/10 pt-5 text-center">
            <p className="font-sans text-[10.5px] text-[#FAF8F5]/35">
              © {new Date().getFullYear()} Na Lisah Sanskritik Pucha.
              All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   FOOTER HEADING
============================================================ */

function FooterHeading({
  title,
}: {
  title: string;
}) {
  return (
    <div>
      <h3 className="font-serif text-[18px] font-medium text-[#FAF8F5]">
        {title}
      </h3>

      <div className="mt-3 h-[2px] w-8 bg-[#D46726]" />
    </div>
  );
}

/* ============================================================
   CONTACT ITEM
============================================================ */

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">

      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] border border-[#FAF8F5]/10 text-[#C29B38]">
        {icon}
      </div>

      <div>
        <p className="font-sans text-[10px] uppercase tracking-[0.16em] text-[#FAF8F5]/35">
          {label}
        </p>

        <div className="mt-1.5">
          {children}
        </div>
      </div>

    </div>
  );
}

/* ============================================================
   SOCIAL ICON
============================================================ */

function SocialIcon({
  href,
  label,
  icon,
  small = false,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  small?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={`flex items-center justify-center rounded-[4px] border border-[#FAF8F5]/10 text-[#FAF8F5]/55 transition-all duration-300 hover:border-[#D46726]/50 hover:bg-[#D46726] hover:text-[#FAF8F5] ${
        small ? "h-8 w-8" : "h-9 w-9"
      }`}
    >
      {icon}
    </Link>
  );
}

