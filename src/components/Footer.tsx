import { Compass, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Compass className="h-7 w-7" />
            <span className="font-display text-xl font-bold">SafarAI</span>
          </div>
          <p className="text-primary-foreground/70 max-w-md text-sm leading-relaxed">
            AI-powered travel that celebrates hidden cultures, optimizes your journey, and champions sustainable exploration across Tunisia and beyond.
          </p>
          <div className="flex items-center gap-2 mt-4 text-eco text-sm">
            <Leaf className="h-4 w-4" />
            <span>Committed to sustainable tourism</span>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Explore</h4>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            <Link to="/explore" className="block hover:text-primary-foreground transition-colors">Destinations</Link>
            <Link to="/planner" className="block hover:text-primary-foreground transition-colors">AI Planner</Link>
            <Link to="/community" className="block hover:text-primary-foreground transition-colors">Community</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">About</h4>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            <span className="block">Sustainability</span>
            <span className="block">Our Mission</span>
            <span className="block">Contact</span>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/50">
        © 2026 SafarAI. Intelligent travel for a better world.
      </div>
    </div>
  </footer>
);

export default Footer;
