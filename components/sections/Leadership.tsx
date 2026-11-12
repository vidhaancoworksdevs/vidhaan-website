import { LEADERSHIP_ROSTER } from "@/lib/constants";

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="relative z-10 border-b border-vidhaan-border bg-vidhaan-obsidian/80 backdrop-blur-[2px] py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-vidhaan-gold">
              03 // THE PEOPLE BEHIND THE PROCESS
            </p>
            <h2 className="font-heading text-3xl font-semibold text-vidhaan-ivory sm:text-5xl">
              Executive & Operational{" "}
              <span className="text-vidhaan-gold">Leadership.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-vidhaan-muted">
            VIDHAAN is shaped by a core team with defined leadership and creative, operational and
            administrative responsibilities.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LEADERSHIP_ROSTER.map((member, idx) => (
            <div
              key={member.name}
              className="group flex flex-col justify-between border border-vidhaan-border bg-vidhaan-surface/80 p-8 transition-all duration-300 hover:border-vidhaan-gold"
            >
              <div>
                <div className="flex items-center justify-between border-b border-vidhaan-border pb-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-vidhaan-gold">
                    {member.tier}
                  </span>
                  <span className="text-xs text-vidhaan-muted">0{idx + 1}</span>
                </div>

                <h3 className="mt-6 font-heading text-2xl font-bold tracking-[0.1em] text-vidhaan-ivory">
                  {member.name}
                </h3>

                <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.14em] text-vidhaan-gold">
                  {member.title}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-vidhaan-muted">
                  {member.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-vidhaan-border/50 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-vidhaan-muted">
                <span>VIDHAAN ROSTER</span>
                <span className="text-vidhaan-ivory">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
