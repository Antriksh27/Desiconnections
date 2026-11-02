"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/site.config";
import { Wordmark } from "@/components/brand/Wordmark";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = siteConfig.navLinks.filter((link) => !link.isCta);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-ink/85 backdrop-blur-md border-b border-hairline py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-5 border-b border-transparent"
        )}
      >
        <div className="max-w-[1280px] mx-auto px-6 sm:px-12 flex items-center justify-between">
          {/* Brand Wordmark Left */}
          <div className="shrink-0">
            <Wordmark size="sm" />
          </div>

          {/* Desktop Nav Links Center */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 lg:gap-8"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xs font-semibold tracking-wider uppercase transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded",
                    isActive
                      ? "text-gold-light"
                      : "text-mist hover:text-ivory"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA / Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              href="/join"
              className="hidden sm:inline-flex gap-1.5 shadow-md"
            >
              <span>Join Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile navigation"
              aria-expanded={isMobileMenuOpen}
              className="md:hidden w-11 h-11 rounded-full bg-midnight/80 border border-hairline flex items-center justify-center text-ivory hover:text-gold hover:border-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu Sheet */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={siteConfig.navLinks}
      />
    </>
  );
}
