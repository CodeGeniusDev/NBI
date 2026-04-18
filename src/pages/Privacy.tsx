import { motion } from "framer-motion";
import SectionReveal from "../components/SectionReveal";
import watermark from "../assets/watermark.jpg";

const Privacy = () => {
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
          <span className="text-foreground font-medium">Privacy</span>
        </nav>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h1 className="font-display text-4xl md:text-5xl text-foreground tracking-widest mb-1">
            PRIVACY POLICY
          </h1>
          <div className="w-[150px] h-2.5 border-b-2 border-primary rounded-b-full mb-8 ml-1.5"></div>
        </SectionReveal>
        
        <SectionReveal delay={0.2}>
          <div className="shadow-2xl border border-border bg-gradient-to-b from-background/80 to-background/90 p-12 md:p-16 max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Information Collection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, and other relevant information.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Use of Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The information we collect is used to provide, maintain, and improve our services. We may use your information to communicate with you, respond to inquiries, and personalize your experience.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored on secure servers.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may use third-party services that collect, use, and share information to operate our platform. These services have their own privacy policies that we encourage you to review.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at sales@nexusbridgeinternational.com
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

export default Privacy;
