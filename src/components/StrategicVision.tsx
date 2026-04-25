import SectionReveal from "./SectionReveal";

const pillars = [
  {
    number: "01",
    title: "Global Supplier Networks",
    description:
      "Expanding our indenting network to include verified manufacturers across Asia, Europe, and Middle East. Our strategic partnerships ensure reliable sourcing of pre-treatment agents, reactive dyes, and leather chemicals with competitive pricing and consistent quality — reducing lead times by 40% for textile processors.",
  },
  {
    number: "02",
    title: "Digital Indenting Platform",
    description:
      "Developing an AI-driven procurement platform for chemical sourcing intelligence. Real-time price tracking, supplier verification, and automated compliance documentation streamline the indenting process — enabling textile manufacturers to source chemicals 60% faster with transparent pricing and quality assurance.",
  },
  {
    number: "03",
    title: "Sustainable Chemical Sourcing",
    description:
      "Prioritizing eco-friendly and ZDHC-compliant chemicals through our global network. Our indenting services focus on bio-based auxiliaries, chrome-free tanning agents, and water-efficient dyeing systems — helping textile companies meet environmental standards while maintaining cost competitiveness.",
  },
  {
    number: "04",
    title: "Supply Chain Resilience",
    description:
      "Building robust logistics networks for chemical delivery across Pakistan's textile corridors. Our integrated tracking systems and strategic warehousing ensure uninterrupted supply chains — critical for maintaining production schedules and preventing costly downtime in textile processing units.",
  },
  {
    number: "05",
    title: "Technical Support Excellence",
    description:
      "Providing expert application support and technical coordination for sourced chemicals. Our team of specialists ensures optimal product utilization, troubleshooting assistance, and process optimization — maximizing the value of chemical investments and improving production efficiency.",
  },
  {
    number: "06",
    title: "Market Intelligence Services",
    description:
      "Delivering real-time market analysis and chemical pricing trends to our clients. Our intelligence platform provides insights into global chemical markets, regulatory changes, and emerging technologies — enabling informed procurement decisions and strategic planning for textile manufacturers.",
  },
];

const StrategicVision = () => (
  <section id="vision" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionReveal>
        <p className="font-body text-xs tracking-[0.3em] text-primary mb-4">STRATEGIC VISION</p>
        <h2 className="font-display text-3xl md:text-6xl text-foreground mb-6">
          SUSTAINABLE<br />
          <span className="text-gold-gradient">TRANSFORMATION</span>
        </h2>
        <p className="font-body text-base font-light text-muted-foreground max-w-2xl mb-20 leading-relaxed">
          Six strategic pillars driving excellence in chemical sourcing intelligence. Each initiative strengthens our indenting capabilities and global supplier partnerships.
        </p>
      </SectionReveal>

      <div className="space-y-0">
        {pillars.map((pillar, i) => (
          <SectionReveal key={pillar.number} delay={i * 0.08}>
            <div className="border-t border-border py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 group transition-colors duration-500 hover:bg-surface/50">
              <div className="md:col-span-1">
                <span className="font-display text-sm text-primary/40 transition-colors duration-500 group-hover:text-primary">
                  {pillar.number}
                </span>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-display text-xl md:text-2xl text-foreground">
                  {pillar.title}
                </h3>
              </div>
              <div className="md:col-span-8">
                <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          </SectionReveal>
        ))}
        <div className="border-t border-border" />
      </div>
      
      <SectionReveal delay={0.5}>
        <div className="text-center mt-16">
          <a
            href="/vision"
            className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary font-body text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary hover:text-background hover:shadow-lg"
          >
            See More
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default StrategicVision;
