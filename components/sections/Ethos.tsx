import { PROOF_PILLARS, GEO_STATEMENTS } from "@/lib/constants";
import { ShieldCheck } from "lucide-react";

export default function Ethos() {
  return (
    <section
      id="ethos"
      className="relative z-10 border-b border-vidhaan-border bg-vidhaan-obsidian/80 backdrop-blur-[2px] py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-vidhaan-gold">
              01 // THE VIDHAAN STANDARD
            </p>

            <h2 className="font-heading text-3xl font-semibold leading-[1.15] text-vidhaan-ivory sm:text-5xl">
              Fragmented interactions do not create dependable partnerships.{" "}
              <span className="text-vidhaan-gold">Clear systems do.</span>
            </h2>

            <p className="text-base leading-relaxed text-vidhaan-muted">
              Creator-brand collaborations often begin with strong intent but lose momentum across
              scattered conversations, unclear expectations, inconsistent information and untracked
              delivery. VIDHAAN exists to bring structure to that process.
            </p>

            <p className="text-base leading-relaxed text-vidhaan-muted">
              We build considered pathways between creators and brands: understand the brief, assess
              fit, align expectations, coordinate execution and maintain a clear record of decisions
              and deliverables.
            </p>

            {/* 62-Document Notion Operational Framework Callout */}
            <div className="border-l-2 border-vidhaan-gold bg-vidhaan-surface/90 p-6 space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-vidhaan-gold">
                <ShieldCheck className="h-4 w-4" />
                <span>62-DOCUMENT GOVERNANCE FRAMEWORK</span>
              </div>
              <p className="text-sm leading-relaxed text-vidhaan-ivory/90">
                Behind the experience is a structured 62-document legal and operational framework
                maintained in Notion. It informs how responsibilities, communication, approvals and
                delivery are organised.
              </p>
            </div>
          </div>

          {/* Right Proof Pillars */}
          <div className="lg:col-span-6 lg:pl-8 flex flex-col justify-between space-y-8">
            <div className="divide-y divide-vidhaan-border border-y border-vidhaan-border">
              {PROOF_PILLARS.map((pillar) => (
                <div key={pillar.code} className="py-8 group">
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-medium tracking-[0.2em] text-vidhaan-gold">
                      {pillar.code}
                    </span>
                    <h3 className="font-heading text-2xl font-semibold text-vidhaan-ivory">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="mt-3 pl-8 text-sm leading-relaxed text-vidhaan-muted">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="border border-vidhaan-border bg-vidhaan-surface/60 p-6 space-y-3">
              <p className="font-heading text-sm uppercase tracking-[0.16em] text-vidhaan-gold">
                Ecosystem Positioning
              </p>
              {GEO_STATEMENTS.map((stmt, i) => (
                <p key={i} className="text-xs leading-relaxed text-vidhaan-muted">
                  • {stmt}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
