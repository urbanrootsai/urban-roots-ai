import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Users, Target, Sprout } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AI-powered agriculture with IoT sensors monitoring crops"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* MVP Badge */}
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            <Sprout className="w-4 h-4 mr-2" />
            MVP Phase • Join Our Pilot Program
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Pioneering Deep-Tech
            <span className="block text-white/95">Agritech for Women</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Empowering marginalized communities with IoT-enabled farming and AI-driven agricultural insights. 
            Building the future of sustainable agriculture, one pilot farmer at a time.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">3</div>
              <div className="text-sm text-white/80">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">20+</div>
              <div className="text-sm text-white/80">Pilot Participants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">10%</div>
              <div className="text-sm text-white/80">Profit Commitment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">100%</div>
              <div className="text-sm text-white/80">Focus on Women</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white hover:bg-white/90 text-primary px-8 py-6 text-lg font-semibold rounded-xl"
              asChild
            >
              <a href="/join-waitlist" className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Join Pilot Program
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl"
              asChild
            >
              <a href="/about" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Learn More
              </a>
            </Button>
          </div>

          {/* Early Stage Indicator */}
          <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="flex items-center justify-center gap-2 text-sm text-white/90">
              <Target className="w-4 h-4" />
              <span>MVP Development • Pilot Testing • Early Access Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce-subtle"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;