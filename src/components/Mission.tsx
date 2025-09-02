import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Target, 
  Heart, 
  Sprout, 
  TrendingUp, 
  BookOpen,
  DollarSign,
  Globe
} from "lucide-react";
import socialImpactImage from "@/assets/social-impact.jpg";

const Mission = () => {
  const impactMetrics = [
    {
      icon: Users,
      label: "Pilot Farmers",
      value: "20-30",
      description: "Target for MVP testing",
      progress: 15,
      color: "bg-primary"
    },
    {
      icon: BookOpen,
      label: "Agronomist Partners",
      value: "2",
      description: "Building expert network",
      progress: 50,
      color: "bg-accent"
    },
    {
      icon: Heart,
      label: "Profit Commitment",
      value: "10%",
      description: "For women's financial training",
      progress: 100,
      color: "bg-secondary"
    },
    {
      icon: Sprout,
      label: "Focus on Women",
      value: "100%",
      description: "Our unwavering dedication",
      progress: 100,
      color: "bg-primary"
    }
  ];

  const missionPoints = [
    {
      icon: Target,
      title: "Empower Through Technology",
      description: "Providing cutting-edge IoT and AI tools specifically designed for women farmers in marginalized communities."
    },
    {
      icon: TrendingUp,
      title: "Drive Financial Independence",
      description: "10% of all profits invested in financial literacy and business skills training for women farmers."
    },
    {
      icon: Globe,
      title: "Sustainable Agriculture",
      description: "Promoting climate-smart farming techniques that improve yields while protecting the environment."
    },
    {
      icon: DollarSign,
      title: "Economic Empowerment",
      description: "Creating pathways for women to build sustainable agricultural businesses and achieve financial independence."
    }
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
            Our Commitment
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Technology Meets
            <span className="block text-gradient-primary">Social Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Urban Roots AI isn't just about technology—it's about creating lasting change in 
            the lives of women farmers. Our MVP focuses on building sustainable solutions that 
            empower communities through innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Impact Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={socialImpactImage}
                alt="Women farmers learning technology and financial skills"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Empowering Women Farmers</h3>
                <p className="text-white/90">Building skills for financial independence</p>
              </div>
            </div>
            
            {/* Floating metrics */}
            <div className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-primary">MVP</div>
              <div className="text-sm text-muted-foreground">Development Phase</div>
            </div>
          </div>

          {/* Mission Content */}
          <div className="space-y-8">
            {/* Mission Points */}
            <div className="space-y-6">
              {missionPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
                      <p className="text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Current Targets & Commitments
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These metrics represent our goals and commitments as we build our MVP and prepare for pilot testing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <Card key={index} className="card-agriculture text-center">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                    <div className="text-sm font-medium text-foreground mb-2">{metric.label}</div>
                    <div className="text-xs text-muted-foreground mb-4">{metric.description}</div>
                    <Progress value={metric.progress} className="h-2" />
                    <div className="text-xs text-muted-foreground mt-2">
                      {metric.progress === 100 ? "Committed" : "In Progress"}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;