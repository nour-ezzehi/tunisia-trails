export type Destination = {
  id: string;
  name: string;
  region: string;
  category: string[];
  description: string;
  image: string;
  ecoScore: number;
  rating: number;
  reviewCount: number;
  isHiddenGem: boolean;
  culturalSignificance: string;
  sustainabilityNote: string;
};

export const destinations: Destination[] = [
  {
    id: "sidi-bou-said",
    name: "Sidi Bou Said",
    region: "North",
    category: ["cultural", "historical"],
    description: "An enchanting clifftop village with iconic blue-and-white architecture overlooking the Mediterranean.",
    image: "sidi-bou-said",
    ecoScore: 82,
    rating: 4.8,
    reviewCount: 342,
    isHiddenGem: false,
    culturalSignificance: "A major cultural hub since the 13th century, known for its Andalusian-influenced architecture.",
    sustainabilityNote: "Pedestrian-friendly village with minimal vehicle access.",
  },
  {
    id: "dougga",
    name: "Dougga",
    region: "North",
    category: ["historical"],
    description: "One of the best-preserved Roman towns in North Africa, a UNESCO World Heritage Site.",
    image: "dougga",
    ecoScore: 91,
    rating: 4.9,
    reviewCount: 187,
    isHiddenGem: false,
    culturalSignificance: "Features remarkably intact Roman temples, theaters, and public baths dating back to the 2nd century.",
    sustainabilityNote: "Low-impact archaeological site with strict preservation guidelines.",
  },
  {
    id: "matmata",
    name: "Matmata",
    region: "South",
    category: ["cultural", "nature"],
    description: "Famous underground troglodyte dwellings carved into the earth, featured in Star Wars.",
    image: "matmata",
    ecoScore: 88,
    rating: 4.5,
    reviewCount: 256,
    isHiddenGem: false,
    culturalSignificance: "Ancient Berber cave architecture showcasing centuries of adaptation to desert life.",
    sustainabilityNote: "Naturally climate-controlled structures – a model of passive sustainable architecture.",
  },
  {
    id: "kairouan",
    name: "Kairouan",
    region: "Central",
    category: ["cultural", "historical", "food"],
    description: "The fourth holiest city in Islam, renowned for its stunning Great Mosque and artisan traditions.",
    image: "kairouan",
    ecoScore: 76,
    rating: 4.7,
    reviewCount: 298,
    isHiddenGem: false,
    culturalSignificance: "Founded in 670 AD, it's one of the most important cities in Islamic history.",
    sustainabilityNote: "Active artisan economy preserving traditional crafts.",
  },
  {
    id: "djerba",
    name: "Djerba",
    region: "South",
    category: ["nature", "cultural", "food"],
    description: "A Mediterranean island paradise with pristine beaches, ancient synagogues, and vibrant markets.",
    image: "djerba",
    ecoScore: 72,
    rating: 4.6,
    reviewCount: 412,
    isHiddenGem: false,
    culturalSignificance: "Home to one of the oldest Jewish communities in the world and the El Ghriba Synagogue.",
    sustainabilityNote: "Growing eco-tourism initiatives with beach conservation programs.",
  },
  {
    id: "tozeur",
    name: "Tozeur",
    region: "South",
    category: ["nature", "cultural"],
    description: "A stunning desert oasis city with traditional brick architecture and vast palm groves.",
    image: "tozeur",
    ecoScore: 85,
    rating: 4.4,
    reviewCount: 178,
    isHiddenGem: false,
    culturalSignificance: "Gateway to the Sahara, known for its unique geometric brickwork dating back centuries.",
    sustainabilityNote: "Traditional irrigation systems (foggaras) showcase ancient water conservation.",
  },
  {
    id: "kerkouane",
    name: "Kerkouane",
    region: "North",
    category: ["historical"],
    description: "The only purely Punic city to survive, offering a rare glimpse into pre-Roman North Africa.",
    image: "sidi-bou-said",
    ecoScore: 95,
    rating: 4.3,
    reviewCount: 67,
    isHiddenGem: true,
    culturalSignificance: "UNESCO site – the only remaining example of a Phoenicio-Punic city.",
    sustainabilityNote: "Minimal tourism impact with careful archaeological preservation.",
  },
  {
    id: "takrouna",
    name: "Takrouna",
    region: "Central",
    category: ["cultural", "historical"],
    description: "A tiny Berber village perched on a rocky peak, offering panoramic views and authentic heritage.",
    image: "matmata",
    ecoScore: 93,
    rating: 4.6,
    reviewCount: 42,
    isHiddenGem: true,
    culturalSignificance: "One of the last surviving Berber hilltop villages in Tunisia.",
    sustainabilityNote: "Extremely low footprint – a living museum of Berber culture.",
  },
  {
    id: "ain-draham",
    name: "Ain Draham",
    region: "North",
    category: ["nature"],
    description: "A lush mountain town surrounded by cork oak forests – Tunisia's unexpected green paradise.",
    image: "tozeur",
    ecoScore: 90,
    rating: 4.2,
    reviewCount: 89,
    isHiddenGem: true,
    culturalSignificance: "A unique microclimate region with French colonial mountain architecture.",
    sustainabilityNote: "Ecotourism hub with guided forest walks and wildlife conservation.",
  },
];

export const regions = ["All", "North", "Central", "South"];
export const categories = ["All", "cultural", "nature", "food", "historical"];
