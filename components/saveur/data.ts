export type MenuItem = {
  id: string;
  category: "boissons" | "tisanes" | "jus" | "collations" | "repas";
  title: string;
  tags: { label: string; color: string }[];
  description: string;
  vertus: string;
  price: string;
  unit: string;
};

export const categories = [
  { id: "all", label: "Carte Complète" },
  { id: "boissons", label: "Eaux Florales & Rosées" },
  { id: "tisanes", label: "Tisanes Botaniques" },
  { id: "jus", label: "Jus Pressés à Froid" },
  { id: "collations", label: "Collations Saines" },
  { id: "repas", label: "Repas Vitalité" },
];

export const menuItems: MenuItem[] = [
  // BOISSONS
  {
    id: "b1",
    category: "boissons",
    title: "Eau de Rosée de Damas",
    tags: [
      { label: "Cellulaire Glow", color: "bg-secondary-container/70 text-on-secondary-container" },
      { label: "100% Bio", color: "bg-surface-container-highest text-on-surface-variant" }
    ],
    description: "Distillation à la vapeur de pétales de rose fraîche de Damas, perles de chia texturées et zeste de bergamote confit à froid.",
    vertus: "régénération cutanée, harmonisation des émotions, apaisement de l'esprit.",
    price: "6.00 €",
    unit: "25 cl"
  },
  {
    id: "b2",
    category: "boissons",
    title: "Kombucha Artisanal Citronnelle",
    tags: [
      { label: "Microbiote", color: "bg-primary-container/40 text-on-primary-container" },
      { label: "Vegan", color: "bg-surface-container-highest text-on-surface-variant" }
    ],
    description: "Fermentation de 21 jours sur socle de thé vert Sencha, bâtons de citronnelle sauvage et gingembre bleu de Madagascar.",
    vertus: "vitalité digestive, probiotiques vivants non pasteurisés.",
    price: "7.50 €",
    unit: "33 cl"
  },
  {
    id: "b3",
    category: "boissons",
    title: "Lait d'Or Ayurvédique",
    tags: [
      { label: "Ayurvéda", color: "bg-secondary-fixed text-on-secondary-fixed-variant" },
      { label: "Sans Gluten", color: "bg-surface-container-highest text-on-surface-variant" }
    ],
    description: "Lait végétal d'amandes germées maison, racine fraîche de curcuma râpée, poivre noir de Kampot, cannelle de Ceylan et filet d'agave sauvage.",
    vertus: "puissant anti-inflammatoire naturel, relaxation musculaire post-bain.",
    price: "8.00 €",
    unit: "Service chaud"
  },

  // TISANES
  {
    id: "t1",
    category: "tisanes",
    title: "Élixir Sérénité Malgache",
    tags: [
      { label: "Sommeil Profond", color: "bg-surface-container-highest text-on-surface-variant" },
      { label: "100% Bio", color: "bg-primary-container/40 text-on-primary-container" }
    ],
    description: "Fleurs de camomille matricaire entière, mélisse citronnée fraîche, gousse de vanille Bourbon fendue et touches de lavande fine de Provence.",
    vertus: "détente nerveuse, idéal avant ou après le Bain Sonore.",
    price: "7.00 €",
    unit: "Théière fonte"
  },
  {
    id: "t2",
    category: "tisanes",
    title: "Infusion Détox Forêt Sacrée",
    tags: [
      { label: "Drainage Hépatique", color: "bg-secondary-container/70 text-on-secondary-container" },
      { label: "Plantes Sauvages", color: "bg-surface-container-highest text-on-surface-variant" }
    ],
    description: "Romarin sauvage du Luberon, feuilles d'artichaut pourpre, pissenlit doré et écorce d'orange amère séchée au soleil.",
    vertus: "élimination des toxines, stimulation de la circulation lymphatique.",
    price: "7.00 €",
    unit: "Théière fonte"
  },
  {
    id: "t3",
    category: "tisanes",
    title: "Thé Blanc Impérial Jasmin",
    tags: [
      { label: "Antioxydant Rare", color: "bg-secondary-fixed text-on-secondary-fixed-variant" },
      { label: "Grand Cru", color: "bg-surface-container-highest text-on-surface-variant" }
    ],
    description: "Bourgeons argentés cueillis à l'aube, parfumés sur sept nuits consécutives au contact de fleurs de jasmin fraîches.",
    vertus: "régénération de l'ADN cellulaire, douceur veloutée inégalée.",
    price: "8.50 €",
    unit: "Cérémonie Gong Fu"
  },

  // JUS
  {
    id: "j1",
    category: "jus",
    title: "Éclat Vert Pure Vitalité",
    tags: [
      { label: "Alcalinisant", color: "bg-primary-container/40 text-on-primary-container" },
      { label: "Vegan", color: "bg-surface-container-highest text-on-surface-variant" }
    ],
    description: "Concombre noa pressé, céleri branche croquant, pomme granny crue, jeunes pousses d'épinard, persil plat et citron vert pressé minute.",
    vertus: "recharge immédiate en magnésium, oxygénation des tissus musculaires.",
    price: "9.00 €",
    unit: "30 cl"
  },
  {
    id: "j2",
    category: "jus",
    title: "Rayon de Soleil Antioxydant",
    tags: [
      { label: "Cellulaire Glow", color: "bg-secondary-fixed text-on-secondary-fixed-variant" },
      { label: "100% Bio", color: "bg-surface-container-highest text-on-surface-variant" }
    ],
    description: "Carotte pourpre et carotte des sables, orange sanguine de Sicile, racine de curcuma frais pressé et huile de lin première pression à froid.",
    vertus: "préparation solaire de l'épiderme, éclat du teint, soutien immunitaire.",
    price: "9.00 €",
    unit: "30 cl"
  },

  // COLLATIONS
  {
    id: "c1",
    category: "collations",
    title: "Bowl d'Açaï & Granola Sauvage",
    tags: [
      { label: "Vegan", color: "bg-primary-container/40 text-on-primary-container" },
      { label: "Sans Gluten", color: "bg-surface-container-highest text-on-surface-variant" }
    ],
    description: "Pulpe crue d'açaï sauvage d'Amazonie mixée aux myrtilles des sous-bois, sarrasin toasté, éclats de fèves de cacao cru Criollo et baies de goji.",
    vertus: "richesse prodigieuse en polyphénols, satiété légère et stimulante.",
    price: "11.00 €",
    unit: "Céramique artisanale"
  },
  {
    id: "c2",
    category: "collations",
    title: "Tartine Graines & Avocat Épicé",
    tags: [
      { label: "Ayurvéda", color: "bg-secondary-fixed text-on-secondary-fixed-variant" },
      { label: "100% Bio", color: "bg-surface-container-highest text-on-surface-variant" }
    ],
    description: "Pain au levain naturel ancien fermenté 36h, écrasé d'avocat Hass au piment d'Espelette, graines de chanvre décortiquées et pousses fraîches de radis pourpre.",
    vertus: "acides gras essentiels oméga-3 et 9 protecteurs vasculaires.",
    price: "12.50 €",
    unit: "Pains ancestraux"
  },
  {
    id: "c3",
    category: "collations",
    title: "Truffes Datte & Cardamome",
    tags: [
      { label: "Raw Food", color: "bg-secondary-container/70 text-on-secondary-container" },
      { label: "Vegan", color: "bg-surface-container-highest text-on-surface-variant" }
    ],
    description: "Trio de bouchées crues composées de pâte de dattes Medjool royales, purée de noisettes torréfiées doucement, graines de cardamome verte pilée et poudre de matcha.",
    vertus: "apport immédiat d'énergie lente, zéro pic glycémique.",
    price: "6.50 €",
    unit: "Portion 3 pièces"
  },

  // REPAS
  {
    id: "r1",
    category: "repas",
    title: "Assiette Botanique Terreia",
    tags: [
      { label: "Signature", color: "bg-primary-container/40 text-on-primary-container" },
      { label: "Cellulaire Glow", color: "bg-secondary-fixed text-on-secondary-fixed-variant" },
      { label: "Sans Gluten", color: "bg-surface-container-highest text-on-surface-variant" }
    ],
    description: "Légumes anciens rôtis au four d'argile à basse température, quinoa tricolore aux herbes du cloître, houmous soyeux de pois chiches au tahini noir, fleurs comestibles et vinaigrette vivante au vinaigre de cidre non filtré.",
    vertus: "équilibre acido-basique parfait, plénitude digestive et régénération tissulaire.",
    price: "19.00 €",
    unit: "Plat complet"
  },
  {
    id: "r2",
    category: "repas",
    title: "Bouillon Clair Vitalisant Shiitake & Miso",
    tags: [
      { label: "Immuno-Stimulant", color: "bg-secondary-container/70 text-on-secondary-container" },
      { label: "Vegan", color: "bg-surface-container-highest text-on-surface-variant" }
    ],
    description: "Infusion lente d'algues kombu bretonnes, champignons shiitake frais séchés, miso blanc de riz non pasteurisé, tofu soyeux bio et filaments de cébettes fraîches.",
    vertus: "renforcement de la flore intestinale, réchauffement profond de l'organisme.",
    price: "17.00 €",
    unit: "Grand bol vapeur"
  }
];