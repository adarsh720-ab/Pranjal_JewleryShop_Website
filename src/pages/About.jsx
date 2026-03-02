import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { mobileViewport } from "../lib/animationUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faHandshake,
  faLeaf,
  faAward,
  faGem,
  faShield,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-pearl">
      {/* Hero */}
      <div className="relative pt-28 pb-24 bg-ink overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="font-heading text-xs tracking-[0.4em] uppercase text-gold mb-5">
              Our Story
            </div>
            <h1
              className="font-display font-light text-white"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.1 }}
            >
              The Generations of
              <br />
              <em className="italic text-gold">Excellence</em>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Story section */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={mobileViewport}
          >
            <img
              src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=700&q=85"
              alt="Craftsmanship"
              className="w-full h-[480px] object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={mobileViewport}
          >
            <div className="section-eyebrow mb-4">
              Est. 2015 · Vadgaon (Kapashi Senapati)
            </div>
            <h2 className="font-display text-4xl font-light text-ink mb-6 leading-snug">
              Born of Passion,
              <br />
              Built on Trust
            </h2>
            <div className="space-y-4 text-charcoal text-sm leading-relaxed font-light">
              <p>
                Pranjal Enterprise was established in 2015 with a vision to
                deliver quality craftsmanship and dependable service in the
                jewelry industry. What began as a focused business venture has
                grown into a trusted name, serving clients as a manufacturer,
                retailer, and wholesaler committed to excellence.
              </p>

              <p>
                Driven by dedication and attention to detail, Pranjal Enterprise
                combines skilled workmanship with customer-focused values. Every
                piece reflects precision, consistency, and care, ensuring that
                our jewelry meets the expectations of modern customers while
                maintaining timeless appeal.
              </p>

              <p>
                We believe jewelry is more than an ornament — it represents
                moments, emotions, and lasting memories. With complete client
                satisfaction at the heart of everything we do, each creation is
                crafted to celebrate stories that stay with you forever.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-ivory">
              {[
                ["11+", "Years"],
                ["10K+", "Families"],
                ["50", "Artisans"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl text-ink font-light">
                    {n}
                  </div>
                  <div className="font-heading text-xs tracking-widest uppercase text-stone mt-1">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <div className="text-center mb-14">
            <div className="section-eyebrow mb-3">What We Stand For</div>
            <h2 className="font-display text-4xl font-light text-ink">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: faFlask,
                name: "Purity",
                desc: "Uncompromising standards in material selection. Only the finest certified metals and ethically sourced gemstones pass through our doors.",
              },
              {
                icon: faHandshake,
                name: "Trust",
                desc: "Over 10,000 families have chosen Lumière for their most cherished moments. That trust defines everything we do and every decision we make.",
              },
              {
                icon: faLeaf,
                name: "Sustainability",
                desc: "We are committed to responsible practice at every step — from sourcing raw materials to our minimal, recyclable packaging.",
              },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={mobileViewport}
                transition={{ delay: i * 0.12 }}
                className="bg-white border border-ivory p-8 text-center"
              >
                <div className="mb-5">
                  <FontAwesomeIcon
                    icon={v.icon}
                    className="text-[#C4A35A] text-3xl"
                  />
                </div>
                <h3 className="font-heading text-sm tracking-widest uppercase text-ink mb-3">
                  {v.name}
                </h3>
                <p className="text-stone text-sm leading-relaxed font-light">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20 py-16 border-y border-ivory">
          <div className="text-center mb-12">
            <div className="section-eyebrow mb-3">Trusted & Certified</div>
            <h2 className="font-display text-3xl font-light text-ink">
              Our Credentials
            </h2>
            <div className="gold-line max-w-12 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: faAward,
                label: "BIS Hallmark Certified",
                desc: "Government certified purity standard",
              },
              {
                icon: faGem,
                label: "GIA Certified Diamonds",
                desc: "World's foremost gem institute",
              },
              {
                icon: faShield,
                label: "Responsible Jewellery Council",
                desc: "Ethical & sustainable practices",
              },
              {
                icon: faCertificate,
                label: "ISO 9001:2015",
                desc: "International quality management",
              },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={mobileViewport}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-ivory p-6 text-center hover:shadow-md hover:border-[#C4A35A] transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-pearl rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C4A35A]/10 transition-colors duration-300">
                  <FontAwesomeIcon
                    icon={c.icon}
                    className="text-[#C4A35A] text-2xl"
                  />
                </div>
                <h3 className="font-heading text-xs tracking-widest uppercase text-ink mb-2 leading-relaxed">
                  {c.label}
                </h3>
                <p className="text-stone text-xs font-light leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
