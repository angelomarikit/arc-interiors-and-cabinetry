export const seoKeywords = [
  "House Renovation",
  "Modular Cabinet",
  "Modular Cabinet Maker",
  "Modular Cabinets Philippines",
  "DMCI Condo Renovation",
  "Condo Renovation",
  "ARC Interiors",
  "ARC",
] as const;

export const seoKeywordList = seoKeywords.join(", ");

export const siteName = "ARC Interiors & Cabinetry";
export const siteTitle =
  "ARC Interiors & Cabinetry | House Renovation, Modular Cabinets & Condo Renovation Philippines";
export const siteDescription =
  "ARC Interiors & Cabinetry (ARC) is a modular cabinet maker offering house renovation, condo renovation, DMCI condo renovation, and modular cabinets in the Philippines. Custom interiors and cabinetry in Pasig and Biñan, Laguna.";
export const ogDescription =
  "ARC Interiors: house renovation, modular cabinets, condo renovation, and DMCI condo interiors in the Philippines.";

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: siteName,
  alternateName: ["ARC Interiors", "ARC", "ARC Interiors & Cabinetry"],
  description: siteDescription,
  founder: "Ernie Arcilla",
  telephone: "09456512620",
  email: "erniearcilla@gmail.com",
  keywords: seoKeywordList,
  knowsAbout: [...seoKeywords],
  areaServed: {
    "@type": "Country",
    name: "Philippines",
  },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Satori Residences, F. Pasco Avenue, Santolan",
      addressLocality: "Pasig",
      addressCountry: "PH",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "41 Ginger St., Jubilation South",
      addressLocality: "Biñan",
      addressRegion: "Laguna",
      addressCountry: "PH",
    },
  ],
} as const;
