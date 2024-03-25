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
    <ul className="flex flex-col justify-evenly items-center h-4/5 mt-4 laptop:flex-row">
      {links.map((link) => (
        <li key={link.id}>
          <Link
            href={link.href}
            className={`m-2 text-xl tablet:text-2xl laptop:text-3xl text-sky-200
            ${
              pathname === link.href
                ? "border-b border-sky-300 text-sky-400 "
                : null
            } `}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;