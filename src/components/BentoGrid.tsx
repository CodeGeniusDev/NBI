import SectionReveal from "./SectionReveal";
import preTreatmentImg from "@/assets/img.jpeg";

interface SolutionBlock {
  title: string;
  category: string;
  specs: string[];
  description: string;
  span?: string;
  image?: string;
}

const solutions: SolutionBlock[] = [
  {
    title: "PRE-TREATMENT AGENTS",
    category: "TEXTILE",
    specs: ["Desizing Enzymes", "Bio-Scouring Solutions", "Eco-Bleach Stabilizers"],
    description: "We source high-performance pre-treatment chemicals from verified international manufacturers. Our indenting network ensures consistent quality, competitive pricing, and reliable availability — helping textile processors optimize operations without supply disruptions.",
    span: "md:col-span-2 md:row-span-2",
    image: preTreatmentImg,
  },
  {
    title: "REACTIVE DYEING SYSTEMS",
    category: "TEXTILE",
    specs: ["Cold-Pad Batch Dyes", "Low-Salt Reactive Dyes", "Fixation Rate: 92%+"],
    description: "We facilitate sourcing of advanced reactive dyes and auxiliaries from globally recognized suppliers. Our indenting expertise ensures cost-effective procurement, reduced lead times, and dependable supply for uninterrupted production cycles.",
  },
  {
    title: "DIGITAL PRINT CHEMISTRY",
    category: "TEXTILE",
    specs: ["Ink-Jet Pre-Treatment", "Pigment Binders", "UV-Cure Systems"],
    description: "End-to-end sourcing solutions for digital textile printing chemicals. We connect you with trusted global partners, enabling smooth transition to modern printing technologies with assured quality and timely deliveries.",
  },
  {
    title: "CHROME-FREE TANNING",
    category: "LEATHER",
    specs: ["Glutaraldehyde-Free", "Vegetable-Synthetic Hybrid", "ZDHC Compliant"],
    description: "We provide indenting services for sustainable leather processing chemicals, sourcing from certified international manufacturers. Our network ensures compliance, consistency, and competitive pricing for modern leather production needs.",
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
        <p className="font-body text-xs tracking-[0.3em] text-primary mb-4 italic">INDUSTRIAL SOLUTIONS</p>
        <h2 className="font-display text-4xl md:text-6xl text-foreground mb-16 italic">
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

              <h3 className="font-display text-xl md:text-2xl text-foreground mb-4 italic">{sol.title}</h3>
              
              {sol.image && (
                <div className="mb-6">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              )}
              
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
