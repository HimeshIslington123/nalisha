"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/aboutus",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "Contact Us",
    href: "/contactus",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav
        className="
          w-full
          border-b
          border-[#1d1b18]/10
          bg-[#fff8f3]/95
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto
            flex
            h-[74px]
            max-w-[1360px]
            items-center
            justify-between
            px-4

            sm:h-[80px]
            sm:px-6

            lg:px-10

            xl:px-12
          "
        >
          {/* =====================================================
              LOGO
          ===================================================== */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="
              group
              flex
              min-w-0
              items-center
              gap-3
            "
          >
            {/* Logo */}
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                overflow-hidden

                sm:h-12
                sm:w-12
              "
            >
              <img
                src="/logo.webp"
                alt="Na Lisah Sanskritik Pucha"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Brand */}
            <div className="min-w-0">
              <div
                className="
                  font-serif
                  text-[18px]
                  font-semibold
                  leading-none
                  tracking-[-0.01em]
                  text-[#1d1b18]

                  sm:text-[21px]
                "
              >
                नः लिसः
              </div>

              <div
                className="
                  mt-1
                  font-sans
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#9B4000]

                  sm:text-[9px]
                  sm:tracking-[0.18em]
                "
              >
                Na Lisah Sanskritik Pucha
              </div>
            </div>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}
          <div className="hidden items-center lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  group
                  relative
                  flex
                  items-center
                  px-3.5
                  py-3
                  font-sans
                  text-[13px]
                  font-semibold
                  text-[#574239]
                  transition-colors
                  duration-200

                  xl:px-4
                  xl:text-[14px]

                  hover:text-[#9B4000]
                "
              >
                <span>{item.name}</span>

                {/* Editorial underline */}
                <span
                  className="
                    absolute
                    bottom-[5px]
                    left-4
                    right-4
                    h-px
                    origin-left
                    scale-x-0
                    bg-[#D46726]
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />
              </Link>
            ))}
          </div>

          {/* =====================================================
              DESKTOP CTA
          ===================================================== */}
          <div className="hidden lg:flex">
            <Link
              href="/contactus"
              className="
                group
                flex
                items-center
                gap-2
                rounded
                bg-[#D46726]
                px-4
                py-2.5
                font-sans
                text-[13px]
                font-semibold
                text-[#fff8f3]
                transition-all
                duration-300

                hover:bg-[#E27D38]
                hover:shadow-[0_6px_18px_rgba(28,26,23,0.12)]
              "
            >
              <span>Join Our Community</span>

              <ArrowRight
                size={15}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="
              ml-3
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded
              border
              border-[#1d1b18]/15
              text-[#1d1b18]
              transition-all
              duration-200

              hover:border-[#D46726]
              hover:text-[#9B4000]

              lg:hidden
            "
          >
            {mobileOpen ? (
              <X
                size={21}
                strokeWidth={1.7}
              />
            ) : (
              <Menu
                size={21}
                strokeWidth={1.7}
              />
            )}
          </button>
        </div>

        {/* =======================================================
            MOBILE MENU
        ======================================================= */}
        <div
          className={`
            overflow-hidden
            border-t
            border-[#1d1b18]/10
            bg-[#fff8f3]
            transition-all
            duration-300
            lg:hidden

            ${
              mobileOpen
                ? "max-h-[650px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              mx-auto
              max-w-[1360px]
              px-4
              pb-5
              pt-2

              sm:px-6
            "
          >
            {/* Mobile Navigation */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[#1d1b18]/[0.07]
                  py-3.5
                  font-sans
                  text-[14px]
                  font-semibold
                  text-[#574239]
                  transition-colors
                  duration-200

                  hover:text-[#9B4000]
                "
              >
                <span>{item.name}</span>

                <ArrowRight
                  size={16}
                  strokeWidth={1.6}
                  className="
                    text-[#C29B38]
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                />
              </Link>
            ))}

            {/* =================================================
                MOBILE CTA
            ================================================= */}
            <Link
              href="/contactus"
              onClick={() => setMobileOpen(false)}
              className="
                group
                mt-4
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded
                bg-[#D46726]
                px-5
                py-3.5
                font-sans
                text-sm
                font-semibold
                text-[#fff8f3]
                transition-all
                duration-200

                hover:bg-[#E27D38]
                hover:shadow-[0_6px_18px_rgba(28,26,23,0.12)]
              "
            >
              <span>Join Our Community</span>

              <ArrowRight
                size={16}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}