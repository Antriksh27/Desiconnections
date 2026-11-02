"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { Wordmark } from "@/components/brand/Wordmark";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ label: string; href: string; isCta?: boolean }>;
}

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const pathname = usePathname();
  const menuRef = React.useRef<HTMLDivElement>(null);
  const firstFocusableRef = React.useRef<HTMLButtonElement>(null);

  // Close when route changes
  React.useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Lock scroll and handle ESC key & focus trap
  React.useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus the close button when opened
    const timer = setTimeout(() => {
      firstFocusableRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  const linksWithoutCta = navLinks.filter((link) => !link.isCta);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-2xl flex flex-col justify-between px-6 sm:px-12 py-6 overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-hairline pb-4">
            <Wordmark size="sm" asLink={false} />
            <button
              ref={firstFocusableRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="w-11 h-11 rounded-full bg-midnight border border-hairline flex items-center justify-center text-ivory hover:text-gold hover:border-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links list */}
          <nav className="my-auto py-8">
            <ul className="space-y-6">
              {linksWithoutCta.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.05 * (idx + 1),
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`block font-display text-3xl sm:text-4xl transition-colors ${
                        isActive
                          ? "text-gold-light italic"
                          : "text-ivory hover:text-gold-light"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Footer CTA */}
          <div className="pt-6 border-t border-hairline space-y-4">
            <Button
              variant="primary"
              size="lg"
              href="/join"
              className="w-full"
            >
              Request Your Invite
            </Button>
            <div className="text-center text-xs text-mist">
              Private club for desi entertainment and connections.
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
