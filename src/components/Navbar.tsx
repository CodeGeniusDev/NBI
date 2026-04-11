import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/Logo.png";

const navLinks = ["Solutions", "Leadership", "Vision", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);

    setTimeout(() => {
      if (id === "Leadership") {
        window.location.href = "/ceo";
      } else {
        const element = document.getElementById(id.toLowerCase());
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span
          className="font-display text-xl tracking-wider text-primary cursor-pointer flex items-center"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={logo}
            alt="NBI Logo"
            width={50}
            height={50}
            className="ml-2"
          />
          <span className="hidden md:inline text-lg font-semibold">
            NEXUS BRIDGE <span className="text-foreground">INTERNATIONAL</span>
          </span>
          <span className="md:hidden">NBI</span>
        </span>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="font-body text-sm font-light text-industrial transition-colors duration-300 hover:text-primary"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="font-body text-sm font-light text-left text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
