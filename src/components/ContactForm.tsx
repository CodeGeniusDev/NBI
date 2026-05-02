import { useState, FormEvent } from "react";
import SectionReveal from "./SectionReveal";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.3em] text-primary mb-4 italic">TECHNICAL DESK</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 italic">
              INITIATE<br />DIALOGUE
            </h2>
            <p className="font-body text-sm font-light text-muted-foreground leading-relaxed max-w-md mb-10">
              For procurement inquiries, technical consultations, or partnership proposals — our engineering team responds within 24 hours.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-1 h-1 rounded-full bg-primary" />
                <span className="font-body text-sm font-light text-industrial">sales@nexusbridgeinternational.com</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-1 h-1 rounded-full bg-primary" />
                <span className="font-body text-sm font-light text-industrial">176 L block Khayaban e Amin Lahore Pakistan</span>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            {submitted ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <span className="font-display text-2xl text-primary italic">RECEIVED</span>
                  <p className="font-body text-sm font-light text-muted-foreground mt-4">
                    Our technical team will respond within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="font-body text-[10px] tracking-[0.3em] text-industrial block mb-3">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    className="input-gold w-full"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="font-body text-[10px] tracking-[0.3em] text-industrial block mb-3">
                    ORGANIZATION
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    className="input-gold w-full"
                    placeholder="Company or institution"
                  />
                </div>
                <div>
                  <label className="font-body text-[10px] tracking-[0.3em] text-industrial block mb-3">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    className="input-gold w-full"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="font-body text-[10px] tracking-[0.3em] text-industrial block mb-3">
                    INQUIRY TYPE
                  </label>
                  <select
                    required
                    className="input-gold w-full bg-transparent cursor-pointer"
                  >
                    <option value="" className="bg-background">Select category</option>
                    <option value="procurement" className="bg-background">Procurement</option>
                    <option value="technical" className="bg-background">Technical Consultation</option>
                    <option value="partnership" className="bg-background">Partnership</option>
                    <option value="other" className="bg-background">Other</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-[10px] tracking-[0.3em] text-industrial block mb-3">
                    MESSAGE
                  </label>
                  <textarea
                    required
                    maxLength={1000}
                    rows={4}
                    className="input-gold w-full resize-none"
                    placeholder="Describe your requirements"
                  />
                </div>

                <button
                  type="submit"
                  className="font-body text-xs tracking-[0.3em] text-primary border border-primary/30 px-8 py-4 transition-colors duration-500 hover:border-primary hover:bg-primary/5 w-full"
                >
                  SUBMIT INQUIRY
                </button>
              </form>
            )}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
