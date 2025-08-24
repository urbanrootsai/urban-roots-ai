import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  Users, 
  Target, 
  Rocket, 
  Heart, 
  Brain,
  Sprout,
  TrendingUp,
  Globe,
  ArrowRight
} from "lucide-react";

const About = () => {
  const timeline = [
    {
      phase: "Research & Development",
      status: "Completed",
      description: "Extensive research into agricultural challenges faced by women farmers in marginalized communities.",
      icon: Brain
    },
    {
      phase: "Technology Foundation",
      status: "In Progress",
      description: "Building core IoT infrastructure and AI analysis capabilities for our MVP platform.",
      icon: Rocket
    },
    {
      phase: "Pilot Program Launch",
      status: "Upcoming",
      description: "Testing with 20-30 women farmers to validate our technology and gather real-world data.",
      icon: Users
    },
    {
      phase: "Scale & Impact",
      status: "Future",
      description: "Expanding to serve hundreds of farmers while maintaining our 10% profit commitment.",
      icon: TrendingUp
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Women-Centered Approach",
      description: "Every decision prioritizes the needs and empowerment of women farmers in marginalized communities."
    },
    {
      icon: Brain,
      title: "Deep-Tech Innovation",
      description: "Leveraging cutting-edge IoT sensors and AI algorithms to solve real agricultural challenges."
    },
    {
      icon: Globe,
      title: "Sustainable Impact",
      description: "Building solutions that improve both farming outcomes and environmental sustainability."
    },
    {
      icon: Target,
      title: "Measurable Results",
      description: "Committed to transparent reporting and measurable impact on farmers' lives and livelihoods."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-primary/20 text-primary border-primary/30";
      case "In Progress":
        return "bg-secondary/20 text-secondary-foreground border-secondary/30";
      case "Upcoming":
        return "bg-accent/20 text-accent-foreground border-accent/30";
      case "Future":
        return "bg-muted text-muted-foreground border-border";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Building the Future of
              <span className="block text-gradient-primary">Agricultural Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Urban Roots AI was born from a simple belief: technology should empower those who need it most. 
              We're developing deep-tech solutions specifically designed for women farmers in marginalized communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl">
                    <Lightbulb className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We're not just building agricultural technology—we're creating pathways to financial independence 
                  for women farmers through innovative IoT sensors, AI-powered insights, and comprehensive training programs.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our commitment goes beyond profit: <span className="font-semibold text-secondary">10% of all profits</span> are 
                  reinvested directly into financial literacy and skills training programs for marginalized women.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-primary font-medium mb-1">Active Users</div>
                  <div className="text-xs text-muted-foreground">Early adopters testing our MVP</div>
                </div>
                <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/10">
                  <div className="text-3xl font-bold text-secondary mb-2">20-30</div>
                  <div className="text-sm text-secondary font-medium mb-1">Pilot Program Target</div>
                  <div className="text-xs text-muted-foreground">Women farmers for MVP validation</div>
                </div>
                <div className="bg-accent/5 p-6 rounded-xl border border-accent/10">
                  <div className="text-3xl font-bold text-accent mb-2">10%</div>
                  <div className="text-sm text-accent font-medium mb-1">Profit Commitment</div>
                  <div className="text-xs text-muted-foreground">Reinvested in women's empowerment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Development Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From research to impact: how we're building technology that truly serves marginalized communities.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((phase, index) => {
                const IconComponent = phase.icon;
                return (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-xl font-bold text-foreground">{phase.phase}</h3>
                        <Badge className={getStatusColor(phase.status)}>
                          {phase.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every line of code we write.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="card-agriculture">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{value.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-2xl">
              <Sprout className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a farmer, partner, investor, or supporter, there's a place for you 
              in our journey to transform agriculture through technology and social impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-gradient-primary text-primary-foreground px-8" asChild>
                <a href="/join-waitlist">
                  Join Our Pilot Program
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Contact Our Team</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;