"use client";

import { useState, FormEvent } from "react";
import { BRAND } from "@/lib/constants";
import { ArrowUpRight, CheckCircle2, Copy, Check, ExternalLink, Mail } from "lucide-react";

type RouteType = "brand" | "creator";

export default function Contact() {
  const [route, setRoute] = useState<RouteType>("brand");

  // Shared fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Brand specific
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("INR 50,000 – 2,00,000");

  // Creator specific
  const [handle, setHandle] = useState("");
  const [niche, setNiche] = useState("");

  const [submittedBrief, setSubmittedBrief] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const summary =
      route === "brand"
        ? `ENQUIRY TYPE: BRAND CAMPAIGN BRIEF\nName: ${name}\nCompany / Brand: ${company}\nOfficial Email: ${email}\nEstimated Allocation: ${budget}\n\nCampaign Objectives & Creator Requirements:\n${message}`
        : `ENQUIRY TYPE: CREATOR PARTNERSHIP APPLICATION\nCreator Name: ${name}\nPrimary Handle / Portfolio: ${handle}\nContent Focus / Niche: ${niche}\nOfficial Email: ${email}\n\nCollaboration Interests & Overview:\n${message}`;

    setSubmittedBrief(summary);
  };

  const handleCopy = async () => {
    if (!submittedBrief) return;
    await navigator.clipboard.writeText(submittedBrief);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const gmailUrl = submittedBrief
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        BRAND.email
      )}&su=${encodeURIComponent(
        route === "brand"
          ? `[VIDHAAN Brand Brief] ${company || name}`
          : `[VIDHAAN Creator Application] ${handle || name}`
      )}&body=${encodeURIComponent(submittedBrief)}`
    : "#";

  return (
    <section
      id="contact"
      className="relative z-10 border-b border-vidhaan-border bg-vidhaan-obsidian/85 backdrop-blur-[2px] py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-vidhaan-gold">
              04 // INITIATE PARTNERSHIP
            </p>
            <h2 className="font-heading text-3xl font-semibold text-vidhaan-ivory sm:text-5xl">
              The right partnership begins with a{" "}
              <span className="text-vidhaan-gold">clear conversation.</span>
            </h2>

            <p className="text-base leading-relaxed text-vidhaan-muted">
              Select your pathway—whether you are a brand planning a considered creator campaign or
              a creator seeking professionally managed opportunities.
            </p>

            <div className="space-y-5 border-t border-vidhaan-border pt-6">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-vidhaan-gold">
                  OFFICIAL DESK
                </p>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="mt-2 inline-flex items-center gap-2 text-sm text-vidhaan-ivory hover:text-vidhaan-gold"
                >
                  <Mail className="h-4 w-4 text-vidhaan-gold" />
                  <span>{BRAND.email}</span>
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-vidhaan-gold">
                  OFFICIAL INSTAGRAM CHANNELS
                </p>
                <div className="mt-2 flex flex-wrap gap-4 text-xs uppercase tracking-[0.14em]">
                  <a
                    href={BRAND.socials.instagramSystem}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-vidhaan-border bg-vidhaan-surface px-4 py-2 text-vidhaan-ivory hover:border-vidhaan-gold"
                  >
                    @vidhaan.systems
                  </a>
                  <a
                    href={BRAND.socials.instagramConnects}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-vidhaan-border bg-vidhaan-surface px-4 py-2 text-vidhaan-ivory hover:border-vidhaan-gold"
                  >
                    @vidhaan.connects
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dual Pathway Form */}
          <div className="lg:col-span-7">
            <div className="border border-vidhaan-border bg-vidhaan-surface/95 p-8 sm:p-10">
              {/* Route Switcher Tabs */}
              <div className="mb-8 grid grid-cols-2 border border-vidhaan-border bg-vidhaan-obsidian p-1">
                <button
                  type="button"
                  onClick={() => {
                    setRoute("brand");
                    setSubmittedBrief(null);
                  }}
                  className={`py-3 text-xs font-medium uppercase tracking-[0.16em] transition-all ${
                    route === "brand"
                      ? "bg-vidhaan-gold text-vidhaan-obsidian"
                      : "text-vidhaan-muted hover:text-vidhaan-ivory"
                  }`}
                >
                  For Brands (Campaign Brief)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setRoute("creator");
                    setSubmittedBrief(null);
                  }}
                  className={`py-3 text-xs font-medium uppercase tracking-[0.16em] transition-all ${
                    route === "creator"
                      ? "bg-vidhaan-gold text-vidhaan-obsidian"
                      : "text-vidhaan-muted hover:text-vidhaan-ivory"
                  }`}
                >
                  For Creators (Representation)
                </button>
              </div>

              {!submittedBrief ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.14em] text-vidhaan-muted">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"
                        className="mt-2 w-full border border-vidhaan-border bg-vidhaan-obsidian px-4 py-3.5 text-sm text-vidhaan-ivory focus:border-vidhaan-gold focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.14em] text-vidhaan-muted">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@domain.com"
                        className="mt-2 w-full border border-vidhaan-border bg-vidhaan-obsidian px-4 py-3.5 text-sm text-vidhaan-ivory focus:border-vidhaan-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  {route === "brand" ? (
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs uppercase tracking-[0.14em] text-vidhaan-muted">
                          Brand / Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Company Name"
                          className="mt-2 w-full border border-vidhaan-border bg-vidhaan-obsidian px-4 py-3.5 text-sm text-vidhaan-ivory focus:border-vidhaan-gold focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-[0.14em] text-vidhaan-muted">
                          Campaign Budget Range
                        </label>
                        <select
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="mt-2 w-full border border-vidhaan-border bg-vidhaan-obsidian px-4 py-3.5 text-sm text-vidhaan-ivory focus:border-vidhaan-gold focus:outline-none"
                        >
                          <option value="INR 25,000 – 50,000">INR 25,000 – 50,000</option>
                          <option value="INR 50,000 – 2,00,000">INR 50,000 – 2,00,000</option>
                          <option value="INR 2,00,000+ / Multi-Creator">
                            INR 2,00,000+ / Multi-Creator
                          </option>
                        </select>
                      </div>
                    </div>
                  ) : (
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs uppercase tracking-[0.14em] text-vidhaan-muted">
                          Instagram / YouTube Handle *
                        </label>
                        <input
                          type="text"
                          required
                          value={handle}
                          onChange={(e) => setHandle(e.target.value)}
                          placeholder="@yourhandle"
                          className="mt-2 w-full border border-vidhaan-border bg-vidhaan-obsidian px-4 py-3.5 text-sm text-vidhaan-ivory focus:border-vidhaan-gold focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-[0.14em] text-vidhaan-muted">
                          Content Niche & Audience *
                        </label>
                        <input
                          type="text"
                          required
                          value={niche}
                          onChange={(e) => setNiche(e.target.value)}
                          placeholder="e.g. Tech, Fashion, Finance (50K+)"
                          className="mt-2 w-full border border-vidhaan-border bg-vidhaan-obsidian px-4 py-3.5 text-sm text-vidhaan-ivory focus:border-vidhaan-gold focus:outline-none"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] text-vidhaan-muted">
                      {route === "brand"
                        ? "Campaign Objectives, Timeline & Deliverables *"
                        : "Collaboration Interests & Portfolio Summary *"}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        route === "brand"
                          ? "Share your campaign goals, target timeline and creator preferences..."
                          : "Tell us about your content format, audience engagement and partnership goals..."
                      }
                      className="mt-2 w-full border border-vidhaan-border bg-vidhaan-obsidian px-4 py-3.5 text-sm text-vidhaan-ivory focus:border-vidhaan-gold focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 border border-vidhaan-gold bg-vidhaan-gold px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-vidhaan-obsidian transition-all hover:bg-transparent hover:text-vidhaan-gold"
                  >
                    <span>
                      {route === "brand" ? "Build a Considered Campaign" : "Explore Opportunities"}
                    </span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-vidhaan-gold">
                    <CheckCircle2 className="h-5 w-5" />
                    <h3 className="font-heading text-xl font-semibold text-vidhaan-ivory">
                      Partnership Brief Structured
                    </h3>
                  </div>

                  <pre className="overflow-x-auto border border-vidhaan-border bg-vidhaan-obsidian p-4 text-xs leading-relaxed text-vidhaan-ivory whitespace-pre-wrap">
                    {submittedBrief}
                  </pre>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <a
                      href={gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border border-vidhaan-gold bg-vidhaan-gold px-5 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-vidhaan-obsidian transition hover:bg-transparent hover:text-vidhaan-gold"
                    >
                      <span>Send via Gmail Web</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center justify-center gap-2 border border-vidhaan-border bg-vidhaan-obsidian px-5 py-3.5 text-xs uppercase tracking-[0.16em] text-vidhaan-ivory transition hover:border-vidhaan-gold"
                    >
                      {copied ? <Check className="h-4 w-4 text-vidhaan-gold" /> : <Copy className="h-4 w-4" />}
                      <span>{copied ? "Copied!" : "Copy Brief Text"}</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmittedBrief(null)}
                    className="text-xs uppercase tracking-widest text-vidhaan-muted underline underline-offset-4 hover:text-vidhaan-gold"
                  >
                    ← Edit Details
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
          }
