"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav, portalNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const close = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" onClick={close} className="flex items-center gap-2" aria-label={`${siteConfig.name} home`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-navy text-sm font-bold text-accent">
            AM
          </span>
          <span className="text-sm font-bold leading-tight text-navy sm:text-base">
            AM TRADE
            <br className="sm:hidden" /> SUPPLIES LTD
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-md px-3 py-2 font-medium hover:text-accent-dark ${isActive(item.href) ? "text-accent-dark" : "text-navy"}`}
                >
                  {item.label}
                  <span aria-hidden="true" className="text-xs">▾</span>
                </Link>
                <div className="invisible absolute left-0 top-full w-64 rounded-lg border border-slate-200 bg-white py-2 opacity-0 shadow-lg transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-navy hover:bg-surface hover:text-accent-dark"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 font-medium hover:text-accent-dark ${isActive(item.href) ? "text-accent-dark" : "text-navy"}`}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href={portalNav.href}
            className="ml-2 rounded-md bg-accent px-4 py-2 font-semibold text-navy hover:bg-accent-hover"
          >
            {portalNav.label}
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-slate-200 bg-white px-4 pb-6 pt-2 lg:hidden">
          <ul className="space-y-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left font-medium text-navy"
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen((v) => !v)}
                    >
                      {item.label}
                      <span aria-hidden="true">{servicesOpen ? "−" : "+"}</span>
                    </button>
                    {servicesOpen && (
                      <ul className="ml-3 space-y-1 border-l-2 border-accent pl-3">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} onClick={close} className="block rounded-md px-3 py-2 text-slate-700">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.href} onClick={close} className="block rounded-md px-3 py-3 font-medium text-navy">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link
            href={portalNav.href}
            onClick={close}
            className="mt-4 block rounded-md bg-accent px-4 py-3 text-center font-semibold text-navy"
          >
            {portalNav.label}
          </Link>
        </nav>
      )}
    </header>
  );
}
