import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Leaf, Brain, Users, ArrowRight, Star, Gem, Shield, Search, Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationCard from "@/components/DestinationCard";
import EcoScore from "@/components/EcoScore";
import { destinations } from "@/data/destinations";
import heroImg from "@/assets/hero-tunisia.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Index = () => {
  const featured = destinations.filter((d) => d.rating >= 4.5).slice(0, 3);
  const hiddenGems = destinations.filter((d) => d.isHiddenGem).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Tunisia coastline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full text-sm mb-6 border border-accent/30">
              <Sparkles className="h-4 w-4 text-gold" />
              AI-Powered Travel Intelligence
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Discover Tunisia's
              <br />
              <span className="text-gold">Hidden Soul</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg leading-relaxed">
              An intelligent travel companion that reveals hidden cultural treasures, optimizes your journey, and champions sustainable exploration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/planner">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-base px-8">
                  <Sparkles className="h-5 w-5" />
                  Plan My Trip
                </Button>
              </Link>
              <Link to="/explore">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2 text-base px-8">
                  <MapPin className="h-5 w-5" />
                  Explore Destinations
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Intelligence Layers</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
              How SafarAI Works
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Three intelligent layers work together to create truly personalized, sustainable travel experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Community Data",
                description: "Locals share hidden gems and authentic insights. Tourists leave verified reviews. Gamified rewards encourage quality contributions.",
                color: "text-accent",
                bg: "bg-accent/10",
                items: ["Local submissions", "Verified reviews", "Trust badges"],
              },
              {
                icon: Shield,
                title: "AI Moderation",
                description: "Intelligent quality control ensures every recommendation is authentic, accurate, and trustworthy.",
                color: "text-primary",
                bg: "bg-primary/10",
                items: ["Spam filtering", "Sentiment analysis", "Trust scoring"],
              },
              {
                icon: Brain,
                title: "AI Agent",
                description: "Context-aware recommendations powered by advanced AI that understands your preferences and optimizes every detail.",
                color: "text-teal-light",
                bg: "bg-teal-light/10",
                items: ["Personalized itineraries", "Route optimization", "Real-time search"],
              },
            ].map((layer, i) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <div className={`${layer.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-5`}>
                  <layer.icon className={`h-7 w-7 ${layer.color}`} />
                </div>
                <h3 className="font-display text-xl font-semibold text-card-foreground mb-3">{layer.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{layer.description}</p>
                <ul className="space-y-2">
                  {layer.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className={`w-1.5 h-1.5 rounded-full ${layer.bg.replace('/10', '')}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="flex items-end justify-between mb-12">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Top Rated</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
                Featured Destinations
              </h2>
            </div>
            <Link to="/explore" className="hidden sm:flex items-center gap-2 text-primary font-medium hover:underline">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((d) => (
              <DestinationCard key={d.id} destination={d} />
            ))}
          </div>
        </div>
      </section>

      {/* Hidden Gems */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-accent mb-3">
              <Gem className="h-5 w-5" />
              <span className="font-semibold text-sm uppercase tracking-wider">Off the Beaten Path</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Hidden Gems
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Discover lesser-known treasures curated by locals and verified by our AI.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hiddenGems.map((d) => (
              <DestinationCard key={d.id} destination={d} />
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="section-padding bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-eco mb-3">
              <Leaf className="h-5 w-5" />
              <span className="font-semibold text-sm uppercase tracking-wider">Travel Responsibly</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Sustainable by Design
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Leaf, title: "Eco Scores", desc: "Every destination rated for environmental impact" },
              { icon: Route, title: "Low-Carbon Routes", desc: "Optimized itineraries prioritizing public transport" },
              { icon: Shield, title: "Cultural Preservation", desc: "Supporting local communities and heritage sites" },
              { icon: Search, title: "Transparent Impact", desc: "See your trip's carbon footprint at a glance" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border text-center"
              >
                <div className="bg-eco/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-eco" />
                </div>
                <h3 className="font-display font-semibold text-card-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Ready to Explore Tunisia?
            </h2>
            <p className="text-primary-foreground/70 mb-8 text-lg">
              Let our AI craft the perfect journey tailored to your interests, pace, and values.
            </p>
            <Link to="/planner">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-base px-10">
                <Sparkles className="h-5 w-5" />
                Plan My Trip Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
