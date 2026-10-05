"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Users,
  Images,
  CalendarDays,
  Phone,
  Newspaper,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "About Us",
    href: "/about",
    icon: Users,
  },
  {
    name: "Gallery",
    href: "/gallery",
    icon: Images,
  },
  {
    name: "Events",
    href: "/events",
    icon: CalendarDays,
  },
  {
    name: "Contact Us",
    href: "/contact",
    icon: Phone,
  },
  {
    name: "Blog",
    href: "/blog",
    icon: Newspaper,
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
   

      <nav className="sticky top-0 z-50 w-full border-b border-[#0B4F8A]/10 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex h-[82px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* ================= LOGO ================= */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            onClick={() => setMobileOpen(false)}
          >
            {/* Replace with your actual logo */}
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden">
              <img
                src="/logo.webp"
                alt="Nilasha Nepal"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="hidden sm:block">
              <div className="text-[22px] font-bold leading-none tracking-tight text-[#0B4F8A]">
                नः लिसः
              </div>

              <div className="mt-1 text-[13px] font-medium tracking-[0.18em] text-[#F28C28]">
                NILASHA NEPAL
              </div>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative flex items-center gap-2 px-4 py-3 text-[15px] font-medium text-[#173B5E] transition-all duration-300"
                >
                  <Icon
                    size={17}
                    strokeWidth={1.8}
                    className="transition-colors duration-300 group-hover:text-[#F28C28]"
                  />

                  <span>{item.name}</span>

                  {/* Hover underline */}
                  <span className="absolute bottom-1 left-4 right-4 h-[2px] origin-left scale-x-0 bg-[#F28C28] transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              );
            })}
          </div>

          {/* ================= DESKTOP CTA ================= */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-md bg-[#0B4F8A] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#F28C28] hover:shadow-md"
            >
              <CalendarDays size={17} />

              <span>Join Our Community</span>
            </Link>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-[#0B4F8A]/15 text-[#0B4F8A] transition-all hover:border-[#F28C28] hover:text-[#F28C28] lg:hidden"
          >
            {mobileOpen ? (
              <X size={25} strokeWidth={1.8} />
            ) : (
              <Menu size={25} strokeWidth={1.8} />
            )}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`overflow-hidden border-t border-[#0B4F8A]/10 bg-white transition-all duration-300 lg:hidden ${
            mobileOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-[1500px] px-5 pb-5 pt-3 sm:px-8">

            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between border-b border-gray-100 py-4 text-[15px] font-medium text-[#173B5E] transition-colors hover:text-[#F28C28]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#0B4F8A]/5">
                      <Icon
                        size={18}
                        strokeWidth={1.8}
                        className="text-[#0B4F8A]"
                      />
                    </div>

                    <span>{item.name}</span>
                  </div>

                  <span className="text-[#F28C28]">→</span>
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#0B4F8A] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#F28C28]"
            >
              <CalendarDays size={18} />
              Join Our Community
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}