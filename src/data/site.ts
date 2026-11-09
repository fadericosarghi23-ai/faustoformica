// Identità dello studio, contatti (NAP), SEO e dati legali — centralizzati.
export const site = {
  name: 'Fausto Formica',
  brandLead: 'fausto',
  brandStrong: 'formica',
  role: 'Architetto',
  shortName: 'Studio Formica',
  // Frase di posizionamento (home / meta)
  tagline: 'Architettura, interni e design industriale',
  description:
    'Architetto Fausto Formica, Treviglio: architettura e urbanistica, design di interni e design industriale. Studi di fattibilità, progettazione e direzione lavori, coordinamento generale.',
  footerTagline: 'Spazi in evoluzione',

  email: 'info@architettofaustoformica.it',
  phones: ['+39 348 5727818', '+39 0363 303239'],

  address: {
    street: 'Via Fabio Filzi 16 — c/o COW',
    street2: 'Viale Cesare Battisti 43',
    postalCode: '24047',
    locality: 'Treviglio',
    region: 'BG',
    country: 'IT',
  },
  hours: 'Lun – Ven · 9:00–13:00 / 14:00–18:00',

  linkedin: 'https://www.linkedin.com/in/fausto-formica-89709085/',
  maps: 'https://maps.app.goo.gl/xx7nX8xVWXvUpw3BA',

  // Dati professionali / legali
  ordine: 'Ordine degli Architetti P.P.C. di Bergamo — n. 2345',
  certificatore: 'Certificatore energetico Regione Lombardia — n. 21513',

  areaServed: ['Treviglio', 'Provincia di Bergamo', 'Lombardia'],

  // SEO
  url: 'https://architettofaustoformica.it',
  ogImage: '/og.jpg',
  themeColor: '#0a0a0a',
  locale: 'it_IT',
};

// Cosa fa lo studio (profilo / home)
export const services = [
  { name: 'Studi di fattibilità', desc: 'Cosa fare, in quanto tempo e a quali costi.' },
  { name: 'Consulenze tecniche', desc: 'Consulenze immobiliari, verifiche presso gli enti, sopralluoghi e perizie.' },
  { name: 'Consulenze di immagine e commerciali', desc: 'Brochure di vendita, presentazioni multimediali, immagini tridimensionali e fotoinserimenti.' },
  { name: 'Progetti preliminari', desc: 'Raccolta dei dati su necessità ed esigenze e predisposizione di elaborati tecnici di massima.' },
  { name: 'Progetti definitivi', desc: 'Progetto per le autorizzazioni edilizie, progettazione CAD e coordinamento degli altri tecnici.' },
  { name: 'Progetti esecutivi', desc: 'Dettagli costruttivi, computi metrici e capitolati d’appalto per offerte precise e omogenee.' },
  { name: 'Direzione lavori', desc: 'Verifica costante del cantiere, dal profilo tecnico a quello funzionale ed estetico.' },
  { name: 'Coordinamento generale', desc: 'Coordinamento dei tecnici coinvolti, pianificazione dei tempi e assistenza agli appalti.' },
];

export const navItems = [
  { href: '/progetti/', label: 'progetti' },
  { href: '/profilo/', label: 'profilo' },
  { href: '/contatti/', label: 'contatti' },
];
