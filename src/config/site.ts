/* ============================================================
   IDENTITÀ — contenuti reali (Architetto Fausto Formica).
   Migrazione del sito architettofaustoformica.it da Flazio ad Astro.
   ============================================================ */
export const site = {
  // nome e marchio
  name: "Architetto Fausto Formica",
  wordmarkTop: "architetto",
  wordmarkBottom: "faustoformica",
  tagline: "Architettura · Treviglio",

  // contatti
  email: "info@architettofaustoformica.it",
  phonePrimary: "+39 348 5727818",
  phoneSecondary: "+39 0363 303239",
  city: "Treviglio",

  // indirizzi
  addressStudio: "Viale Cesare Battisti 43 — Treviglio (BG)",
  addressCoworking: "c/o COW, Via Fabio Filzi 16 — Treviglio (BG)",
  addressLegal: "Via San Martino, 24047 Treviglio (BG)",

  // orari ufficio
  orari: [
    { giorno: "lunedì", ore: "9:00 – 13:00 · 14:00 – 18:00" },
    { giorno: "martedì", ore: "9:00 – 13:00 · 14:00 – 18:00" },
    { giorno: "mercoledì", ore: "9:00 – 13:00 · 14:00 – 18:00" },
    { giorno: "giovedì", ore: "9:00 – 13:00 · 14:00 – 18:00" },
    { giorno: "venerdì", ore: "9:00 – 13:00 · 14:00 – 18:00" },
  ],

  // dati legali
  registration:
    "Iscritto all'Ordine degli Architetti P.P.C. di Bergamo col n. 2345 e all'Albo dei Soggetti certificatori della Regione Lombardia col n. 21512",
  companyName: "Fausto Salvatore Formica",
  piva: "", // non pubblicata sul sito originale
  pec: "",

  // tecnici
  domain: "architettofaustoformica.it",

  // social (lascia "" per nasconderli)
  social: { instagram: "", facebook: "", linkedin: "" },
};

/* NAVIGAZIONE */
export const nav = [
  { label: "home", href: "/" },
  { label: "profilo", href: "/profilo" },
  {
    label: "progetti",
    href: "#",
    children: [
      { label: "design industriale", href: "/design-industriale" },
      { label: "design di interni", href: "/design-di-interni" },
      { label: "architettura e urbanistica", href: "/architettura-e-urbanistica" },
    ],
  },
  { label: "contatti", href: "/contatti" },
];
