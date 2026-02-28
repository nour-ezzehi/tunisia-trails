import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Gem } from "lucide-react";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationCard from "@/components/DestinationCard";
import { destinations, regions, categories } from "@/data/destinations";

const Explore = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [category, setCategory] = useState("All");
  const [showGemsOnly, setShowGemsOnly] = useState(false);

  const filtered = destinations.filter((d) => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.description.toLowerCase().includes(search.toLowerCase());
    const matchRegion = region === "All" || d.region === region;
    const matchCategory = category === "All" || d.category.includes(category);
    const matchGem = !showGemsOnly || d.isHiddenGem;
    return matchSearch && matchRegion && matchCategory && matchGem;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-8 section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Explore Tunisia
            </h1>
            <p className="text-muted-foreground mb-8">
              Discover authentic destinations across every region.
            </p>

            {/* Search */}
            <div className="relative max-w-md mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search destinations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 bg-card"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 items-center">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <div className="flex gap-2">
                {regions.map((r) => (
                  <button
                    key={r}
                    onClick={() => setRegion(r)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      region === r
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-foreground/70 border border-border hover:bg-muted"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
              <div className="w-px h-6 bg-border hidden sm:block" />
              <div className="flex gap-2 flex-wrap">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium capitalize transition-colors ${
                      category === c
                        ? "bg-accent text-accent-foreground"
                        : "bg-card text-foreground/70 border border-border hover:bg-muted"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <div className="w-px h-6 bg-border hidden sm:block" />
              <button
                onClick={() => setShowGemsOnly(!showGemsOnly)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 transition-colors ${
                  showGemsOnly
                    ? "bg-gold text-accent-foreground"
                    : "bg-card text-foreground/70 border border-border hover:bg-muted"
                }`}
              >
                <Gem className="h-3.5 w-3.5" />
                Hidden Gems
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="section-padding pt-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-6">{filtered.length} destinations found</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((d) => (
              <DestinationCard key={d.id} destination={d} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-lg">No destinations match your filters.</p>
              <p className="text-sm mt-2">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Explore;
