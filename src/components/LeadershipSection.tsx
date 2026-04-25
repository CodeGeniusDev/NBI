import SectionReveal from "./SectionReveal";
// import nairaImg from "@/assets/leadership-naira.jpg";
import nairaImg from "@/assets/hero-industrial.jpg";
// import nairaImg from "@/assets/leadership-placeholder.svg";

const timeline = [];

const LeadershipSection = () => (
  <section id="leadership" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <SectionReveal>
        <p className="font-body text-xs tracking-[0.3em] text-primary mb-4">
          LEADERSHIP
        </p>
      </SectionReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left: Image */}
        <SectionReveal>
          <div className="text-center mt-16">
            <a
              href="/ceo"
              className="inline-flex items-center gap-2 px-8 py-3 font-body text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative overflow-hidden border border-border">
                <img
                  src={nairaImg}
                  alt="Naira Usman — Founder & CEO"
                  className="w-full h-full object-cover min-h-[500px] lg:min-h-[722px]"
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
            </a>
          </div>
        </SectionReveal>

        {/* Right: Timeline */}
        <SectionReveal delay={0.2}>
          <div className="border border-border border-l-0 p-8 lg:p-12 flex flex-col justify-center min-h-[500px] lg:min-h-[700px]">
            {/* <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">
              15 YEARS OF<br />
              <span className="text-gold-gradient">ENGINEERING</span><br />
              EXCELLENCE
            </h2>
            <p className="font-body text-sm font-light text-muted-foreground mb-10 leading-relaxed max-w-md">
              From chemical process floors to corporate boardrooms — a career forged at the intersection of industrial chemistry, human capital, and visionary entrepreneurship.
            </p>

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 py-3 border-b border-border/50 group">
                  <span className="font-display text-sm text-primary min-w-[50px] transition-opacity duration-300 group-hover:opacity-100 opacity-60">
                    {item.year}
                  </span>
                  <span className="font-body text-sm font-light text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    {item.event}
                  </span>
                </div>
              ))}
            </div> */}
          </div>
        </SectionReveal>
      </div>
    </div>
  </section>
);

export default LeadershipSection;
