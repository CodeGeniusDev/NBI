import { motion } from "framer-motion";
import SectionReveal from "../components/SectionReveal";
import watermark from "../assets/watermark.jpg";

const Ceo = () => {
  const industries = ["Textiles", "Sugar", "Beverages", "Engineering Products"];

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
          width: "400px",
          height: "400px",
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
          <span className="text-foreground font-medium">CEO</span>
        </nav>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h1 className="font-display text-4xl md:text-5xl text-foreground tracking-widest mb-1">
            NAIRA USMAN
          </h1>
          <div className="w-[150px] h-2.5 border-b-2 border-primary rounded-b-full mb-8 ml-1.5"></div>
        </SectionReveal>
        
        <SectionReveal delay={0.2}>
          <div 
            className="shadow-2xl border border-border p-12 md:p-16 max-w-3xl mx-auto"
            style={{
              border: '1px solid rgba(212, 175, 55, 0.15)',
              background: 'linear-gradient(180deg, rgba(20, 20, 20, 0.8) 0%, rgba(5, 5, 5, 0.9) 100%)'
            }}
          >
            <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
              Naira Usman is a highly accomplished professional with a distinguished career spanning over 15 years of cross-functional leadership within Pakistan's industrial landscape. With a solid foundation in advanced education, she has developed a versatile expertise that bridges the gap between technical engineering and human capital development.
            </p>
            <p className="mb-4 text-muted-foreground text-lg">
              Her extensive portfolio includes significant contributions to several of the country's most vital sectors, most notably:
            </p>
            <ul className="list-none ml-2 mb-6 text-primary space-y-1 font-bold tracking-widest uppercase text-sm">
              {industries.map((industry, index) => (
                <motion.li
                  key={industry}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {industry}
                </motion.li>
              ))}
            </ul>
            <p className="leading-relaxed text-muted-foreground text-lg">
              Throughout her tenure, Naira has excelled in navigating the complexities of industrial operations. Beyond her technical acumen, she is a recognized expert in Human Resource Management and Corporate Training, consistently driving organizational growth by aligning engineering excellence with strategic talent development. Her unique ability to manage both the mechanical and human elements of an enterprise makes her a formidable asset in today's diverse industrial economy.
            </p>
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

export default Ceo;
