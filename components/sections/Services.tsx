import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section
      id="services"
      className="relative z-10 border-b border-vidhaan-border bg-vidhaan-obsidian/85 backdrop-blur-[2px] py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-vidhaan-gold">
              02 // SERVICE ARCHITECTURE
            </p>
            <h2 className="font-heading text-3xl font-semibold text-vidhaan-ivory sm:text-5xl">
              Coordinated Execution.{" "}
              <span className="text-vidhaan-gold">End-to-End Clarity.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-vidhaan-muted">
            From opportunity discovery to campaign delivery, VIDHAAN provides the coordination and
            operational support that helps creator-brand relationships move forward with clarity.
          </p>
        </div>

        <div className="mt-16 grid border-t border-l border-vidhaan-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col justify-between border-r border-b border-vidhaan-border bg-vidhaan-obsidian/60 p-8 lg:p-10 transition duration-300 hover:bg-vidhaan-surface"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.2em] text-vidhaan-gold">
                    {service.id}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-vidhaan-gold opacity-60 group-hover:opacity-100" />
                </div>

                <h3 className="mt-6 font-heading text-2xl font-semibold text-vidhaan-ivory group-hover:text-vidhaan-gold transition-colors">
                  {service.title}
                </h3>

                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-vidhaan-muted">
                  {service.subtitle}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-vidhaan-muted">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 border-t border-vidhaan-border/60 pt-4 text-[11px] uppercase tracking-[0.16em] text-vidhaan-ivory/70">
                WRITTEN SCOPE & SCHEDULE
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs text-vidhaan-muted">
          Service boundary note: Services are provided only where agreed in a written scope or
          campaign schedule. VIDHAAN does not guarantee virality, sales metrics or unverified reach.
        </p>
      </div>
    </section>
  );
}
