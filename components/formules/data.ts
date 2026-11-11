export type Pack = {
  id: string;
  type: "solo" | "duo";
  title: string;
  price: string;
  duration: string;
  categoryLabel: string;
  description: string;
  features: string[];
  isHighlighted?: boolean;
  highlightText?: string;
  image: string;
};

export const packs: Pack[] = [
  // --- PACKS INDIVIDUELS ---
  {
    id: "evasion-terreia",
    type: "solo",
    title: "Évasion Terreia",
    price: "115€",
    duration: "90 minutes",
    categoryLabel: "Initiation Végétale",
    description: "Une première respiration profonde pour dénouer les tensions citadines et retrouver un tonus naturel.",
    features: [
      "Thermes & Vapeur : 40 min d'accès sauna d'argile & bassin tiède",
      "Massage Signature : 50 min aux baumes de lavande sauvage",
      "Infusion Botanique : Dégustation d'herboristerie personnalisée",
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqLAJzhNyKuwsBINT9PrI2V8CHrCwR-So5cdtAsBig1G9y3a9aVP0YVjxJV28Q0OiLZH4fkH9R1PBXXS_tIToDe4YogQKPUTKO3948v6-guAscOFmgHdjBE7HzmU95NF3OXdXLdcP2jlbxijHa93bld49KiLIDNJw732AqsUqaM8_H566o1p-XduIhBPscqe9ZzHJqLWuL0iydnwwN0MsgdtyK_0aSFNnaSkMnoTYg",
  },
  {
    id: "rituel-serenite",
    type: "solo",
    title: "Rituel Sérénité",
    price: "175€",
    duration: "150 minutes (2h30)",
    categoryLabel: "Harmonie Complète",
    description: "Une immersion globale libérant le mental et peaufinant le corps grâce à l'association gommage et massage chaud.",
    features: [
      "Bains Thermiques : 45 min accès libre aux 3 bassins minéraux",
      "Gommage Camarguais : 30 min aux cristaux de sel et romarin",
      "Grand Massage : 60 min délassant à l'huile d'amande douce",
      "Infusion & Mignardise : Comptoir Terreia Saveur",
    ],
    isHighlighted: true,
    highlightText: "Le Rituel le plus plébiscité",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBB_8u1rTZbhDKq-Jbfezv4M-CLUiOemQMr9UxIe3ZPw1S2_Q-q_eRpOzXpjHEUQnE-5gkP2-B5HUrqjB6GjS8XeXhuzOQTaJdBTcIZb1BdwdRIgv_9QDBD36OigEnnWLqIiDGfp2jtsMz7W4L-x5BXOq4wFDFxdZgPtgzu7IMTcllIO4aXpxCluhMU4dMu15RRbepNXLUde4fhmMWOM8JpTI_LNVpXT6yVADmmSH5S",
  },
  {
    id: "journee-harmonie",
    type: "solo",
    title: "Journée Harmonie",
    price: "280€",
    duration: "4h30",
    categoryLabel: "Expérience Ultime",
    description: "Une demi-journée d'abandon total. Soins holistiques approfondis, bain sonore et déjeuner végétal gastronomique.",
    features: [
      "Accès VIP Illimité : Espace thermes & salle de repos saline",
      "Gommage & Enveloppement : 45 min argile verte & fleur d'oranger",
      "Massage Haute Couture : 75 min sur-mesure aux pierres chaudes",
      "Déjeuner Vivant Terreia : Menu 3 temps & jus d'herbes pressé",
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjLlgGAiwF2HfOBxiawpg37Fs2_Xo-s-RSu8Q_cKb0pSF-PmI-aL-kXH4oh3OGcixDEoxFhBvqqQaF1DDKqbX20P2VJzVrw9BSsXrBBlfrwPPRR1JOIT43taf2gzBAc9i6dkLrzO8dd_yhSDCUIJg2bfS50RUfyCJYanXv_97vqXJjGYLA_QtNVOeUgIBIqKE_K_jrWJQtQBcOupKNMljlWfA5AcgV3md1EEFJIvHF",
  },

  // --- PACKS DUO ---
  {
    id: "duo-complicite",
    type: "duo",
    title: "Duo Complicité",
    price: "260€",
    duration: "105 minutes",
    categoryLabel: "Partage & Détente",
    description: "Une parenthèse intime en cabine double pour relâcher les tensions côte à côte au parfum de verveine fraîche.",
    features: [
      "Accès Bassins & Hammam : 45 min en immersion sensorielle",
      "Massage Duo Harmonique : 60 min synchronisé aux huiles tièdes",
      "Rituel des Tisanes : Service au salon feutré",
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCT_SFxTD1ANf_oKHsat3ytaf-kmTjwhhPrC8Sx5ErJU1FRJt9c9_jj_QIu6s_FLDVCvMDP8mSg3QjE5_rtJdLGxLXGLqH7F1aqWTCzn863QyUt_qsXNWqdJdQEo-j_zMmcAPSoYIXcQh453xUWU1GOSZi4sTYreIM905_WD-CKHTC-5BxcDB_TqF2Y4Ae6UGRWLAvDY7p9mk7fkOp1Y65_AF-PBAyfWYQoJsjrysUf",
  },
  {
    id: "duo-evasion",
    type: "duo",
    title: "Duo Évasion",
    price: "320€",
    duration: "2h30",
    categoryLabel: "Suite Privative",
    description: "Un voyage exclusif dans notre Suite Botanique privée : jacuzzi privatif, exfoliation et modelage profond.",
    features: [
      "Suite Privative avec Bain : 45 min en jacuzzi aux pétales",
      "Gommage Sucre & Miel : 30 min lissant revitalisant",
      "Massage Duo Balinais : 60 min détoxifiant profond",
      "Coupes d'Élixir Pétillant : Fruits séchés et nectars",
    ],
    isHighlighted: true,
    highlightText: "L'Échappée Romantique",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4rfEcPHi5VWAvZhuI5KJwr7JPrh4xMM7uA1CXOQFkN5Tak1kZRV2rrA_fPNzkUmjoi--FLPee5bfAd9bUIxTenU7lQVwNcnuvAZIpr3M3OqXEzrX7eHiwtTzziakuynuf0Aj_Hs_OlvbXA9CwIEWhAdjQI8P3iQGxh8JgnzUQJfPh7duejMUPOunm-kvALpMESLckX6acam9ewApwqT8ib6EA7rmsbCfbUNrgz_Tt",
  },
  {
    id: "duo-gourmandise",
    type: "duo",
    title: "Duo Bien-être & Gourmandise",
    price: "390€",
    duration: "4h00",
    categoryLabel: "Festin Sensoriel",
    description: "La quintessence de l'art de vivre : thermes, massage d'exception et déjeuner bistronomique Terreia Saveur.",
    features: [
      "Accès Spa Privilège : 60 min aux bains chauffés & halothérapie",
      "Massage Duo Signature : 75 min à l'huile précieuse d'immortelle",
      "Déjeuner Bistronomique : Menu accords mets et tisanes Terreia",
      "Cadeau Botanique : Coffret duo d'élixirs à emporter",
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNYAxqJkeUgW3-jsuDnrC2lcYg8UoRoerT5Ee3ujQFcaUIQUsJaUVTUK9UU8hbxQJx9Hjhn_C-O_NLp1dJI05M2RcbO27IZ9vfUVhMDzj3EHDEGssmUG8SaRfR0Tx-jaRDgSqGGpmWeUDDMxQcYVdb-WOLkVKz_n0jnoDizXZlVrPaiSRWQ7rCe6tbt7SOQ_k5e4eKeXcthLUx33Z1Cf8PzbzyXGHy0qc7id7i3ujJ",
  }
];