import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Mail, Calendar, Handshake } from "lucide-react";

const CTA = () => {
  const ctaOptions = [
    {
      icon: Users,
      title: "Join Our Pilot Program",
      description: "Be among the first 20-30 women farmers to test our MVP technology",
      action: "Apply for Pilot",
      href: "/join-waitlist",
      variant: "primary" as const,
      badge: "Limited Spots"
    },
    {
      icon: Handshake,
      title: "Partner With Us",
      description: "Connect with our team to explore partnerships and collaboration opportunities",
      action: "Partner Inquiry",
      href: "/contact",
      variant: "secondary" as const,
      badge: "Open"
    },
    {
      icon: Mail,
      title: "Stay Updated",
      description: "Get exclusive updates on our MVP development and early access opportunities",
      action: "Join Waitlist",
      href: "/join-waitlist",
      variant: "outline" as const,
      badge: "Free"
    },
    {
      icon: Calendar,
      title: "Schedule a Demo",
      description: "Book a call to see our technology in action and discuss your farming needs",
      action: "Book Demo",
      href: "/contact",
      variant: "outline" as const,
      badge: "Available"
    }
  ];

  const getCardStyle = (variant: string) => {
    switch (variant) {
      case "primary":
        return "bg-gradient-primary text-primary-foreground border-primary/20";
      case "secondary":
        return "bg-gradient-earth text-secondary-foreground border-secondary/20";
      default:
        return "card-agriculture";
    }
  };

  const getButtonStyle = (variant: string) => {
    switch (variant) {
      case "primary":
        return "bg-white/20 text-white hover:bg-white/30 border-white/30";
      case "secondary":
        return "bg-white/20 text-white hover:bg-white/30 border-white/30";
      default:
        return "btn-gradient-primary text-primary-foreground";
    }
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Get Involved
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Transform
            <span className="block text-gradient-primary">Agriculture Together?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're a farmer, partner, or supporter, there are multiple ways to be part of 
            our mission to empower women through agricultural technology.
          </p>
        </div>

        {/* CTA Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {ctaOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <Card key={index} className={`${getCardStyle(option.variant)} group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-white/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`${option.variant === 'primary' || option.variant === 'secondary' ? 'border-white/30 text-white' : 'border-border'}`}
                    >
                      {option.badge}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                  <p className={`mb-6 leading-relaxed ${option.variant === 'primary' || option.variant === 'secondary' ? 'text-white/90' : 'text-muted-foreground'}`}>
                    {option.description}
                  </p>
                  
                  <Button 
                    className={`w-full ${getButtonStyle(option.variant)} group-hover:scale-105 transition-all duration-300`}
                    asChild
                  >
                    <a href={option.href} className="flex items-center justify-center gap-2">
                      {option.action}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Building the Future of Agriculture
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our MVP is in development, but our commitment to empowering women farmers is unwavering. 
            Join us on this journey to revolutionize agriculture through technology and social impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-gradient-primary text-primary-foreground px-8" asChild>
              <a href="/join-waitlist">
                Join Our Mission
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/about">Learn Our Story</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;