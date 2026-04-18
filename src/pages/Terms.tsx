import { motion } from "framer-motion";
import SectionReveal from "../components/SectionReveal";
import watermark from "../assets/watermark.jpg";

const Terms = () => {
  return (
    <div className="min-h-screen py-16 px-6 relative">
      {/* Watermark Background */}
      <img
        src={watermark}
        alt="Watermark"
        className="absolute opacity-5 pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "350px",
          height: "350px",
          zIndex: -1
        }}
      />
      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto mb-8">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <a href="/" className="hover:text-primary transition-colors">
            Home
          </a>
          <span className="text-primary">/</span>
          <span className="text-foreground font-medium">Terms</span>
        </nav>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h1 className="font-display text-4xl md:text-5xl text-foreground tracking-widest mb-1">
            TERMS OF SERVICE
          </h1>
          <div className="w-[150px] h-2.5 border-b-2 border-primary rounded-b-full mb-8 ml-1.5"></div>
        </SectionReveal>
        
        <SectionReveal delay={0.2}>
          <div className="shadow-2xl border border-border bg-gradient-to-b from-background/80 to-background/90 p-12 md:p-16 max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using Nexus Bridge International's services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Use License</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Permission is granted to temporarily download one copy of the materials on Nexus Bridge International's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The materials on Nexus Bridge International's website are provided on an 'as is' basis. Nexus Bridge International makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Limitations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall Nexus Bridge International or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your Privacy Policy is incorporated into these Terms of Service by reference. For more information, please review our Privacy Policy.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Questions about the Terms of Service should be sent to sales@nexusbridgeinternational.com
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
        
        <div className="text-center mt-10">
          <motion.a
            href="/"
            className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground hover:text-primary transition-all duration-300 border-b border-transparent hover:border-primary pb-1 inline-block"
            whileHover={{ scale: 1.05 }}
          >
            Back to Home
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Terms;
