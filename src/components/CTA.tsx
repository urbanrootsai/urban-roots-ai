import { ArrowRight, Mail, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Users className="h-4 w-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">
              Join 10,000+ Farmers Worldwide
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Ready to Transform
            <br />
            <span className="text-gradient-earth">Your Farm?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our waitlist to get early access to cutting-edge agricultural intelligence 
            and be part of a movement that's changing farming forever.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
              <TrendingUp className="h-4 w-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">Early Access</span>
            </div>
            <div className="flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Mail className="h-4 w-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">Exclusive Updates</span>
            </div>
            <div className="flex items-center space-x-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="h-4 w-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">Community Access</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/join-waitlist">
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-10 py-4 group shadow-strong hover:shadow-glow transition-all duration-300">
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-10 py-4 backdrop-blur-sm"
              >
                Talk to Our Team
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-primary-foreground mb-2">10,000+</div>
                <div className="text-primary-foreground/80">Farmers on Waitlist</div>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold text-primary-foreground mb-2">40%</div>
                <div className="text-primary-foreground/80">Average Yield Increase</div>
              </div>
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <div className="text-3xl font-bold text-primary-foreground mb-2">1,200+</div>
                <div className="text-primary-foreground/80">Women Empowered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;