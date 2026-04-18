import logo from "../assets/Logo.png";
const Footer = () => (
  <footer className="border-t border-border py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
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
        NBI
      </span>
      <p className="font-body text-xs font-light text-muted-foreground tracking-wider">
        © 2024 NEXUS BRIDGE INTERNATIONAL. ALL RIGHTS RESERVED.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <a href="mailto:sales@nexusbridgeinternational.com" className="font-body text-xs font-light text-muted-foreground transition-colors duration-300 hover:text-primary">
          sales@nexusbridgeinternational.com
        </a>
        <div className="flex items-center gap-6">
          <a href="/privacy" className="font-body text-xs font-light text-muted-foreground transition-colors duration-300 hover:text-primary">
            PRIVACY
          </a>
          <a href="/terms" className="font-body text-xs font-light text-muted-foreground transition-colors duration-300 hover:text-primary">
            TERMS
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
