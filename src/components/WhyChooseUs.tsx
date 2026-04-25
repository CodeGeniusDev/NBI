import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const WhyChooseUs = () => (
  <section className="py-24 px-6 bg-background">
    <div className="max-w-7xl mx-auto">
      <SectionReveal>
        <p className="font-body text-xs tracking-[0.3em] text-primary mb-4 text-center">OUR ADVANTAGE</p>
        <h2 className="font-display text-4xl md:text-6xl text-foreground mb-16 text-center">
          WHY<br />CHOOSE US
        </h2>
      </SectionReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Global Supplier Network",
            description: "Access to verified international manufacturers and chemical suppliers across multiple continents."
          },
          {
            title: "Competitive Indenting Pricing",
            description: "Cost-effective procurement solutions with transparent pricing and favorable payment terms."
          },
          {
            title: "Quality-Assured Sourcing",
            description: "Rigorous supplier verification and quality control processes to ensure product consistency."
          },
          {
            title: "Reliable Logistics & Delivery",
            description: "Streamlined supply chain management with timely deliveries and tracking capabilities."
          },
          {
            title: "Technical Support Coordination",
            description: "Expert technical assistance and application support for optimal product utilization."
          }
        ].map((item, index) => (
          <SectionReveal key={item.title} delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 border border-border rounded-lg hover:border-primary/30 transition-colors duration-300"
            >
              <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
              <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
