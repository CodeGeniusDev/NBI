import { motion } from "framer-motion";
import heroVideo from "@/assets/video4.mp4";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background video */}
    <div className="absolute inset-0">
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <p className="font-body text-xs sm:text-sm font-light tracking-[0.3em] text-industrial mb-8">
          NEXUS BRIDGE INTERNATIONAL
        </p>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-[0.9] mb-8">
          <span className="text-gold-gradient">CHEMICAL SOURCING</span>
          <br />
          <span className="text-foreground">INTELLIGENCE</span>
        </h1>
        <div className="px-4 sm:px-60">
          <p className="font-body text-sm md:text-lg font-light text-industrial leading-relaxed">
            Global indenting solutions for the textile industry — connecting you with trusted manufacturers, optimized pricing, and consistent supply chains.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="mt-8 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-16 text-industrial font-body text-[10px] sm:text-xs tracking-[0.2em] font-light p-6"
      >
        <span className="px-3 py-1 border border-border rounded">
          TEXTILE AUXILIARIES
        </span>
        <span className="hidden sm:inline w-1 h-1 rounded-full bg-primary" />
        <span className="px-3 py-1 border border-border rounded">
          LEATHER CHEMICALS
        </span>
        <span className="hidden sm:inline w-1 h-1 rounded-full bg-primary" />
        <span className="px-3 py-1 border border-border rounded">
          GREEN CHEMISTRY
        </span>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
