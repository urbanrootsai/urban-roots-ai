import { Brain, Heart, TrendingUp, Zap, Shield, Globe } from 'lucide-react';
import aiAnalysisImage from '@/assets/ai-analysis.jpg';
import socialImpactImage from '@/assets/social-impact.jpg';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze soil, weather, and crop data to provide actionable insights.',
      image: aiAnalysisImage,
      gradient: 'gradient-tech'
    },
    {
      icon: Heart,
      title: 'Social Impact',
      description: '10% of profits fund training programs that empower marginalized women with agricultural skills.',
      image: socialImpactImage,
      gradient: 'gradient-impact'
    },
    {
      icon: TrendingUp,
      title: 'Yield Optimization',
      description: 'Increase crop yields by up to 40% with precision farming recommendations and real-time monitoring.',
      gradient: 'gradient-growth'
    },
    {
      icon: Zap,
      title: 'IoT Integration',
      description: 'Seamlessly connect sensors, drones, and farming equipment for comprehensive farm automation.',
      gradient: 'gradient-tech'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Early detection of diseases, pests, and weather threats to protect your investments.',
      gradient: 'gradient-growth'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Connect with farmers worldwide, share knowledge, and contribute to sustainable agriculture.',
      gradient: 'gradient-impact'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient-primary mb-6">
            Technology Meets Purpose
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our agricultural intelligence platform combines cutting-edge AI with meaningful social impact, 
            creating sustainable solutions for farmers and communities worldwide.
          </p>
        </div>

        {/* Featured Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-feature group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Feature Image (for first two items) */}
              {feature.image && (
                <div className="relative mb-6 -mx-6 -mt-6 rounded-t-xl overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-${feature.gradient} opacity-20`}></div>
                </div>
              )}

              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-${feature.gradient} shadow-soft mb-4 group-hover:shadow-glow transition-all duration-300`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Arrow */}
              <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                <span className="text-sm font-medium mr-2">Learn more</span>
                <TrendingUp className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center space-x-4 bg-gradient-earth rounded-full px-8 py-4 shadow-medium">
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Every purchase creates impact</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-success" />
              <span className="font-semibold text-foreground">40% average yield increase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;