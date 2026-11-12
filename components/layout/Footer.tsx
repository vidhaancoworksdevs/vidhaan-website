import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { VidhaanCrest } from "./Navbar";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-vidhaan-border bg-vidhaan-obsidian text-vidhaan-muted">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <VidhaanCrest className="h-9 w-9" />
              <span className="font-heading text-xl font-semibold tracking-[0.22em] text-vidhaan-ivory">
                VIDHAAN
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-vidhaan-muted">
              {BRAND.tagline}
            </p>
            <p className="text-xs text-vidhaan-gold">{BRAND.email}</p>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-vidhaan-ivory">
              Navigation
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#ethos" className="hover:text-vidhaan-gold transition">
                  The Vidhaan Standard
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-vidhaan-gold transition">
                  Service Architecture
                </Link>
              </li>
              <li>
                <Link href="/#leadership" className="hover:text-vidhaan-gold transition">
                  Leadership Roster
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-vidhaan-gold transition">
                  Start a Partnership
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-vidhaan-ivory">
              Governance & Compliance
            </p>
            <p className="text-xs leading-relaxed text-vidhaan-muted">
              2026 VIDHAAN. All Rights Reserved. VIDHAAN is a creator-brand collaboration ecosystem
              under the SHIVAE business group. The nature of each engagement, contracting party and
              applicable terms are identified in the relevant written agreement.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-vidhaan-border pt-8 sm:flex-row">
          <p className="text-xs text-vidhaan-muted">
            © {BRAND.established} {BRAND.name}. All Rights Reserved.
          </p>
          <span className="font-heading text-xs uppercase tracking-[0.24em] text-vidhaan-gold">
            VIDHAAN • DIGITAL FUTURE • EST. 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
