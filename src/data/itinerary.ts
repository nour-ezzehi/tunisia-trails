export type ItineraryDay = {
  day: number;
  title: string;
  location: string;
  activities: {
    time: string;
    activity: string;
    type: "transport" | "visit" | "food" | "rest";
    ecoTip?: string;
  }[];
  sustainabilityTip: string;
};

export const mockItinerary: ItineraryDay[] = [
  {
    day: 1,
    title: "Arrival & Tunis Discovery",
    location: "Tunis / Sidi Bou Said",
    activities: [
      { time: "09:00", activity: "Arrive at Tunis-Carthage Airport", type: "transport" },
      { time: "10:30", activity: "Explore the Medina of Tunis (UNESCO)", type: "visit", ecoTip: "Walk through the medina – no vehicle needed" },
      { time: "13:00", activity: "Traditional couscous at Dar El Jeld", type: "food" },
      { time: "15:00", activity: "Visit Bardo Museum", type: "visit" },
      { time: "17:30", activity: "Sunset at Sidi Bou Said", type: "visit", ecoTip: "Take the TGM light rail from Tunis" },
    ],
    sustainabilityTip: "Use the TGM commuter train to reach Sidi Bou Said – affordable and low-carbon.",
  },
  {
    day: 2,
    title: "Ancient Ruins & Countryside",
    location: "Dougga / Bulla Regia",
    activities: [
      { time: "08:00", activity: "Drive to Dougga archaeological site", type: "transport", ecoTip: "Share a louage (shared taxi) with fellow travelers" },
      { time: "10:00", activity: "Explore the Roman Capitol & Theater", type: "visit" },
      { time: "12:30", activity: "Picnic lunch with local produce", type: "food", ecoTip: "Buy from roadside farmers – supports local economy" },
      { time: "14:30", activity: "Visit Bulla Regia underground villas", type: "visit" },
      { time: "17:00", activity: "Return to accommodation", type: "rest" },
    ],
    sustainabilityTip: "Dougga has no shops nearby – bring a reusable water bottle and pack out your waste.",
  },
  {
    day: 3,
    title: "Sacred Kairouan",
    location: "Kairouan",
    activities: [
      { time: "09:00", activity: "Visit the Great Mosque of Kairouan", type: "visit" },
      { time: "11:00", activity: "Explore artisan carpet workshops", type: "visit", ecoTip: "Handmade carpets support generations of craftspeople" },
      { time: "13:00", activity: "Try makroudh pastries at a local bakery", type: "food" },
      { time: "15:00", activity: "Wander the Medina & Aghlabid Basins", type: "visit" },
      { time: "17:30", activity: "Traditional hammam experience", type: "rest" },
    ],
    sustainabilityTip: "Support local artisans by purchasing handmade goods directly from workshops.",
  },
  {
    day: 4,
    title: "Desert Magic",
    location: "Tozeur / Chott el Jerid",
    activities: [
      { time: "07:00", activity: "Early departure to Tozeur", type: "transport" },
      { time: "10:00", activity: "Cross Chott el Jerid salt lake", type: "visit" },
      { time: "12:00", activity: "Explore Tozeur's old town (Ouled el Hadef)", type: "visit", ecoTip: "The traditional brick architecture is naturally climate-adapted" },
      { time: "14:00", activity: "Lunch in the palm grove oasis", type: "food" },
      { time: "16:00", activity: "Visit Ong Jmal (Star Wars filming location)", type: "visit" },
      { time: "19:00", activity: "Stargazing in the desert", type: "rest" },
    ],
    sustainabilityTip: "The Saharan ecosystem is fragile – stay on designated paths and avoid disturbing wildlife.",
  },
  {
    day: 5,
    title: "Island Paradise & Farewell",
    location: "Djerba",
    activities: [
      { time: "08:00", activity: "Travel to Djerba", type: "transport" },
      { time: "11:00", activity: "Visit El Ghriba Synagogue", type: "visit" },
      { time: "13:00", activity: "Seafood lunch at Houmt Souk", type: "food" },
      { time: "15:00", activity: "Explore Djerba Explore park & crocodile farm", type: "visit" },
      { time: "17:00", activity: "Beach time & relaxation", type: "rest", ecoTip: "Choose eco-certified beach areas" },
    ],
    sustainabilityTip: "Djerba has active beach cleanup programs – consider joining one during your visit.",
  },
];
