"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type NavbarProps = {
  forceDark?: boolean;
};

export default function Navbar({ forceDark = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (forceDark) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceDark]);

  const navbarStyle = forceDark
    ? "bg-black text-white"
    : scrolled
    ? "bg-[#f8f5f0] shadow-md text-black"
    : "bg-transparent text-white";

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navbarStyle}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 h-24">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Jatara Indian Kitchen"
            className="h-42 w-auto object-contain"
          />
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex gap-10 text-sm uppercase tracking-wider">
          <NavLink href="/" label="Home" />
          <NavLink href="/menu" label="Menu" />
          <NavLink href="/hours-location" label="Hours & Location" />
          <NavLink href="/contact" label="Contact" />
          <NavLink href="/catering" label="Catering" />
          <NavLink href="/gallery" label="Gallery" />
          <NavLink href="/private-events" label="Private Events" />
        </div>

        {/* CTA */}
        <a
          href="https://order.toasttab.com/online/mana-adda-indian-kitchen-2361-e-university-dr "
          target="_blank"
          rel="noopener noreferrer"
              className="bg-[#e67e22] text-white px-6 py-3 uppercase tracking-wider text-sm hover:bg-[#cf6d15] transition duration-300"
>
  Order Online
</a>

      </div>
    </div>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="relative group cursor-pointer">
      <span>{label}</span>
      <div className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#e67e22] transition-all duration-300 group-hover:w-full"></div>
    </Link>
  );
}
