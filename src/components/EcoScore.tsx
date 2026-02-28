import { Leaf } from "lucide-react";

const EcoScore = ({ score, size = "sm" }: { score: number; size?: "sm" | "lg" }) => {
  const color = score >= 85 ? "text-eco" : score >= 70 ? "text-gold" : "text-terracotta";
  const bg = score >= 85 ? "bg-eco/10" : score >= 70 ? "bg-gold/10" : "bg-terracotta/10";

  return (
    <div className={`inline-flex items-center gap-1.5 ${bg} rounded-full ${size === "lg" ? "px-4 py-2" : "px-2.5 py-1"}`}>
      <Leaf className={`${color} ${size === "lg" ? "h-5 w-5" : "h-3.5 w-3.5"}`} />
      <span className={`${color} font-semibold ${size === "lg" ? "text-base" : "text-xs"}`}>{score}</span>
    </div>
  );
};

export default EcoScore;
