import { useRef } from "react";
import { ArrowUpRight, Mail, MapPin, Phone, Send, X } from "lucide-react";

const principles = [
  ["Function", "Spaces should be practical, organized, and shaped around the rhythms of daily use."],
  ["Craft", "Cabinetry and interior elements should feel intentional, clean, and integrated with the room."],
  ["Timelessness", "A restrained design approach keeps each space visually relevant beyond short-term trends."],
];

const process = [
  ["Consultation", "Discuss the space, requirements, preferences, and overall project direction."],
  ["Planning", "Review the available area and define the layout and cabinetry requirements."],
  ["Design", "Develop the visual direction, storage solutions, materials, and details."],
  ["Execution", "Bring the approved design into the actual space with care and precision."],
];

export function Philosophy() {
  return (
    <section className="section philosophy">
      <div className="container">
        <div className="section-intro split-heading">
          <div><p className="eyebrow">Our approach</p><h2>Designed around<br /><em>your space.</em></h2></div>
          <p>Good interiors do more than look considered. They make daily life feel simpler, calmer, and more intentional.</p>
        </div>
        <div className="principles">
          {principles.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section process-section">
      <div className="container process-grid">
        <div className="process-title"><p className="eyebrow light">How we work</p><h2>From first idea<br />to finished space.</h2></div>
        <div className="process-steps">
          {process.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-image">
          <img src="/images/projects/living-dining/living-dining-living-fa-gallery.webp" alt="Living and dining interior designed by ARC Interiors & Cabinetry" width="2500" height="1600" loading="lazy" />
        </div>
        <div className="about-copy">
          <p className="eyebrow">About the studio</p>
          <h2>Interiors that work beautifully.</h2>
          <p>ARC Interiors &amp; Cabinetry is an interior design studio that specializes in providing high-quality interior design solutions, fitting out, and cabinetry. Our team of expert designers and craftsmen will work closely with you to create customized design plans that reflect your unique style and preferences.</p>
          <p>Whether you are looking to update a single room or completely overhaul your entire space, we are here to help. At ARC Interiors, we offer free design consultation and estimate to help you get started on your dream project.</p>
          <a className="text-link" href="#contact">Start a conversation <ArrowUpRight /></a>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const pasigMap = "https://www.google.com/maps/search/?api=1&query=Satori+Residences+F.+Pasco+Avenue+Santolan+Pasig";
  const binanMap = "https://www.google.com/maps/search/?api=1&query=41+Ginger+Street+Jubilation+South+Binan+Laguna";
  const contactDialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <section className="contact-cta">
        <div className="container">
          <p className="eyebrow light">Your space, considered</p>
          <h2>Planning your<br /><em>next space?</em></h2>
          <p>Let’s discuss how ARC Interiors &amp; Cabinetry can help shape your home or interior project.</p>
          <div>
            <button className="button button-light" type="button" onClick={() => contactDialog.current?.showModal()}>
              <Phone /> Call us directly
            </button>
            <a className="text-link light" href="#contact">View locations</a>
          </div>
        </div>
      </section>

      <dialog
        className="contact-dialog"
        ref={contactDialog}
        aria-labelledby="contact-dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <div className="contact-dialog-card">
          <button className="contact-dialog-close" type="button" aria-label="Close contact information" onClick={() => contactDialog.current?.close()}>
            <X />
          </button>
          <p className="eyebrow">Direct contact</p>
          <h2 id="contact-dialog-title">Talk with<br /><em>ARC Interiors.</em></h2>
          <p>Call or email ARC Interiors &amp; Cabinetry directly using the details below.</p>
          <div className="contact-dialog-links">
            <a href="tel:09456512620">
              <span><Phone /></span>
              <small>Phone number</small>
              <strong>0945 651 2620</strong>
            </a>
            <a href="mailto:erniearcilla@gmail.com">
              <span><Mail /></span>
              <small>Email address</small>
              <strong>erniearcilla@gmail.com</strong>
            </a>
          </div>
        </div>
      </dialog>

      <section className="section contact-section" id="contact">
        <div className="container contact-form-grid">
          <div className="contact-intro">
            <p className="eyebrow">Project inquiry</p>
            <h2>Tell us about<br /><em>your space.</em></h2>
            <p>Share a few details about the space you are planning. Your inquiry will be sent directly to our Planning and Design team.</p>
            <div className="direct-contact">
              <small>Prefer to call?</small>
              <a href="tel:09456512620"><Phone /> 0945 651 2620</a>
            </div>
          </div>
          <form className="inquiry-form" action="https://formsubmit.co/erniearcilla@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="New ARC Interiors & Cabinetry Project Inquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input className="form-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" hidden />
            <div className="form-row">
              <label>
                <span>Name *</span>
                <input type="text" name="name" autoComplete="name" required placeholder="Your full name" />
              </label>
              <label>
                <span>Phone number *</span>
                <input type="tel" name="phone" autoComplete="tel" required placeholder="Your contact number" />
              </label>
            </div>
            <label>
              <span>Email address *</span>
              <input type="email" name="email" autoComplete="email" required placeholder="you@example.com" />
            </label>
            <label>
              <span>Space you are planning</span>
              <select name="space" defaultValue="">
                <option value="" disabled>Select a space</option>
                <option>Bedroom</option>
                <option>Cabinets</option>
                <option>Kitchen</option>
                <option>Living Room / Dining Room</option>
                <option>Toilet</option>
                <option>House Renovation</option>
                <option>Condo Renovation</option>
                <option>DMCI Condo Renovation</option>
                <option>Modular Cabinet</option>
                <option>Other interior space</option>
              </select>
            </label>
            <label>
              <span>Questions or project details *</span>
              <textarea name="message" required rows={6} placeholder="Tell us about your space, requirements, or questions." />
            </label>
            <button className="button form-submit" type="submit">Send inquiry <Send /></button>
            <p className="form-note">By submitting, you agree to be contacted regarding your inquiry.</p>
          </form>
        </div>
        <div className="container contact-locations">
          <address>
            <small>Pasig</small>
            <p>Satori Residences<br />F. Pasco Avenue<br />Santolan, Pasig</p>
            <a href={pasigMap} target="_blank" rel="noreferrer"><MapPin /> Open in Google Maps</a>
          </address>
          <address>
            <small>Biñan, Laguna</small>
            <p>41 Ginger St.<br />Jubilation South<br />Biñan, Laguna</p>
            <a href={binanMap} target="_blank" rel="noreferrer"><MapPin /> Open in Google Maps</a>
          </address>
        </div>
      </section>
    </>
  );
}
