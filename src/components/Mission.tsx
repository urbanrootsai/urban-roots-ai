import { Heart, Users, TrendingUp, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Mission = () => {
  const impactStats = [
    {
      icon: Users,
      value: '1,200+',
      label: 'Women Trained',
      description: 'Marginalized women equipped with agricultural skills'
    },
    {
      icon: TrendingUp,
      value: '$2.3M',
      label: 'Economic Impact',
      description: 'Generated for farming communities'
    },
    {
      icon: Target,
      value: '98%',
      label: 'Success Rate',
      description: 'Of trained participants gain employment'
    },
    {
      icon: Heart,
      value: '10%',
      label: 'Profit Donated',
      description: 'Committed to social impact programs'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-organic opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Heart className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Mission</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-hero">Technology for</span>
            <br />
            <span className="text-foreground">Human Empowerment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe technology should serve humanity. That's why we donate 10% of our profits 
            to train marginalized women with agricultural skills, creating sustainable pathways to financial independence.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Mission Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-foreground">
              Breaking Barriers Through Agriculture
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-growth rounded-full flex items-center justify-center shadow-soft">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Skill Development</h4>
                  <p className="text-muted-foreground">
                    Comprehensive training programs in modern farming techniques, business skills, and technology literacy.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-tech rounded-full flex items-center justify-center shadow-soft">
                  <TrendingUp className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Economic Empowerment</h4>
                  <p className="text-muted-foreground">
                    Creating sustainable income opportunities through entrepreneurship and employment in the agricultural sector.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-impact rounded-full flex items-center justify-center shadow-soft">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Community Impact</h4>
                  <p className="text-muted-foreground">
                    Building stronger communities through knowledge sharing and collaborative farming initiatives.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/about">
                <Button className="btn-hero-primary">
                  <Heart className="mr-2 h-5 w-5" />
                  Learn About Our Impact
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Impact Stats */}
          <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 shadow-strong border border-border/50">
              <h3 className="text-2xl font-bold text-center mb-8 text-gradient-primary">
                Our Impact So Far
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {impactStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center group animate-fade-in"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="flex justify-center mb-3">
                      <div className="w-16 h-16 bg-gradient-earth rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                        <stat.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                      {stat.value}
                    </div>
                    <div className="font-semibold text-foreground mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground leading-tight">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="mt-8 p-4 bg-accent/50 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">2024 Goal Progress</span>
                  <span className="text-sm font-bold text-primary">2,500 Women</span>
                </div>
                <div className="w-full bg-accent rounded-full h-3">
                  <div className="bg-gradient-growth h-3 rounded-full w-1/2 animate-grow"></div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  48% towards our goal of training 2,500 women this year
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;