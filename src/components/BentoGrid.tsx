import SectionReveal from "./SectionReveal";

interface SolutionBlock {
  title: string;
  category: string;
  specs: string[];
  description: string;
  span?: string;
}

const solutions: SolutionBlock[] = [
  {
    title: "Pre-Treatment Agents",
    category: "TEXTILE",
    specs: ["Desizing Enzymes", "Bio-Scouring Compounds", "Eco-Bleach Stabilizers"],
    description: "Advanced enzymatic formulations replacing harsh caustic processes. Our bio-based pre-treatment suite reduces water consumption by 40% while achieving superior whiteness indices.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Reactive Dyeing Systems",
    category: "TEXTILE",
    specs: ["Cold-Pad Batch Dyes", "Low-Salt Reactives", "Fixation Rate: 92%+"],
    description: "Next-generation reactive dye auxiliaries engineered for minimal salt discharge and maximum color yield. Import substitution grade.",
  },
  {
    title: "Digital Print Chemistry",
    category: "TEXTILE",
    specs: ["Ink-Jet Pre-Treatment", "Pigment Binders", "UV-Cure Systems"],
    description: "Complete digital textile printing chemical suite. Enabling Pakistan's shift from conventional to digital production with locally sourced formulations.",
  },
  {
    title: "Chrome-Free Tanning",
    category: "LEATHER",
    specs: ["Glutaraldehyde-Free", "Vegetable-Synthetic Hybrid", "ZDHC Compliant"],
    description: "Proprietary chrome-free tanning agents meeting EU REACH standards. Enabling Pakistani leather exporters to access restricted European markets.",
    span: "md:col-span-2",
  },
  {
    title: "Finishing & Coating",
    category: "LEATHER",
    specs: ["Water-Based PU", "Nano-Coating", "Anti-Microbial Finish"],
    description: "Bio-based finishing compounds delivering premium hand-feel and durability. Zero VOC formulations for export-grade leather goods.",
  },
];

const BentoGrid = () => (
  <section id="solutions" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionReveal>
        <p className="font-body text-xs tracking-[0.3em] text-primary mb-4">INDUSTRIAL SOLUTIONS</p>
        <h2 className="font-display text-4xl md:text-6xl text-foreground mb-16">
          CHEMICAL<br />INTELLIGENCE
        </h2>
      </SectionReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-border">
        {solutions.map((sol, i) => (
          <SectionReveal key={sol.title} delay={i * 0.1} className={`bg-background ${sol.span || ""}`}>
            <div className="p-8 h-full border border-border transition-colors duration-500 hover:border-primary/30 group">
              <div className="flex items-center justify-between mb-6">
                <span className="font-body text-[10px] tracking-[0.3em] text-primary font-medium">
                  {sol.category}
                </span>
                <span className="w-2 h-2 rounded-full bg-primary/30 transition-colors duration-500 group-hover:bg-primary" />
              </div>

              <h3 className="font-display text-xl md:text-2xl text-foreground mb-4">{sol.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {sol.specs.map((spec) => (
                  <span
                    key={spec}
                    className="font-body text-[10px] tracking-wider text-industrial border border-border px-3 py-1"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">
                {sol.description}
              </p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default BentoGrid;
