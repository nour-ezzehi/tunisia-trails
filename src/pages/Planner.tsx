import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, Calendar, Wallet, Heart, Leaf, Zap, Clock, MapPin,
  Utensils, Bus, Eye, ChevronRight, Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EcoScore from "@/components/EcoScore";
import { mockItinerary } from "@/data/itinerary";

const interests = [
  { id: "culture", label: "Culture", icon: "🏛️" },
  { id: "food", label: "Food", icon: "🍽️" },
  { id: "adventure", label: "Adventure", icon: "🏔️" },
  { id: "history", label: "History", icon: "📜" },
  { id: "nature", label: "Nature", icon: "🌿" },
  { id: "beach", label: "Beach", icon: "🏖️" },
];

const paceOptions = [
  { id: "relaxed", label: "Relaxed", desc: "2-3 activities/day" },
  { id: "balanced", label: "Balanced", desc: "3-4 activities/day" },
  { id: "intense", label: "Intense", desc: "5+ activities/day" },
];

const typeIcons: Record<string, typeof MapPin> = {
  transport: Bus,
  visit: Eye,
  food: Utensils,
  rest: Clock,
};

const Planner = () => {
  const [step, setStep] = useState<"form" | "loading" | "result">("form");
  const [selectedInterests, setSelectedInterests] = useState<string[]>(["culture", "food"]);
  const [pace, setPace] = useState("balanced");
  const [sustainability, setSustainability] = useState([70]);
  const [startDate, setStartDate] = useState("2026-04-15");
  const [endDate, setEndDate] = useState("2026-04-19");
  const [budget, setBudget] = useState("medium");

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleGenerate = () => {
    setStep("loading");
    setTimeout(() => setStep("result"), 2500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm mb-4">
              <Sparkles className="h-4 w-4" />
              AI-Powered Planning
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Plan Your Perfect Trip
            </h1>
            <p className="text-muted-foreground mt-3">
              Tell us your preferences and our AI will craft a personalized itinerary.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {step === "form" && (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-card rounded-2xl border border-border p-6 sm:p-8 space-y-8"
              >
                {/* Dates */}
                <div>
                  <label className="font-display font-semibold text-card-foreground flex items-center gap-2 mb-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    Travel Dates
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs text-muted-foreground mb-1 block">Start</span>
                      <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground mb-1 block">End</span>
                      <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </div>
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="font-display font-semibold text-card-foreground flex items-center gap-2 mb-3">
                    <Wallet className="h-5 w-5 text-primary" />
                    Budget
                  </label>
                  <div className="flex gap-3">
                    {["budget", "medium", "luxury"].map((b) => (
                      <button
                        key={b}
                        onClick={() => setBudget(b)}
                        className={`flex-1 py-3 rounded-xl text-sm font-medium capitalize transition-all ${
                          budget === b
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {b === "budget" ? "💰 Budget" : b === "medium" ? "💎 Medium" : "👑 Luxury"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <label className="font-display font-semibold text-card-foreground flex items-center gap-2 mb-3">
                    <Heart className="h-5 w-5 text-primary" />
                    Interests
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {interests.map((int) => (
                      <button
                        key={int.id}
                        onClick={() => toggleInterest(int.id)}
                        className={`py-3 px-4 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                          selectedInterests.includes(int.id)
                            ? "bg-accent text-accent-foreground shadow-md"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        <span>{int.icon}</span>
                        {int.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sustainability */}
                <div>
                  <label className="font-display font-semibold text-card-foreground flex items-center gap-2 mb-3">
                    <Leaf className="h-5 w-5 text-eco" />
                    Sustainability Preference
                  </label>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-muted-foreground">Standard</span>
                    <Slider
                      value={sustainability}
                      onValueChange={setSustainability}
                      max={100}
                      step={10}
                      className="flex-1"
                    />
                    <span className="text-xs text-muted-foreground">Eco-Max</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Current: {sustainability[0]}% eco-priority
                  </p>
                </div>

                {/* Pace */}
                <div>
                  <label className="font-display font-semibold text-card-foreground flex items-center gap-2 mb-3">
                    <Zap className="h-5 w-5 text-primary" />
                    Travel Pace
                  </label>
                  <div className="flex gap-3">
                    {paceOptions.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setPace(p.id)}
                        className={`flex-1 py-3 rounded-xl text-center transition-all ${
                          pace === p.id
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        <div className="text-sm font-medium">{p.label}</div>
                        <div className="text-xs mt-0.5 opacity-70">{p.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={handleGenerate}
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-base"
                >
                  <Sparkles className="h-5 w-5" />
                  Generate My Itinerary
                </Button>
              </motion.div>
            )}

            {step === "loading" && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-card rounded-2xl border border-border p-12 text-center"
              >
                <Loader2 className="h-12 w-12 text-primary animate-spin mx-auto mb-6" />
                <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">
                  Crafting your perfect itinerary...
                </h3>
                <p className="text-muted-foreground text-sm">Analyzing destinations, routes, and sustainability data</p>
                <div className="mt-6 space-y-2 max-w-xs mx-auto">
                  {["Searching hidden gems", "Optimizing route", "Calculating eco-scores"].map((t, i) => (
                    <motion.div
                      key={t}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.6 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 rounded-full bg-eco animate-pulse-soft" />
                      {t}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {step === "result" && (
              <motion.div
                key="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {/* Summary */}
                <div className="bg-card rounded-2xl border border-border p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-display text-2xl font-bold text-card-foreground">
                      Your Tunisia Adventure
                    </h2>
                    <EcoScore score={84} size="lg" />
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>📅 5 Days</span>
                    <span>📍 6 Destinations</span>
                    <span>🌿 Low-carbon route</span>
                    <span>💎 2 Hidden gems included</span>
                  </div>
                </div>

                {/* Itinerary Days */}
                {mockItinerary.map((day) => (
                  <motion.div
                    key={day.day}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-2xl border border-border overflow-hidden"
                  >
                    <div className="bg-primary/5 px-6 py-4 border-b border-border">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                            Day {day.day}
                          </span>
                          <h3 className="font-display text-lg font-semibold text-card-foreground">
                            {day.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {day.location}
                        </div>
                      </div>
                    </div>
                    <div className="p-6 space-y-3">
                      {day.activities.map((act, i) => {
                        const Icon = typeIcons[act.type] || Eye;
                        return (
                          <div key={i} className="flex gap-4 items-start">
                            <span className="text-xs text-muted-foreground font-mono w-12 pt-1 shrink-0">
                              {act.time}
                            </span>
                            <div className="bg-muted/50 w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                              <Icon className="h-4 w-4 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-card-foreground font-medium">{act.activity}</p>
                              {act.ecoTip && (
                                <p className="text-xs text-eco mt-1 flex items-center gap-1">
                                  <Leaf className="h-3 w-3" />
                                  {act.ecoTip}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                      <div className="mt-4 pt-4 border-t border-border flex items-start gap-2">
                        <Leaf className="h-4 w-4 text-eco shrink-0 mt-0.5" />
                        <p className="text-xs text-eco">{day.sustainabilityTip}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                <div className="text-center pt-4">
                  <Button
                    onClick={() => setStep("form")}
                    variant="outline"
                    className="gap-2"
                  >
                    <ChevronRight className="h-4 w-4 rotate-180" />
                    Modify Preferences
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Planner;
