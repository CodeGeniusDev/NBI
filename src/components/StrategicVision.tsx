import SectionReveal from "./SectionReveal";

const pillars = [
  {
    number: "01",
    title: "Chrome-Free Tanning",
    description:
      "Eliminating hexavalent chromium from Pakistan's leather value chain. Our proprietary vegetable-synthetic hybrid agents deliver equivalent tensile strength and shrinkage temperatures while meeting EU REACH Annex XVII restrictions. This positions Pakistani tanners for direct European market access — replacing $45M in annual chromium salt imports.",
  },
  {
    number: "02",
    title: "Bio-Based Auxiliaries",
    description:
      "Developing enzyme-catalyzed textile pre-treatment systems from locally sourced agricultural bio-waste. Our R&D pipeline converts sugarcane bagasse and rice husk into industrial-grade scouring and desizing agents — creating a circular feedstock model that substitutes $28M in imported petrochemical auxiliaries annually.",
  },
  {
    number: "03",
    title: "Water-Efficient Chemicals",
    description:
      "Engineering low-liquor-ratio dyeing auxiliaries that reduce water consumption by 60% per kilogram of fabric. Our cold-pad batch chemistry operates at 30°C versus conventional 80°C processes, cutting energy costs by 45%. Critical for Pakistan's water-stressed textile corridors in Faisalabad and Karachi.",
  },
  {
    number: "04",
    title: "Nano-Technology",
    description:
      "Deploying nano-encapsulation technology for controlled-release finishing agents. Applications include durable antimicrobial treatments, UV-protective coatings, and self-cleaning textile surfaces. Our nano-silver formulations achieve 99.7% bacterial reduction at 1/10th conventional silver loading — import substitution for $12M in specialty finishes.",
  },
  {
    number: "05",
    title: "Circular Economy",
    description:
      "Designing closed-loop chemical recovery systems for dyehouse effluent. Our membrane-assisted separation technology recovers 85% of unfixed dye and 92% of salt from reactive dyeing wastewater. Converting compliance costs into recovered value — enabling Pakistan's textile sector to meet ZDHC Manufacturing Restricted Substances List (MRSL).",
  },
  {
    number: "06",
    title: "Digital Lab & Certification",
    description:
      "Building Pakistan's first AI-driven formulation laboratory for textile and leather chemicals. Automated spectrophotometric analysis, digital color matching, and blockchain-verified compliance documentation. Reducing formulation development cycles from 8 weeks to 5 days — accelerating time-to-market for import substitution products.",
  },
];

const StrategicVision = () => (
  <section id="vision" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionReveal>
        <p className="font-body text-xs tracking-[0.3em] text-primary mb-4">STRATEGIC VISION</p>
        <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
          SUSTAINABLE<br />
          <span className="text-gold-gradient">TRANSFORMATION</span>
        </h2>
        <p className="font-body text-base font-light text-muted-foreground max-w-2xl mb-20 leading-relaxed">
          Six pillars of innovation driving Pakistan's chemical independence. Each initiative is engineered for import substitution impact and ecological compliance.
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
