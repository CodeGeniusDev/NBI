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
          <a
            href="/ceo"
            className="block h-full border border-border hover:border-primary/50 transition-colors duration-300"
          >
            <div className="relative overflow-hidden h-full group">
              <img
                src={nairaImg}
                alt="Naira Usman — Founder & CEO"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
                <div className="mt-4 flex items-center gap-2 text-xs text-primary/70 hover:text-primary transition-colors">
                  <span>View Full Profile</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </SectionReveal>

        {/* Right: Design Elements */}
        <SectionReveal delay={0.2}>
          <div className="border border-border border-l-0 p-8 lg:p-12 flex flex-col justify-center h-full relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-8 right-8 w-32 h-32 border border-primary/10 rounded-full"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 border border-primary/5 rounded-full"></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-primary/20 rotate-45"></div>

            {/* Geometric Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-8 grid-rows-8 h-full">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="border border-primary/20"></div>
                ))}
              </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-primary/20 rounded-full animate-pulse delay-75"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/40 rounded-full animate-pulse delay-150"></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Abstract Shapes */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="aspect-square border border-primary/20 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 border border-primary/40 rotate-45"></div>
                </div>
                <div className="aspect-square border border-primary/15 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary/30 rounded-full"></div>
                </div>
                <div className="aspect-square border border-primary/25 flex items-center justify-center">
                  <div className="w-10 h-0.5 bg-primary/50"></div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  </section>
);

export default LeadershipSection;
