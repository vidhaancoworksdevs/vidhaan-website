import { LEADERSHIP_ROSTER } from "@/lib/constants";

export default function Leadership() {
  return (
    <section id="leadership" className="border-t border-vidhaan-border bg-vidhaan-obsidian py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-20 max-w-3xl">
          <h2 className="font-heading text-3xl font-medium tracking-wide text-vidhaan-ivory sm:text-4xl">
            The People Behind The Process.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-vidhaan-muted sm:text-base">
            VIDHAAN is shaped by a core team with defined leadership and creative, operational and administrative responsibilities.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
          {LEADERSHIP_ROSTER.map((member) => (
            <div key={member.name} className="group flex flex-col border-l border-vidhaan-border pl-6 transition-colors hover:border-vidhaan-gold">
              <h3 className="font-heading text-2xl font-bold tracking-wider text-vidhaan-ivory">
                {member.name}
              </h3>
              <p className="mt-2 text-xs uppercase tracking-widest text-vidhaan-gold">
                {member.title}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-vidhaan-muted">
                {member.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
