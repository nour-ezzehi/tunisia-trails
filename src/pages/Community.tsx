import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin, Camera, FileText, Shield, Star, Award, CheckCircle2, Upload
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Community = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 section-padding">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm mb-4">
              <Star className="h-4 w-4" />
              Community Contributions
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Share a Hidden Gem
            </h1>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Help fellow travelers discover authentic Tunisian experiences. Earn badges and points for quality contributions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              {!submitted ? (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="bg-card rounded-2xl border border-border p-6 sm:p-8 space-y-6"
                >
                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-1.5 block">Place Name *</label>
                    <Input
                      placeholder="e.g., Café des Nattes"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-card-foreground mb-1.5 block">Category *</label>
                      <Select>
                        <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cultural">Cultural</SelectItem>
                          <SelectItem value="nature">Nature</SelectItem>
                          <SelectItem value="food">Food & Drink</SelectItem>
                          <SelectItem value="historical">Historical</SelectItem>
                          <SelectItem value="adventure">Adventure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-card-foreground mb-1.5 block">Region *</label>
                      <Select>
                        <SelectTrigger><SelectValue placeholder="Select region" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="north">North</SelectItem>
                          <SelectItem value="central">Central</SelectItem>
                          <SelectItem value="south">South</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-1.5 block">Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Address or GPS coordinates" className="pl-10" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-1.5 block">Description *</label>
                    <Textarea placeholder="What makes this place special? Share your experience..." rows={4} required />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-1.5 block">Cultural Significance</label>
                    <Textarea placeholder="Historical or cultural context of this place..." rows={3} />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-1.5 block">Sustainability Impact</label>
                    <Textarea placeholder="How does visiting this place support the local community or environment?" rows={3} />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-1.5 block">Photos</label>
                    <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/40 transition-colors cursor-pointer">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Click or drag to upload photos</p>
                      <p className="text-xs text-muted-foreground/60 mt-1">PNG, JPG up to 5MB each</p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                  >
                    <FileText className="h-5 w-5" />
                    Submit Contribution
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card rounded-2xl border border-border p-12 text-center"
                >
                  <CheckCircle2 className="h-16 w-16 text-eco mx-auto mb-6" />
                  <h2 className="font-display text-2xl font-bold text-card-foreground mb-3">
                    Thank You!
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Your contribution is being reviewed by our AI moderation system. You'll receive feedback within 24 hours.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Award className="h-4 w-4" />
                    +50 Explorer Points Earned!
                  </div>
                  <br />
                  <Button onClick={() => setSubmitted(false)} variant="outline">
                    Submit Another
                  </Button>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Gamification */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-display font-semibold text-card-foreground mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-gold" />
                  Your Rewards
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Explorer Points</span>
                    <span className="font-semibold text-card-foreground">250</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gold h-2 rounded-full" style={{ width: "62%" }} />
                  </div>
                  <p className="text-xs text-muted-foreground">150 points to next level</p>
                </div>
                <div className="mt-4 flex gap-2">
                  {["🌟", "🗺️", "📸"].map((badge) => (
                    <div key={badge} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-lg">
                      {badge}
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg opacity-30">
                    🏆
                  </div>
                </div>
              </div>

              {/* Trust System */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-display font-semibold text-card-foreground mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Trust System
                </h3>
                <div className="space-y-3 text-sm">
                  {[
                    { label: "Verified Local", desc: "Confirmed Tunisia resident", active: true },
                    { label: "Quality Contributor", desc: "5+ approved submissions", active: true },
                    { label: "Top Reviewer", desc: "50+ helpful reviews", active: false },
                  ].map((badge) => (
                    <div key={badge.label} className={`flex items-start gap-3 ${badge.active ? "" : "opacity-40"}`}>
                      <CheckCircle2 className={`h-5 w-5 shrink-0 mt-0.5 ${badge.active ? "text-eco" : "text-muted-foreground"}`} />
                      <div>
                        <p className="font-medium text-card-foreground">{badge.label}</p>
                        <p className="text-xs text-muted-foreground">{badge.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Moderation */}
              <div className="bg-primary/5 rounded-2xl border border-primary/10 p-6">
                <h3 className="font-display font-semibold text-card-foreground mb-3 text-sm">
                  🤖 AI Moderation Pipeline
                </h3>
                <div className="space-y-2 text-xs text-muted-foreground">
                  {["Duplicate detection", "Spam & quality filtering", "Sentiment analysis", "Geo-verification", "Trust score assignment"].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Community;
