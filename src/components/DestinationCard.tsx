import { Star, Gem } from "lucide-react";
import { motion } from "framer-motion";
import EcoScore from "./EcoScore";
import type { Destination } from "@/data/destinations";

import sidiBouSaidImg from "@/assets/sidi-bou-said.jpg";
import douggaImg from "@/assets/dougga.jpg";
import matmataImg from "@/assets/matmata.jpg";
import kairouanImg from "@/assets/kairouan.jpg";
import djerbaImg from "@/assets/djerba.jpg";
import tozeurImg from "@/assets/tozeur.jpg";

const imageMap: Record<string, string> = {
  "sidi-bou-said": sidiBouSaidImg,
  dougga: douggaImg,
  matmata: matmataImg,
  kairouan: kairouanImg,
  djerba: djerbaImg,
  tozeur: tozeurImg,
};

const DestinationCard = ({ destination }: { destination: Destination }) => {
  const img = imageMap[destination.image] || sidiBouSaidImg;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={img}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-3 right-3">
          <EcoScore score={destination.ecoScore} />
        </div>
        {destination.isHiddenGem && (
          <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Gem className="h-3 w-3" />
            Hidden Gem
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display text-lg font-semibold text-card-foreground">{destination.name}</h3>
          <div className="flex items-center gap-1 text-sm text-gold">
            <Star className="h-4 w-4 fill-current" />
            <span className="font-medium">{destination.rating}</span>
            <span className="text-muted-foreground text-xs">({destination.reviewCount})</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{destination.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {destination.category.map((cat) => (
            <span key={cat} className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-full capitalize">
              {cat}
            </span>
          ))}
          <span className="bg-muted text-muted-foreground text-xs px-2.5 py-1 rounded-full">
            {destination.region}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
