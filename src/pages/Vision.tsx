import { motion } from "framer-motion";
import SectionReveal from "../components/SectionReveal";
import watermark from "../assets/watermark.jpg";

const Vision = () => {
  const strategicPlans = [
    {
      number: "01",
      title: "Chrome-Free Tanning Indenting Network",
      goal: "Connect Pakistani tanners with verified international suppliers of chrome-free tanning agents.",
      action:
        "Build strategic partnerships with global manufacturers of zeolite-based and aldehyde-free tanning agents, ensuring reliable supply chains for EU and US compliance.",
      image: "https://pin.it/5d3zV59ku",
    },
    {
      number: "02",
      title: "Bio-Based Auxiliaries Sourcing",
      goal: "Facilitate access to renewable, bio-based chemical alternatives from international suppliers.",
      action:
        "Establish indenting relationships with global producers of vegetable oil-derived fat liquors and softening agents, improving biodegradability for Pakistani textile processors.",
      image: "https://pin.it/Q9LKERuUB",
      reverse: true,
    },
    {
      number: "03",
      title: "Water-Efficient Chemical Solutions",
      description:
        "Address Pakistan's water scarcity through strategic sourcing of water-efficient technologies.",
      action:
        "Connect textile manufacturers with international suppliers of low-liquor chemicals that reduce water consumption by 30-40% in beamhouse processes.",
      image: "https://pin.it/7EJirAwnt",
    },
    {
      number: "04",
      title: "Advanced Finishing Technologies",
      description:
        "Provide access to cutting-edge nano-technology finishing solutions for premium markets.",
      action:
        "Source and import nano-coatings, self-cleaning, anti-microbial, and UV-resistance technologies from specialized global manufacturers for automotive and footwear applications.",
      image: "https://pin.it/4jpzSpqxs",
      reverse: true,
    },
    {
      number: "05",
      title: "Circular Economy Partnerships",
      goal: "Connect Pakistani industry with global circular economy solution providers.",
      action:
        "Establish indenting agreements with international suppliers of enzymes and chemical processes for waste valorization, enabling collagen and protein recovery from leather waste.",
      image: "https://pin.it/4UhfXnWW1",
    },
    {
      number: "06",
      title: "Digital Compliance & Certification",
      goal: "Streamline market access through digital compliance solutions.",
      action:
        "Partner with international testing facilities and digital platforms to provide ZDHC Gateway and LWG certification support, ensuring products are 'Market-Ready' for global exports.",
      image: "https://pin.it/7sC9D1XJ8",
      reverse: true,
    },
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <section className="px-6 pt-12">
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
              height: "300px",
            }}
          />
          <SectionReveal>
            <h2 className="text-primary tracking-[1em] sm:tracking-[1em] uppercase text-[6px] sm:text-[10px] mb-10 font-extrabold">
              NBI Strategic Indenting
            </h2>
            <h1 className="font-display text-3xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-[0.9] mb-8">
              Sustainable <br />
              <span className="italic text-primary">Sourcing</span>
            </h1>
            <div className="px-4 sm:px-60">
              <p className="font-body text-sm md:text-lg font-light text-industrial leading-relaxed">
                Establishing a textile chemical indenting company in Pakistan is a strategic
                move, connecting local manufacturers with global suppliers while meeting the
                growing demand for{" "}
                <span className="text-foreground font-bold">
                  ZDHC (Zero Discharge of Hazardous Chemicals)
                </span>{" "}
                compliance through international sourcing.
              </p>
            </div>
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
              <div className="bg-gradient-to-br from-white/3 to-white/1 backdrop-blur-[30px] border border-primary/10 rounded py-12">
                <div className="w-0 h-0.5 bg-primary mb-8 transition-all duration-1500 group-hover:w-[100px]"></div>
                <h3 className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-6">
                  Vision Statement
                </h3>
                <p className="text-xl md:text-3xl font-light leading-relaxed italic font-display">
                  "To be the leading chemical sourcing intelligence platform connecting
                  Pakistan's textile and leather industries with verified global suppliers,
                  enabling sustainable transformation through strategic indenting partnerships
                  and reliable supply chain solutions."
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="bg-gradient-to-br from-white/3 to-white/1 backdrop-blur-[30px] border border-primary/10 rounded py-12 lg:mt-20">
                <div className="w-0 h-0.5 bg-primary mb-8 transition-all duration-1500 group-hover:w-[100px]"></div>
                <h3 className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-6">
                  Mission Statement
                </h3>
                <p className="text-muted-foreground leading-loose text-lg font-light italic">
                  "Our mission is to facilitate access to high-performance, compliant, and
                  innovative chemical auxiliaries through strategic global sourcing. We are committed
                  to reducing the environmental footprint of the textile and leather sectors
                  through rigorous supplier verification, competitive indenting, and a
                  'Sourcing-First' approach that ensures quality and reliability for our partners."
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
              alt="Global Chemical Sourcing Network"
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
              <span className="italic text-primary">Sourcing</span>
            </h3>
            <p className="max-w-2xl mx-auto text-muted-foreground font-light text-lg">
              As NBI expands leather chemical indenting services, the focus shifts from
              traditional sourcing to{" "}
              <span className="text-foreground italic">"Green Chemistry Partnerships."</span>
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
                Strategic <br />
                <span className="italic text-primary">Sourcing</span>
              </h3>
              <p className="text-muted-foreground text-xl font-light leading-relaxed mb-16">
                As a strategic indenting partner, our primary edge is{" "}
                <span className="text-foreground font-bold">
                  Global Sourcing Intelligence
                </span>
                . By connecting Pakistani manufacturers with verified international suppliers,
                we reduce lead times and foreign exchange burdens, making us an indispensable
                partner in their supply chain.
              </p>
              <div className="flex justify-center gap-10">
                <motion.a
                  href="/"
                  className="bg-primary text-background px-16 py-6 text-[10px] font-extrabold uppercase tracking-[0.5em] hover:bg-foreground transition duration-500"
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
