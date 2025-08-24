import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Smartphone, 
  TrendingUp, 
  Droplets, 
  Thermometer, 
  Activity,
  Target,
  Users,
  Heart
} from "lucide-react";
import aiAnalysisImage from "@/assets/ai-analysis.jpg";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Crop Analysis",
      description: "Advanced machine learning algorithms analyze soil conditions, predict yields, and provide actionable farming recommendations.",
      status: "In Development",
      image: aiAnalysisImage,
      stats: "Targeting 40% yield improvement"
    },
    {
      icon: Smartphone,
      title: "IoT Sensor Network",
      description: "Deploy smart sensors across your farm to monitor soil moisture, temperature, pH levels, and environmental conditions in real-time.",
      status: "Pilot Testing",
      stats: "Real-time monitoring"
    },
    {
      icon: TrendingUp,
      title: "Growth Optimization",
      description: "Data-driven insights help optimize planting schedules, irrigation timing, and harvest periods for maximum productivity.",
      status: "MVP Phase",
      stats: "Smart scheduling"
    },
    {
      icon: Users,
      title: "Women-Focused Training",
      description: "Specialized programs designed to empower women farmers with technology skills and financial literacy for independence.",
      status: "Planning",
      stats: "20-30 pilot participants"
    },
    {
      icon: Droplets,
      title: "Smart Irrigation",
      description: "Automated irrigation systems that respond to soil moisture levels and weather forecasts to conserve water and optimize growth.",
      status: "Coming Soon",
      stats: "Water conservation focus"
    },
    {
      icon: Activity,
      title: "Health Monitoring",
      description: "Early detection of plant diseases, pest infestations, and nutrient deficiencies through computer vision and AI analysis.",
      status: "Research Phase",
      stats: "Disease prevention"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Development":
        return "bg-accent/20 text-accent-foreground border-accent/30";
      case "Pilot Testing":
        return "bg-primary/20 text-primary-foreground border-primary/30";
      case "MVP Phase":
        return "bg-secondary/20 text-secondary-foreground border-secondary/30";
      case "Planning":
        return "bg-muted text-muted-foreground border-border";
      case "Coming Soon":
        return "bg-muted/50 text-muted-foreground border-border";
      case "Research Phase":
        return "bg-muted/30 text-muted-foreground border-border";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Deep-Tech Innovation
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Revolutionary AgriTech
            <span className="block text-gradient-primary">In Development</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our cutting-edge platform combines IoT sensors, AI analysis, and women-centered training 
            to transform agriculture in marginalized communities. Currently in MVP development phase.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="card-agriculture group hover:scale-105 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getStatusColor(feature.status)}`}
                    >
                      {feature.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {feature.image && (
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <div className="flex items-center gap-2 pt-2">
                    <Target className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{feature.stats}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Development Progress */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-card border border-border rounded-xl shadow-lg">
            <Heart className="w-6 h-6 text-secondary" />
            <div className="text-left">
              <div className="font-semibold text-foreground">MVP Development Progress</div>
              <div className="text-sm text-muted-foreground">Building technology that empowers women farmers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;