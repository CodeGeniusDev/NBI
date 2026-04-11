import { motion } from "framer-motion";
import SectionReveal from "../components/SectionReveal";
import watermark from "../assets/watermark.jpg";

const Vision = () => {
  const strategicPlans = [
    {
      number: "01",
      title: "Shift to Chrome-Free Tanning Solutions",
      goal: "Move away from Chromium III and VI to meet strict EU and US import regulations.",
      action:
        "Develop Zeolite-based or Aldehyde-free tanning agents that provide the same leather suppleness without the toxic effluent.",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae",
    },
    {
      number: "02",
      title: "Bio-Based Auxiliaries & Fat Liquors",
      goal: "Replace petroleum-derived oils with renewable resources.",
      action:
        "Formulate fat liquors and softening agents derived from vegetable oils and biomass to improve the biodegradability.",
      image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      reverse: true,
    },
    {
      number: "03",
      title: "Water-Efficient Beamhouse Chemicals",
      description:
        "Address Pakistan's water scarcity and high cost of wastewater treatment.",
      action:
        "Launch a line of 'Low-Liquor' chemicals that allow the beamhouse process to operate with 30% to 40% less water consumption.",
      image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    },
    {
      number: "04",
      title: "Nano-Technology in Finishing",
      description:
        "Create high-performance, 'Smart' leather for premium markets.",
      action:
        "Invest in Nano-coatings that offer self-cleaning, anti-microbial, and UV-resistance for Automotive and Footwear.",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780",
      reverse: true,
    },
    {
      number: "05",
      title: "Circular Economy & Waste Valorization",
      goal: "Transform leather waste into a resource.",
      action:
        "Develop enzymes and chemical processes to recover collagen and proteins to be repurposed back into the cycle.",
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
    },
    {
      number: "06",
      title: "Digital Lab & Certification",
      goal: "Instant compliance and transparency.",
      action:
        "Establish a testing facility in Pakistan providing ZDHC Gateway and LWG support, ensuring products are 'Market-Ready'.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      reverse: true,
    },
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <span className="text-primary">/</span>
            <span className="text-foreground font-medium">Vision</span>
          </nav>
        </div>
      </section>

      <div className="min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative overflow-hidden">
          <div
            className="absolute w-[600px] h-[600px] -z-10"
            style={{
              top: "-10%",
              left: "-10%",
              background:
                "radial-gradient(circle, rgba(197, 160, 89, 0.05) 0%, rgba(0,0,0,0) 70%)",
            }}
          ></div>
          <img
            src={watermark}
            alt="Watermark"
            className="absolute opacity-5 pointer-events-none"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "300px",
              height: "300px"
            }}
          />
          <SectionReveal>
            <h2 className="text-primary tracking-[1em] uppercase text-[10px] mb-10 font-extrabold">
              NBI Strategic Indenting
            </h2>
            <h1 className="text-5xl md:text-8xl font-light leading-tight mb-12 font-display">
              Sustainable <br />
              <span className="italic text-primary">Transformation</span>
            </h1>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg font-light leading-loose">
              Starting a textile chemical company in Pakistan is a strategic
              move, given the country's heavy reliance on its textile sector and
              the global push for{" "}
              <span className="text-foreground font-bold">
                ZDHC (Zero Discharge of Hazardous Chemicals)
              </span>{" "}
              compliance.
            </p>
          </SectionReveal>
          <div className="mt-20">
            <SectionReveal delay={0.3}>
              <div className="h-24 w-px bg-gradient-to-b from-primary to-transparent mx-auto"></div>
            </SectionReveal>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10">
            <SectionReveal delay={0.1}>
              <div className="bg-gradient-to-br from-white/3 to-white/1 backdrop-blur-[30px] border border-primary/10 rounded p-12">
                <div className="w-0 h-0.5 bg-primary mb-8 transition-all duration-1500 group-hover:w-[100px]"></div>
                <h3 className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-6">
                  Vision Statement
                </h3>
                <p className="text-2xl md:text-3xl font-light leading-relaxed italic font-display">
                  "To be the leading catalyst of sustainable transformation in
                  the global textile and leather industries, setting the
                  benchmark for eco-intelligent chemical solutions that empower
                  Pakistan's exports on the world stage."
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="bg-gradient-to-br from-white/3 to-white/1 backdrop-blur-[30px] border border-primary/10 rounded p-12 lg:mt-20">
                <div className="w-0 h-0.5 bg-primary mb-8 transition-all duration-1500 group-hover:w-[100px]"></div>
                <h3 className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-6">
                  Mission Statement
                </h3>
                <p className="text-muted-foreground leading-loose text-lg font-light italic">
                  "Our mission is to engineer high-performance, compliant, and
                  innovative chemical auxiliaries that optimize manufacturing
                  efficiency for our partners. We are committed to reducing the
                  environmental footprint of the textile and leather sectors
                  through rigorous R&D, local manufacturing excellence, and a
                  'Safety-First' approach for both the consumer and the planet."
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Parallax Image */}
        <section className="py-10 px-6">
          <SectionReveal>
            <img
              src="https://images.unsplash.com/photo-1518152006812-edab29b069ac"
              className="w-full h-[60vh] object-cover rounded-sm shadow-2xl transition-all duration-1000 hover:filter-none hover:scale-[1.02] filter brightness-[0.6] grayscale-[0.5]"
              alt="Chemical Innovation Laboratory"
            />
          </SectionReveal>
        </section>

        {/* Future Strategic Plans */}
        <section className="py-32 text-center px-6 relative overflow-hidden">
          <div
            className="absolute w-[600px] h-[600px] -z-10"
            style={{
              right: "-10%",
              top: "40%",
              background:
                "radial-gradient(circle, rgba(197, 160, 89, 0.05) 0%, rgba(0,0,0,0) 70%)",
            }}
          ></div>
          <SectionReveal>
            <h2 className="text-primary tracking-[0.5em] uppercase text-xs font-bold mb-6">
              Future Strategic Plans
            </h2>
            <h3 className="text-4xl md:text-6xl font-light mb-10 font-display">
              The Leather Sector{" "}
              <span className="italic text-primary">Evolution</span>
            </h3>
            <p className="max-w-2xl mx-auto text-muted-foreground font-light text-lg">
              As NBI expands into the leather sector, the focus shifts from
              traditional tanning to{" "}
              <span className="text-foreground italic">"Green Chemistry."</span>
            </p>
          </SectionReveal>
        </section>

        {/* Strategic Plans Grid */}
        <section className="pb-40 px-6 max-w-6xl mx-auto space-y-40">
          {strategicPlans.map((plan, index) => (
            <SectionReveal key={plan.number} delay={index * 0.1}>
              <div
                className={`grid lg:grid-cols-2 gap-16 items-center ${plan.reverse ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={plan.reverse ? "lg:order-last" : ""}>
                  <span className="text-primary text-4xl font-bold opacity-20 mb-4 block">
                    {plan.number}.
                  </span>
                  <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter">
                    {plan.title}
                  </h4>
                  {plan.goal && (
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      <strong className="text-foreground uppercase text-xs tracking-widest block mb-2">
                        The Goal
                      </strong>{" "}
                      {plan.goal}
                    </p>
                  )}
                  {plan.description && (
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {plan.description}
                    </p>
                  )}
                  <p className="text-muted-foreground italic">
                    <strong className="text-primary uppercase text-xs tracking-widest block mb-2">
                      Action
                    </strong>{" "}
                    {plan.action}
                  </p>
                </div>
                {plan.image && (
                  <img
                    src={plan.image}
                    className="w-full h-64 md:h-80 object-cover rounded shadow-xl opacity-60 hover:opacity-100 transition-opacity duration-700"
                    alt={plan.title}
                  />
                )}
              </div>
            </SectionReveal>
          ))}
        </section>

        {/* Key Success Factor */}
        <section className="py-40 bg-muted relative overflow-hidden">
          <div
            className="absolute w-[600px] h-[600px] -z-10"
            style={{
              bottom: "-10%",
              left: "30%",
              background:
                "radial-gradient(circle, rgba(197, 160, 89, 0.05) 0%, rgba(0,0,0,0) 70%)",
            }}
          ></div>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <SectionReveal>
              <h2 className="text-primary tracking-[0.5em] uppercase text-[10px] font-extrabold mb-10">
                Key Success Factor for Pakistan
              </h2>
              <h3 className="text-4xl md:text-7xl font-light mb-12 uppercase leading-tight font-display">
                Import <br />
                <span className="italic text-primary">Substitution</span>
              </h3>
              <p className="text-muted-foreground text-xl font-light leading-relaxed mb-16">
                As a local manufacturer, your primary edge will be{" "}
                <span className="text-foreground font-bold">
                  Import Substitution
                </span>
                . By producing these advanced chemicals locally, you reduce the
                lead time and foreign exchange burden for Pakistani tanneries,
                making you an indispensable partner in their supply chain.
              </p>
              <div className="flex justify-center gap-10">
                <motion.a
                  href="/"
                  className="bg-primary text-background px-16 py-6 text-[10px] font-extrabold uppercase tracking-[0.5em] hover:bg-foreground transition duration-500"
                  whileHover={{ scale: 1.05 }}
                >
                  Back to Home
                </motion.a>
              </div>
            </SectionReveal>
          </div>
        </section>
      </div>
    </>
  );
};

export default Vision;
