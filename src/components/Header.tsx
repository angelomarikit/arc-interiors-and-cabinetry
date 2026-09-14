import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";

const links = ["Home", "About", "Spaces", "Projects", "Contact"];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.body.classList.toggle("menu-open", open);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled || open ? "is-solid" : ""}`}>
      <a className="brand" href="#home" aria-label="ARC Interiors and Cabinetry home">
        <BrandMark />
        <span>ARC <small>Interiors &amp; Cabinetry</small></span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => (
          <a href={`#${link.toLowerCase()}`} key={link}>{link}</a>
        ))}
      </nav>

      <a className="header-cta" href="#contact">Get a quote</a>
      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </button>

      <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {links.map((link, index) => (
            <a href={`#${link.toLowerCase()}`} key={link} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              <span>0{index + 1}</span>{link}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <a href="tel:09456512620" tabIndex={open ? 0 : -1}>0945 651 2620</a>
          <p>Pasig · Biñan, Laguna</p>
        </div>
      </div>
    </header>
  );
}
