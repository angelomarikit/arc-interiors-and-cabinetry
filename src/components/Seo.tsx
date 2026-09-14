import { useEffect } from "react";
import {
  businessSchema,
  ogDescription,
  seoKeywordList,
  siteDescription,
  siteName,
  siteTitle,
} from "../data/seo";

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

export function Seo() {
  useEffect(() => {
    document.title = siteTitle;

    upsertMeta('meta[name="description"]', { name: "description", content: siteDescription });
    upsertMeta('meta[name="keywords"]', { name: "keywords", content: seoKeywordList });
    upsertMeta('meta[name="author"]', { name: "author", content: siteName });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: siteTitle });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: ogDescription });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: siteName });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: siteTitle });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: ogDescription });

    const schemaId = "business-schema";
    let schema = document.getElementById(schemaId);
    if (!schema) {
      schema = document.createElement("script");
      schema.id = schemaId;
      schema.setAttribute("type", "application/ld+json");
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      ...businessSchema,
      url: `${window.location.origin}/`,
    });
  }, []);

  return null;
}
