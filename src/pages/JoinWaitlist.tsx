import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Users, 
  Mail, 
  MapPin, 
  Sprout, 
  CheckCircle, 
  Target,
  Heart,
  Brain
} from "lucide-react";

const JoinWaitlist = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    farmSize: "",
    experience: "",
    interests: [],
    message: "",
    newsletter: false,
    terms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.terms) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions to continue.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Application Submitted!",
      description: "Thank you for joining our pilot program. We'll be in touch soon.",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      farmSize: "",
      experience: "",
      interests: [],
      message: "",
      newsletter: false,
      terms: false
    });
  };

  const benefits = [
    {
      icon: Brain,
      title: "Early Access to AI Tools",
      description: "Be among the first to test our crop analysis and optimization features."
    },
    {
      icon: Target,
      title: "Free MVP Testing",
      description: "No cost participation in our pilot program with full support included."
    },
    {
      icon: Users,
      title: "Direct Feedback Channel",
      description: "Shape the future of our platform by providing input on features and usability."
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Join a network of women farmers pioneering sustainable agricultural technology."
    }
  ];

  const farmSizes = [
    "Less than 1 acre",
    "1-5 acres",
    "5-10 acres",
    "10-25 acres",
    "25-50 acres",
    "More than 50 acres"
  ];

  const experienceLevels = [
    "New to farming (0-2 years)",
    "Some experience (2-5 years)",
    "Experienced (5-10 years)",
    "Very experienced (10+ years)",
    "Agricultural professional"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-secondary/10 text-secondary border-secondary/20">
              Pilot Program Application
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Join Our
              <span className="block text-gradient-primary">Pilot Program</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Be part of the first group of women farmers to test Urban Roots AI's revolutionary 
              IoT and AI-powered agricultural solutions. Applications are limited to 20-30 participants.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">20-30</div>
                <div className="text-sm text-muted-foreground">Pilot Spots Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Free Participation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">MVP</div>
                <div className="text-sm text-muted-foreground">Development Phase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Application Form */}
          <div className="lg:col-span-2">
            <Card className="card-agriculture">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-primary rounded-lg">
                    <Users className="w-5 h-5 text-primary-foreground" />
                  </div>
                  Pilot Program Application
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location/Region *</Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                          placeholder="City, State/Province, Country"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Farming Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Farming Background</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="farmSize">Farm Size *</Label>
                        <Select value={formData.farmSize} onValueChange={(value) => setFormData(prev => ({ ...prev, farmSize: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select farm size" />
                          </SelectTrigger>
                          <SelectContent>
                            {farmSizes.map((size) => (
                              <SelectItem key={size} value={size}>{size}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="experience">Farming Experience *</Label>
                        <Select value={formData.experience} onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            {experienceLevels.map((level) => (
                              <SelectItem key={level} value={level}>{level}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Tell Us More</h3>
                    <div>
                      <Label htmlFor="message">Why are you interested in joining our pilot program?</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Share your farming goals, challenges, and how you think AI technology could help..."
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: checked as boolean }))}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Subscribe to our newsletter for updates on MVP development and agricultural insights
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.terms}
                        onCheckedChange={(checked) => setFormData(prev => ({ ...prev, terms: checked as boolean }))}
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the <a href="/terms" className="text-primary hover:underline">Terms of Service</a> and <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> *
                      </Label>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full btn-gradient-primary text-primary-foreground"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Program Benefits */}
            <Card className="card-agriculture">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  Program Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="flex gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-gradient-primary rounded-lg flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">{benefit.title}</h4>
                        <p className="text-xs text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="card-agriculture">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-secondary" />
                  Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Have questions about our pilot program? We're here to help!
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>pilot@urbanrootsai.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Remote-First Team</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mission Reminder */}
            <Card className="bg-gradient-to-br from-secondary/10 to-primary/5 border-secondary/20">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-xl">
                  <Sprout className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Our Commitment</h3>
                <p className="text-sm text-muted-foreground">
                  10% of all profits go directly to training programs for women's financial independence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JoinWaitlist;