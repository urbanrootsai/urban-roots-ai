import { ArrowRight, Play, TrendingUp, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-agriculture.jpg';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern agriculture with IoT technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 animate-float">
        <div className="w-16 h-16 bg-primary-glow/20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-secondary/20 rounded-full blur-lg"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left animate-fade-in">
            {/* Impact Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-soft">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                10% of profits donated to empower communities
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-gradient-hero block">Agricultural</span>
              <span className="text-primary-foreground block">Intelligence</span>
              <span className="text-gradient-hero block">Reimagined</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Empowering farmers with AI-powered insights while creating social impact. 
              IoT-enabled tools meet purpose-driven technology.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center space-x-2 bg-secondary/90 backdrop-blur-sm rounded-full px-4 py-2">
                <Zap className="h-4 w-4 text-secondary-foreground" />
                <span className="text-sm font-medium text-secondary-foreground">AI Crop Monitoring</span>
              </div>
              <div className="flex items-center space-x-2 bg-primary-glow/90 backdrop-blur-sm rounded-full px-4 py-2">
                <Users className="h-4 w-4 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">Community Impact</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/join-waitlist">
                <Button className="btn-hero-primary group text-lg px-8 py-4">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 text-lg px-8 py-4 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary-foreground">10k+</div>
                <div className="text-sm text-primary-foreground/80">Farmers Empowered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary-foreground">500+</div>
                <div className="text-sm text-primary-foreground/80">Women Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary-foreground">98%</div>
                <div className="text-sm text-primary-foreground/80">Crop Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-growth rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Main Card */}
              <div className="relative bg-card/90 backdrop-blur-sm rounded-3xl p-8 shadow-strong border border-border/50">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gradient-primary mb-2">
                    Real-Time Farm Intelligence
                  </h3>
                  <p className="text-muted-foreground">
                    Monitor your crops with AI precision
                  </p>
                </div>

                {/* Mock Dashboard */}
                <div className="space-y-4">
                  <div className="bg-accent/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Soil Moisture</span>
                      <span className="text-sm text-success font-bold">85% Optimal</span>
                    </div>
                    <div className="w-full bg-accent rounded-full h-2">
                      <div className="bg-success h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>

                  <div className="bg-accent/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Crop Health</span>
                      <span className="text-sm text-primary font-bold">Excellent</span>
                    </div>
                    <div className="w-full bg-accent rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-full"></div>
                    </div>
                  </div>

                  <div className="bg-accent/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Weather Forecast</span>
                      <span className="text-sm text-info font-bold">7 Days Clear</span>
                    </div>
                    <div className="w-full bg-accent rounded-full h-2">
                      <div className="bg-info h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>

                {/* AI Insight */}
                <div className="mt-6 p-4 bg-gradient-tech rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="h-4 w-4 text-secondary-foreground" />
                    <span className="text-sm font-medium text-secondary-foreground">AI Insight</span>
                  </div>
                  <p className="text-sm text-secondary-foreground/90">
                    Perfect conditions for harvesting next week. Consider increasing irrigation in Section B.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;