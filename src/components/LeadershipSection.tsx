import SectionReveal from "./SectionReveal";
import nairaImg from "@/assets/Leader.jpg";

const timeline = [];

const LeadershipSection = () => (
  <section id="leadership" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionReveal>
        <p className="font-body text-xs tracking-[0.3em] text-primary mb-4">
          LEADERSHIP
        </p>
      </SectionReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-[722px] lg:h-[722px]">
        {/* Left: Image */}
        <SectionReveal>
          <div className="h-full border border-border">
            <div className="relative overflow-hidden h-full">
              <img
                src={nairaImg}
                alt="Naira Usman — Founder & CEO"
                className="w-full h-full object-cover"
                loading="lazy"
                width={640}
                height={800}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-8">
                <h3 className="font-display text-3xl md:text-4xl text-foreground">
                  NAIRA USMAN
                </h3>
                <p className="font-body text-sm font-light text-primary tracking-wider mt-2">
                  FOUNDER & CEO
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Right: Leadership Content */}
        <SectionReveal delay={0.2}>
          <div className="border border-border border-l-0 p-8 lg:p-12 flex flex-col justify-center h-full">
            {/* <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
              15 YEARS OF
              <br />
              <span className="text-gold-gradient">SOURCING</span>
              <br />
              EXCELLENCE
            </h2>
            <p className="font-body text-sm font-light text-muted-foreground mb-10 leading-relaxed max-w-md">
              From chemical sourcing networks to global supplier partnerships —
              a career forged at the intersection of textile chemistry,
              international trade, and strategic indenting expertise.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-body text-sm font-semibold text-foreground mb-1">
                    Global Network Builder
                  </h4>
                  <p className="font-body text-xs font-light text-muted-foreground">
                    Established strategic partnerships with verified chemical
                    manufacturers across Asia, Europe, and Middle East.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-body text-sm font-semibold text-foreground mb-1">
                    Textile Industry Expert
                  </h4>
                  <p className="font-body text-xs font-light text-muted-foreground">
                    Deep understanding of pre-treatment, dyeing, and finishing
                    chemical requirements for textile processors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-body text-sm font-semibold text-foreground mb-1">
                    Supply Chain Strategist
                  </h4>
                  <p className="font-body text-xs font-light text-muted-foreground">
                    Pioneered digital indenting platforms that reduce lead times
                    and ensure reliable chemical supply chains.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </SectionReveal>
      </div>
    </div>
  </section>
);

export default LeadershipSection;
