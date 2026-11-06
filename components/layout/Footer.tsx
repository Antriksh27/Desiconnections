"use client";

import * as React from "react";
import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";
import { siteConfig } from "@/site.config";
import { Wordmark } from "@/components/brand/Wordmark";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0B0710] border-t border-hairline pt-16 pb-12 text-mist relative overflow-hidden">
      {/* Soft background ambient stage glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-stage-glow opacity-25 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 space-y-12 relative z-10">
        
        {/* Top Section: Wordmark, Mission & Direct Concierge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start justify-between">
          <div className="lg:col-span-6 space-y-4">
            <Wordmark size="md" />
            <p className="body-base text-mist max-w-md text-sm leading-relaxed">
              Connecting communities, empowering growth. A private club for premier South Asian entertainment, North American business referrals, and expert energy advisory operated by Switch n Save LLC.
            </p>
            <div className="pt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-wider text-gold-light">
              <span>Columbus (Flagship Hub)</span>
              <span>&bull;</span>
              <span>USA &amp; Canada Network</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-start lg:justify-end gap-6 bg-[#140C1F] border border-hairline p-6 rounded-2xl">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-gold-light block">
                COMMUNITY CONCIERGE &bull; MR. KETAN PATEL
              </span>
              <p className="text-xs text-ivory">
                Have questions or need to verify a utility bill? Reach out directly.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:6147722247"
                className="px-4 py-2.5 rounded-full bg-gold text-ink font-bold text-xs uppercase tracking-wider hover:bg-gold-light transition-all flex items-center gap-1.5 shadow-md"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>614-772-2247</span>
              </a>
              <a
                href="https://wa.me/16147722247"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-white/10 text-ivory hover:bg-white/20 border border-hairline-strong font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-volt" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section: Simple Navigation Links & Social Media Icons */}
        <div className="pt-8 border-t border-hairline flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Simple Menu Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-mist">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <Link href="/events" className="hover:text-gold transition-colors">
              Events
            </Link>
            <Link href="/stars" className="hover:text-gold transition-colors">
              Bollywood Stars
            </Link>
            <Link href="/deals" className="hover:text-gold transition-colors">
              Deals
            </Link>
            <Link href="/membership" className="hover:text-gold transition-colors">
              Membership
            </Link>
            <Link href="/about" className="hover:text-gold transition-colors">
              About
            </Link>
            <Link href="/about#contact" className="hover:text-gold transition-colors">
              Contact
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 text-mist">
            <a
              href="https://instagram.com/thedesiconnections"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/5 border border-hairline flex items-center justify-center hover:text-gold hover:border-gold/40 transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com/thedesiconnections"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/5 border border-hairline flex items-center justify-center hover:text-gold hover:border-gold/40 transition-colors"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com/@thedesiconnections"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-white/5 border border-hairline flex items-center justify-center hover:text-gold hover:border-gold/40 transition-colors"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/company/thedesiconnections"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/5 border border-hairline flex items-center justify-center hover:text-gold hover:border-gold/40 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Section: Legal & Terms */}
        <div className="pt-6 border-t border-hairline/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div>
            &copy; 2026 {siteConfig.brandName}. Operated by Switch n Save LLC. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-mist transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-mist transition-colors">
              Terms of Service
            </Link>
            <Link href="/styleguide" className="text-gold-light hover:underline transition-colors">
              Design System
            </Link>
          </div>

          <p className="text-[11px] text-muted/90 text-center md:text-right">
            Switch n Save offers are provided by licensed energy partners. Terms apply.
          </p>
        </div>

      </div>
    </footer>
  );
}
