import { useState } from "react";

const F = "font-['Jost']";

const projects = [
  { id: "01", title: "Palazzo Velasca", location: "Milan", year: "2024", category: "Residential" },
  { id: "02", title: "Karst House", location: "Trieste", year: "2024", category: "Residential" },
  { id: "03", title: "Bureau Merano", location: "South Tyrol", year: "2023", category: "Commercial" },
  { id: "04", title: "Villa Cedroni", location: "Lake Como", year: "2023", category: "Hospitality" },
  { id: "05", title: "Studio Graz", location: "Graz", year: "2022", category: "Commercial" },
  { id: "06", title: "Atelier Lugano", location: "Lugano", year: "2022", category: "Retail" },
];

const services = [
  "Interior Styling",
  "Color Consultation",
  "Space Planning",
  "Sourcing & Procurement",
  "3D Visualizations",
  "Detail Drawings",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <div className={`${F} bg-background text-foreground min-h-screen font-light`}>

      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="text-sm tracking-[0.2em] uppercase font-medium">
            1:20 Studio
          </a>
          <nav className="hidden md:flex gap-10">
            {["Work", "Services", "Studio", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-xs tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden text-xs tracking-widest uppercase"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border px-6 py-6 flex flex-col gap-5 bg-background">
            {["Work", "Services", "Studio", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-xs tracking-[0.18em] uppercase text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {l}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-14 min-h-screen flex flex-col justify-between max-w-5xl mx-auto px-6">
        <div className="flex-1 flex items-center">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-10">
              1:20 Studio — Interior Architecture & Design
            </p>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.1] tracking-tight max-w-2xl">
              We design spaces that endure.
            </h1>
          </div>
        </div>
        <div className="border-t border-border py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs tracking-widest uppercase text-muted-foreground">Est. 2014</p>
          <p className="text-xs tracking-widest uppercase text-muted-foreground">84 Projects — 12 Countries</p>
          <a href="#work" className="text-xs tracking-[0.18em] uppercase hover:text-muted-foreground transition-colors">
            View Work ↓
          </a>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="max-w-5xl mx-auto px-6 py-24">
        <div className="flex items-baseline justify-between border-b border-border pb-4 mb-0">
          <h2 className="text-xs tracking-[0.25em] uppercase">Selected Work</h2>
          <span className="text-xs tracking-widest text-muted-foreground">2022–2024</span>
        </div>
        {projects.map((p) => (
          <div
            key={p.id}
            className="border-b border-border flex items-baseline justify-between py-5 group cursor-pointer hover:bg-secondary transition-colors -mx-6 px-6"
          >
            <div className="flex items-baseline gap-8">
              <span className="text-xs text-muted-foreground w-6">{p.id}</span>
              <span className="text-base sm:text-lg font-light tracking-tight group-hover:translate-x-1 transition-transform inline-block">
                {p.title}
              </span>
            </div>
            <div className="hidden sm:flex items-baseline gap-8 text-xs text-muted-foreground tracking-widest uppercase">
              <span>{p.category}</span>
              <span>{p.location}</span>
              <span>{p.year}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Services */}
      <section id="services" className="border-t border-border max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
          <div>
            <h2 className="text-xs tracking-[0.25em] uppercase mb-4">Services</h2>
          </div>
          <div>
            {services.map((s, i) => (
              <div key={s} className="border-b border-border py-5 flex items-center justify-between group">
                <span className="text-base sm:text-lg font-light tracking-tight">{s}</span>
                <span className="text-xs text-muted-foreground">0{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio */}
      <section id="studio" className="border-t border-border max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
          <div>
            <h2 className="text-xs tracking-[0.25em] uppercase mb-4">Studio</h2>
          </div>
          <div className="space-y-5 text-sm leading-relaxed text-muted-foreground max-w-lg">
            <p>
              1:20 Studio is an interior architecture practice founded in 2014. The name refers to
              the scale at which architecture meets the body — 1 to 20, the drawing scale of the
              detail. We work across residential, commercial, and hospitality projects.
            </p>
            <p>
              We believe interior architecture is the discipline closest to daily life — where light,
              material, and proportion converge into lived experience. Our process is research-led,
              beginning with observation before a single line is drawn.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
          <div>
            <h2 className="text-xs tracking-[0.25em] uppercase mb-4">Contact</h2>
            <div className="space-y-5 text-xs text-muted-foreground leading-relaxed mt-8">
              <p>conna.tsl@gmail.com</p>
              <p>+30 6945169635</p>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="block hover:text-foreground transition-colors">LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="block hover:text-foreground transition-colors">Instagram</a>
            </div>
          </div>
          <div>
            {sent ? (
              <p className="text-sm text-muted-foreground pt-2">
                Thank you — we will respond within two working days.
              </p>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-8 max-w-md"
              >
                {[
                  { key: "name", label: "Name", type: "text" },
                  { key: "email", label: "Email", type: "email" },
                ].map(({ key, label, type }) => (
                  <div key={key} className="border-b border-border pb-2">
                    <input
                      type={type}
                      placeholder={label}
                      required
                      value={form[key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none font-light tracking-wide"
                    />
                  </div>
                ))}
                <div className="border-b border-border pb-2">
                  <textarea
                    rows={4}
                    placeholder="Message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none resize-none font-light tracking-wide"
                  />
                </div>
                <button
                  type="submit"
                  className="text-xs tracking-[0.2em] uppercase border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors duration-200"
                >
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between gap-4">
        <span className="text-xs tracking-[0.2em] uppercase">1:20 Studio</span>
        <span className="text-xs tracking-widest text-muted-foreground">© 2026</span>
      </footer>

    </div>
  );
}
