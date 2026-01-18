"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/books" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined" || !document.body) return;

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      if (typeof document !== "undefined" && document.body) {
        document.body.style.overflow = "";
      }
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
        <div className={`${styles.navSpacer} ${isScrolled ? styles.navSpacerActive : ""}`} />
      <div className={`${styles.navWrapper} ${isScrolled ? styles.navWrapperScrolled : ""}`}>
        <nav
          className={styles.nav}
          aria-label="Main navigation"
        >
          <div className={`${styles.navContainer} ${isScrolled ? styles.navContainerScrolled : ""}`}>
            <Link href="/" className={styles.logo}>
              Girimane Books
            </Link>

            {/* Desktop Navigation */}
            <ul className={styles.desktopNav}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger Button */}
            <button
              className={`${styles.hamburger} ${
                isMobileMenuOpen ? styles.hamburgerOpen : ""
              }`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          <div
            className={styles.mobileOverlay}
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          <div className={styles.mobileMenu}>
            <ul className={styles.mobileNav}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={styles.mobileNavLink}
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

