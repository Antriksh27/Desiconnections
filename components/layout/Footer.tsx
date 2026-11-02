"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import { Wordmark } from "@/components/brand/Wordmark";
import { Button } from "@/components/ui/Button";

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = React.useState("");
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
    }
  };

  return (
    <footer className="bg-midnight/90 border-t border-hairline pt-16 pb-12 text-mist relative overflow-hidden">
      {/* Soft background ambient stage glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-stage-glow opacity-30 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 space-y-16 relative z-10">
        {/* Top Section: Wordmark & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start justify-between">
          <div className="lg:col-span-6 space-y-4">
            <Wordmark size="lg" />
            <p className="body-base text-mist max-w-md">
              The private club for desi entertainment, meaningful professional connections, and exclusive member benefits across the United States.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-wider text-gold-light">
              <span>New York</span>
              <span>&bull;</span>
              <span>San Francisco</span>
              <span>&bull;</span>
              <span>Los Angeles</span>
              <span>&bull;</span>
              <span>Chicago</span>
              <span>&bull;</span>
              <span>Dallas</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 bg-plum/40 border border-hairline p-6 sm:p-7 rounded-3xl">
            <span className="label-caps text-gold-light">Member Dispatch</span>
            <h3 className="text-xl font-display text-ivory">Stay ahead of the next tour</h3>
            <p className="text-xs text-mist">
              Private presale announcements and secret venue drops delivered straight to your inbox.
            </p>

            {isSubscribed ? (
              <div className="p-4 rounded-2xl bg-midnight border border-gold/40 text-gold-light text-xs font-medium">
                You are on the list. We will send private announcements as they drop.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-1">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 h-12 bg-ink border border-hairline-strong rounded-full px-5 text-sm text-ivory placeholder:text-muted focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                />
                <Button variant="primary" size="sm" type="submit" className="shrink-0 h-12">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Section: Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-hairline text-xs">
          {/* Column 1 */}
          <div className="space-y-3">
            <span className="label-caps text-ivory block">Entertainment</span>
            <ul className="space-y-2 text-mist">
              <li>
                <Link href="/events" className="hover:text-gold transition-colors">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/stars" className="hover:text-gold transition-colors">
                  Bollywood Stars
                </Link>
              </li>
              <li>
                <Link href="/events?type=concerts" className="hover:text-gold transition-colors">
                  Live Concert Tours
                </Link>
              </li>
              <li>
                <Link href="/events?type=galas" className="hover:text-gold transition-colors">
                  Club Galas
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <span className="label-caps text-ivory block">The Club</span>
            <ul className="space-y-2 text-mist">
              <li>
                <Link href="/membership" className="hover:text-gold transition-colors">
                  Membership Tiers
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-gold transition-colors">
                  Request Your Invite
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  About Us &amp; Values
                </Link>
              </li>
              <li>
                <Link href="/community-guidelines" className="hover:text-gold transition-colors">
                  Community Standards
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-3">
            <span className="label-caps text-ivory block">Everyday Benefits</span>
            <ul className="space-y-2 text-mist">
              <li>
                <Link href="/deals" className="hover:text-gold transition-colors">
                  Member Deals Overview
                </Link>
              </li>
              <li>
                <Link href="/deals#switch-n-save" className="hover:text-gold transition-colors">
                  Switch n Save Energy Perk
                </Link>
              </li>
              <li>
                <Link href="/deals#partner-terms" className="hover:text-gold transition-colors">
                  Partner Disclosure
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Links */}
          <div className="space-y-3">
            <span className="label-caps text-ivory block">Connect</span>
            <ul className="space-y-2 text-mist">
              {siteConfig.socialLinks.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors"
                  >
                    {social.platform}
                  </a>
                </li>
              ))}
              <li className="pt-2 text-[11px] text-muted">
                Concierge: {siteConfig.contactEmail}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Legal & Required Partner Disclosure */}
        <div className="pt-8 border-t border-hairline flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div>
            &copy; 2026 {siteConfig.brandName}. All rights reserved.
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

          {/* Mandatory Partner Disclosure from AGENTS.md & DESIGN.md */}
          <p className="text-[11px] text-muted/90 text-center md:text-right">
            Switch n Save offers are provided by partners. Terms apply.
          </p>
        </div>
      </div>
    </footer>
  );
}
