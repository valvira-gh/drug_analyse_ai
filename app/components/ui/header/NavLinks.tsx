"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export const links = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About", href: "/about" },
  { id: 3, label: "Drug Search", href: "/drug-search" },
];

const NavLinks: React.FC = () => {
  const pathname = usePathname();

  return (
    <ul className="flex justify-between mt-2">
      {links.map((link) => (
        <li key={link.id}>
          <Link
            href={link.href}
            className={`${
              pathname === link.href ? "border-b border-sky-600" : null
            } text-xl text-sky-300`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
