import { MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { faqs } from "../data/content";

export function Footer() {
  const links = ["Home", "About", "Spaces", "Projects", "Contact"];
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="brand" href="#home"><img src="/images/brand/arc-mark.png" alt="" width="50" height="50" /><span>ARC <small>Interiors &amp; Cabinetry</small></span></a>
          <p>Custom interiors and cabinetry designed around function, aesthetics, and everyday living.</p>
        </div>
        <nav aria-label="Footer navigation"><small>Navigation</small>{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}</nav>
        <div className="footer-contact"><small>Contact</small><a href="tel:09456512620">0945 651 2620</a><p>Satori Residences, F. Pasco Avenue,<br />Santolan, Pasig</p><p>41 Ginger St., Jubilation South,<br />Biñan, Laguna</p></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} ARC Interiors &amp; Cabinetry.</span><span>All rights reserved.</span></div>
    </footer>
  );
}

export function FAQWidget() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="faq-widget">
      {open && (
        <div className="widget-panel" ref={panelRef} tabIndex={-1} role="dialog" aria-modal="false" aria-labelledby="widget-title">
          <div className="widget-head">
            <div><small>Quick answers</small><h2 id="widget-title">How can we help?</h2></div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close questions"><X /></button>
          </div>
          <div className="widget-questions">
            {faqs.slice(0, 8).map((faq, index) => (
              <button key={faq.question} type="button" onClick={() => setActive(active === index ? null : index)} aria-expanded={active === index}>
                <span>{faq.question}</span><b>{active === index ? "−" : "+"}</b>
                {active === index && <small>{faq.short}</small>}
              </button>
            ))}
          </div>
          <a href="tel:09456512620" className="widget-call"><Phone /> Call 0945 651 2620</a>
        </div>
      )}
      <button className="widget-trigger" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        {open ? <X /> : <MessageCircle />}<span>{open ? "Close" : "Questions?"}</span>
      </button>
    </div>
  );
}
